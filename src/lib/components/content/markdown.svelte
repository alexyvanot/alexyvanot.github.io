<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import { browser } from '$app/environment';
	import { href as hrefUtil } from '$lib/utils';
	// Importer tous les langages nécessaires pour la coloration syntaxique
	import 'prismjs/components/prism-markup';
	import 'prismjs/components/prism-css';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/components/prism-python';
	import 'prismjs/components/prism-java';
	import 'prismjs/components/prism-bash';
	import 'prismjs/components/prism-yaml';
	import 'prismjs/components/prism-json';
	import 'prismjs/components/prism-sql';
	import 'prismjs/components/prism-dart';
	import 'prismjs/components/prism-csharp';
	import 'prismjs/components/prism-c';
	import 'prismjs/components/prism-cpp';
	import 'prismjs/components/prism-docker';
	import 'prismjs/components/prism-go';
	import 'prismjs/components/prism-kotlin';
	import 'prismjs/components/prism-swift';
	import 'prismjs/components/prism-rust';
	import 'prismjs/components/prism-jsx';
	import 'prismjs/components/prism-tsx';
	import 'prismjs/components/prism-markdown';
	import 'prismjs/components/prism-shell-session';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

	// Configurer les alias pour les langages non reconnus
	if (typeof Prism !== 'undefined' && Prism.languages) {
		// Svelte utilise la syntaxe HTML/markup avec du JS intégré
		if (Prism.languages.markup) {
			Prism.languages.svelte = Prism.languages.markup;
		}
		// Alias ts pour typescript
		if (Prism.languages.typescript) {
			Prism.languages.ts = Prism.languages.typescript;
		}
		// Alias js pour javascript
		if (Prism.languages.javascript) {
			Prism.languages.js = Prism.languages.javascript;
		}
		// env utilise la syntaxe bash/shell
		if (Prism.languages.bash) {
			Prism.languages.env = Prism.languages.bash;
			Prism.languages.shell = Prism.languages.bash;
			Prism.languages.sh = Prism.languages.bash;
		}
		// Alias pour markdown
		if (Prism.languages.markdown) {
			Prism.languages.md = Prism.languages.markdown;
		}
	}

	let container: HTMLDivElement;

	let { content }: { content: string } = $props();

	let isInitialized = false;
	let sanitizer: any;

	/**
	 * Génère le sommaire APRÈS le parsing du markdown pour utiliser les vrais IDs générés
	 */
	function generateTocFromHtml(html: string, maxLevel: number, title: string): string {
		// Parser le HTML pour extraire les headings avec leurs IDs réels
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		const headings: Array<{ level: number; text: string; id: string }> = [];
		
		for (let i = 1; i <= maxLevel; i++) {
			doc.querySelectorAll(`h${i}`).forEach((h) => {
				const id = h.getAttribute('id');
				const text = h.textContent?.trim();
				if (id && text) {
					headings.push({ level: i, text, id });
				}
			});
		}
		
		// Trier par ordre d'apparition dans le document
		const allHeadings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
		const orderedHeadings: Array<{ level: number; text: string; id: string }> = [];
		allHeadings.forEach((h) => {
			const level = parseInt(h.tagName[1]);
			if (level <= maxLevel) {
				const id = h.getAttribute('id');
				const text = h.textContent?.trim();
				if (id && text) {
					orderedHeadings.push({ level, text, id });
				}
			}
		});
		
		if (orderedHeadings.length === 0) {
			return '';
		}
		
		// Générer le HTML du sommaire
		let tocHtml = `<details class="toc-container">`;
		tocHtml += `<summary class="toc-title">${title}</summary>`;
		tocHtml += `<ul class="toc-list">`;
		
		for (const heading of orderedHeadings) {
			const indent = heading.level - 1;
			tocHtml += `<li class="toc-item toc-level-${heading.level}" style="margin-left: ${indent * 1}rem;">`;
			tocHtml += `<a href="#${heading.id}" class="toc-link">${heading.text}</a>`;
			tocHtml += `</li>`;
		}
		
		tocHtml += `</ul></details>`;
		
		return tocHtml;
	}

	/**
	 * Prétraite le contenu markdown pour détecter ::toc et retourne les options
	 */
	function extractTocOptions(md: string): { hasToc: boolean; maxLevel: number; title: string; content: string } {
		const tocPattern = /::toc(?:\{([^}]*)\})?/;
		const match = md.match(tocPattern);
		
		if (!match) {
			return { hasToc: false, maxLevel: 3, title: 'Sommaire', content: md };
		}
		
		const options: Record<string, string> = {};
		if (match[1]) {
			match[1].split(/\s+/).forEach((opt: string) => {
				const [key, value] = opt.split('=');
				if (key && value) options[key] = value;
			});
		}
		
		return {
			hasToc: true,
			maxLevel: parseInt(options.maxLevel || '3', 10),
			title: options.title || 'Sommaire',
			// Supprimer complètement le ::toc du contenu
			content: md.replace(tocPattern, '')
		};
	}

	onMount(async () => {
		marked.use(gfmHeadingId());
		marked.use(mangle());
		sanitizer = createSanitizer(window);
		isInitialized = true;
		await renderContent();
	});

	/**
	 * Parse les icônes inline :i[nom-icône] ou :icon[nom-icône]
	 * Exemple: :i[i-carbon-star] ou :icon[i-carbon-home]
	 */
	function parseIcons(md: string): string {
		// Pattern: :i[icon-name] ou :icon[icon-name]
		return md.replace(/:i(?:con)?\[([^\]]+)\]/g, (match, iconName) => {
			// Nettoyer le nom de l'icône
			const cleanIcon = iconName.trim();
			// Si l'icône ne commence pas par 'i-', ajouter le préfixe i-carbon-
			const finalIcon = cleanIcon.startsWith('i-') ? cleanIcon : `i-carbon-${cleanIcon}`;
			return `<span class="md-icon ${finalIcon}" aria-hidden="true"></span>`;
		});
	}

	/**
	 * Parse les notations étoiles ::stars[x/y] 
	 * Exemple: ::stars[4/5] => 4 étoiles pleines + 1 étoile vide
	 */
	function parseStars(md: string): string {
		// Pattern: ::stars[x/y] ou ::rating[x/y]
		return md.replace(/::(?:stars|rating)\[(\d+)\/(\d+)\]/g, (match, filled, total) => {
			const filledCount = parseInt(filled, 10);
			const totalCount = parseInt(total, 10);
			const emptyCount = totalCount - filledCount;
			
			let starsHtml = '<span class="stars-rating" aria-label="' + filledCount + ' sur ' + totalCount + '">';
			
			// Étoiles pleines
			for (let i = 0; i < filledCount; i++) {
				starsHtml += '<span class="star star-filled i-carbon-star-filled" aria-hidden="true"></span>';
			}
			
			// Étoiles vides
			for (let i = 0; i < emptyCount; i++) {
				starsHtml += '<span class="star star-empty i-carbon-star" aria-hidden="true"></span>';
			}
			
			starsHtml += '</span>';
			return starsHtml;
		});
	}

	/**
	 * Couleurs par défaut pour les graphiques
	 */
	const chartColors = [
		'hsl(210, 100%, 56%)',  // Bleu
		'hsl(340, 82%, 52%)',   // Rose/Rouge
		'hsl(142, 71%, 45%)',   // Vert
		'hsl(38, 92%, 50%)',    // Orange
		'hsl(262, 83%, 58%)',   // Violet
		'hsl(187, 100%, 42%)',  // Cyan
		'hsl(45, 93%, 47%)',    // Jaune
		'hsl(0, 84%, 60%)',     // Rouge
	];

	/**
	 * Parse les blocs :::chart pour générer des graphiques SVG
	 * Syntaxe: :::chart{type=pie title="Mon titre"}
	 * Label1: 30
	 * Label2: 45
	 * :::
	 * Types supportés: pie, donut, bar, progress, radar
	 */
	function parseCharts(md: string): { content: string; chartBlocks: string[] } {
		const chartBlocks: string[] = [];
		
		// Protéger les blocs de code pour ne pas parser leur contenu
		const codeBlocks: string[] = [];
		let protectedMd = md.replace(/```[\s\S]*?```/g, (match) => {
			codeBlocks.push(match);
			return `<span data-codeblock="${codeBlocks.length - 1}"></span>`;
		});
		
		const processed = protectedMd.replace(
			/:::chart(?:\{([^}]*)\})?\s*\n([\s\S]*?)\n:::/g,
			(match, optionsStr, innerContent) => {
				const options: Record<string, string> = {};
				if (optionsStr) {
					// Parser les options comme type=pie title="Mon titre"
					const optionPattern = /(\w+)=(?:"([^"]*)"|(\S+))/g;
					let optMatch;
					while ((optMatch = optionPattern.exec(optionsStr)) !== null) {
						options[optMatch[1]] = optMatch[2] || optMatch[3];
					}
				}
				
				const chartType = options.type || 'bar';
				const title = options.title || '';
				
				// Gérer size comme string (small/medium/large) ou nombre
				let size = 200;
				if (options.size) {
					if (options.size === 'small') size = 150;
					else if (options.size === 'medium') size = 200;
					else if (options.size === 'large') size = 280;
					else {
						const parsed = parseInt(options.size, 10);
						if (!isNaN(parsed)) size = parsed;
					}
				}
				
				const showLegend = options.legend !== 'false';
				const showValues = options.values !== 'false';
				const vertical = options.vertical === 'true';
				
				// Options pour les graphiques line/scatter
				const xLabel = options.xLabel || options.xlabel || '';
				const yLabel = options.yLabel || options.ylabel || '';
				const xMin = options.xMin ? parseFloat(options.xMin) : undefined;
				const xMax = options.xMax ? parseFloat(options.xMax) : undefined;
				const yMin = options.yMin ? parseFloat(options.yMin) : undefined;
				const yMax = options.yMax ? parseFloat(options.yMax) : undefined;
				const showLine = options.line !== 'false';
				const showPoints = options.points !== 'false';
				const smooth = options.smooth === 'true';
				const fill = options.fill === 'true';
				const gridLines = options.grid !== 'false';
				
				// Parser les données (format: "Label: valeur" ou "x,y" pour line/scatter)
				const dataLines = innerContent.trim().split('\n').filter((line: string) => line.trim());
				const data: Array<{ label: string; value: number; color?: string; x?: number; y?: number }> = [];
				
				dataLines.forEach((line: string, index: number) => {
					// Format pour line/scatter: "x,y" ou "x,y,label"
					const pointMatch = line.match(/^(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)(?:\s*,\s*(.+))?$/);
					if (pointMatch && (chartType === 'line' || chartType === 'scatter' || chartType === 'area')) {
						data.push({
							x: parseFloat(pointMatch[1]),
							y: parseFloat(pointMatch[2]),
							label: pointMatch[3]?.trim() || '',
							value: parseFloat(pointMatch[2]),
							color: chartColors[index % chartColors.length]
						});
					} else {
						// Format classique: "Label: valeur"
						const match = line.match(/^([^:]+):\s*(\d+(?:\.\d+)?)\s*(.*)$/);
						if (match) {
							data.push({
								label: match[1].trim(),
								value: parseFloat(match[2]),
								color: match[3].trim() || chartColors[index % chartColors.length]
							});
						}
					}
				});
				
				if (data.length === 0) {
					return match; // Pas de données, retourner tel quel
				}
				
				let chartHtml = '';
				
				switch (chartType) {
					case 'pie':
						chartHtml = generatePieChart(data, size, title, showLegend, showValues, false);
						break;
					case 'donut':
						chartHtml = generatePieChart(data, size, title, showLegend, showValues, true);
						break;
					case 'bar':
						chartHtml = generateBarChart(data, title, showValues, vertical);
						break;
					case 'progress':
						chartHtml = generateProgressChart(data, title, showValues);
						break;
					case 'radar':
						chartHtml = generateRadarChart(data, size, title);
						break;
					case 'line':
					case 'scatter':
					case 'area':
						chartHtml = generateLineChart(data, size, title, xLabel, yLabel, xMin, xMax, yMin, yMax, showLine && chartType !== 'scatter', showPoints, smooth, fill || chartType === 'area', gridLines, showLegend);
						break;
					default:
						chartHtml = generateBarChart(data, title, showValues, vertical);
				}
				
				chartBlocks.push(chartHtml);
				return `<span data-chartblock="${chartBlocks.length - 1}"></span>`;
			}
		);
		
		// Restaurer les blocs de code
		let finalContent = processed;
		codeBlocks.forEach((code, index) => {
			finalContent = finalContent.replace(`<span data-codeblock="${index}"></span>`, code);
		});
		
		return { content: finalContent, chartBlocks };
	}

	/**
	 * Génère un graphique camembert ou donut en SVG
	 */
	function generatePieChart(
		data: Array<{ label: string; value: number; color?: string }>,
		size: number,
		title: string,
		showLegend: boolean,
		showValues: boolean,
		isDonut: boolean
	): string {
		const total = data.reduce((sum, d) => sum + d.value, 0);
		const cx = size / 2;
		const cy = size / 2;
		const radius = size / 2 - 10;
		const innerRadius = isDonut ? radius * 0.6 : 0;
		
		let currentAngle = -90; // Commencer en haut
		let paths = '';
		
		data.forEach((item, index) => {
			const percentage = (item.value / total) * 100;
			const angle = (item.value / total) * 360;
			const color = item.color || chartColors[index % chartColors.length];
			
			// Calculer les points de l'arc
			const startAngle = currentAngle * (Math.PI / 180);
			const endAngle = (currentAngle + angle) * (Math.PI / 180);
			
			const x1 = cx + radius * Math.cos(startAngle);
			const y1 = cy + radius * Math.sin(startAngle);
			const x2 = cx + radius * Math.cos(endAngle);
			const y2 = cy + radius * Math.sin(endAngle);
			
			const largeArc = angle > 180 ? 1 : 0;
			
			if (isDonut) {
				const ix1 = cx + innerRadius * Math.cos(startAngle);
				const iy1 = cy + innerRadius * Math.sin(startAngle);
				const ix2 = cx + innerRadius * Math.cos(endAngle);
				const iy2 = cy + innerRadius * Math.sin(endAngle);
				
				paths += `<path d="M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1} Z" fill="${color}" class="chart-slice" data-label="${item.label}" data-value="${percentage.toFixed(1)}%"/>`;
			} else {
				paths += `<path d="M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z" fill="${color}" class="chart-slice" data-label="${item.label}" data-value="${percentage.toFixed(1)}%"/>`;
			}
			
			currentAngle += angle;
		});
		
		// Générer la légende
		let legendHtml = '';
		if (showLegend) {
			legendHtml = '<div class="chart-legend">';
			data.forEach((item, index) => {
				const color = item.color || chartColors[index % chartColors.length];
				const percentage = ((item.value / total) * 100).toFixed(1);
				legendHtml += `<div class="legend-item"><span class="legend-color" style="background:${color}"></span><span class="legend-label">${item.label}</span>${showValues ? `<span class="legend-value">${percentage}%</span>` : ''}</div>`;
			});
			legendHtml += '</div>';
		}
		
		const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
		
		return `<div class="md-chart md-chart-${isDonut ? 'donut' : 'pie'}">${titleHtml}<div class="chart-container"><svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">${paths}</svg></div>${legendHtml}</div>`;
	}

	/**
	 * Génère un graphique en barres horizontales ou verticales
	 */
	function generateBarChart(
		data: Array<{ label: string; value: number; color?: string }>,
		title: string,
		showValues: boolean,
		vertical: boolean = false
	): string {
		const maxValue = Math.max(...data.map(d => d.value));
		
		if (vertical) {
			// Barres verticales
			const barWidth = 40;
			const gap = 15;
			const chartHeight = 180;
			const chartWidth = data.length * (barWidth + gap) + gap;
			
			let barsHtml = `<div class="chart-container"><svg viewBox="0 0 ${chartWidth} ${chartHeight + 40}" width="${chartWidth}" height="${chartHeight + 40}">`;
			
			data.forEach((item, index) => {
				const color = item.color || chartColors[index % chartColors.length];
				const barHeight = (item.value / maxValue) * chartHeight;
				const x = gap + index * (barWidth + gap);
				const y = chartHeight - barHeight;
				
				barsHtml += `<rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${color}" class="chart-bar-v" rx="3"/>`;
				
				// Label en bas
				barsHtml += `<text x="${x + barWidth / 2}" y="${chartHeight + 15}" text-anchor="middle" fill="hsl(var(--foreground))" font-size="11">${item.label}</text>`;
				
				// Valeur en haut
				if (showValues) {
					barsHtml += `<text x="${x + barWidth / 2}" y="${y - 5}" text-anchor="middle" fill="hsl(var(--muted-foreground))" font-size="11">${item.value}</text>`;
				}
			});
			
			barsHtml += '</svg></div>';
			const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
			return `<div class="md-chart md-chart-bar-vertical">${titleHtml}${barsHtml}</div>`;
		}
		
		// Barres horizontales (défaut)
		let barsHtml = '<div class="chart-bars">';
		data.forEach((item, index) => {
			const color = item.color || chartColors[index % chartColors.length];
			const percentage = (item.value / maxValue) * 100;
			
			barsHtml += `<div class="bar-row">
				<span class="bar-label">${item.label}</span>
				<div class="bar-track">
					<div class="bar-fill" style="width:${percentage}%;background:${color}"></div>
				</div>
				${showValues ? `<span class="bar-value">${item.value}</span>` : ''}
			</div>`;
		});
		barsHtml += '</div>';
		
		const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
		
		return `<div class="md-chart md-chart-bar">${titleHtml}${barsHtml}</div>`;
	}

	/**
	 * Génère un graphique de progression (barres avec pourcentage)
	 */
	function generateProgressChart(
		data: Array<{ label: string; value: number; color?: string }>,
		title: string,
		showValues: boolean
	): string {
		let progressHtml = '<div class="chart-progress">';
		data.forEach((item, index) => {
			const color = item.color || chartColors[index % chartColors.length];
			const value = Math.min(100, Math.max(0, item.value)); // Clamp 0-100
			
			progressHtml += `<div class="progress-row">
				<div class="progress-header">
					<span class="progress-label">${item.label}</span>
					${showValues ? `<span class="progress-value">${value}%</span>` : ''}
				</div>
				<div class="progress-track">
					<div class="progress-fill" style="width:${value}%;background:${color}"></div>
				</div>
			</div>`;
		});
		progressHtml += '</div>';
		
		const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
		
		return `<div class="md-chart md-chart-progress">${titleHtml}${progressHtml}</div>`;
	}

	/**
	 * Génère un graphique radar/spider en SVG
	 */
	function generateRadarChart(
		data: Array<{ label: string; value: number; color?: string }>,
		size: number,
		title: string
	): string {
		const cx = size / 2;
		const cy = size / 2;
		const radius = size / 2 - 30;
		const levels = 5; // Nombre de cercles concentriques
		const maxValue = Math.max(...data.map(d => d.value), 100);
		
		// Grille de fond
		let gridHtml = '';
		for (let i = 1; i <= levels; i++) {
			const r = (radius / levels) * i;
			gridHtml += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="hsl(var(--border))" stroke-width="1" opacity="0.5"/>`;
		}
		
		// Axes et labels
		const angleStep = (2 * Math.PI) / data.length;
		let axesHtml = '';
		let labelsHtml = '';
		
		data.forEach((item, index) => {
			const angle = angleStep * index - Math.PI / 2;
			const x = cx + radius * Math.cos(angle);
			const y = cy + radius * Math.sin(angle);
			
			axesHtml += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="hsl(var(--border))" stroke-width="1" opacity="0.5"/>`;
			
			// Position du label (un peu plus loin que le bord)
			const labelRadius = radius + 15;
			const lx = cx + labelRadius * Math.cos(angle);
			const ly = cy + labelRadius * Math.sin(angle);
			labelsHtml += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" class="radar-label" fill="hsl(var(--foreground))" font-size="11">${item.label}</text>`;
		});
		
		// Polygone des données
		let points = '';
		data.forEach((item, index) => {
			const angle = angleStep * index - Math.PI / 2;
			const value = (item.value / maxValue) * radius;
			const x = cx + value * Math.cos(angle);
			const y = cy + value * Math.sin(angle);
			points += `${x},${y} `;
		});
		
		const color = data[0]?.color || chartColors[0];
		const dataPolygon = `<polygon points="${points.trim()}" fill="${color}" fill-opacity="0.3" stroke="${color}" stroke-width="2"/>`;
		
		// Points sur le polygone
		let dotsHtml = '';
		data.forEach((item, index) => {
			const angle = angleStep * index - Math.PI / 2;
			const value = (item.value / maxValue) * radius;
			const x = cx + value * Math.cos(angle);
			const y = cy + value * Math.sin(angle);
			dotsHtml += `<circle cx="${x}" cy="${y}" r="4" fill="${color}"/>`;
		});
		
		const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
		
		return `<div class="md-chart md-chart-radar">${titleHtml}<div class="chart-container"><svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">${gridHtml}${axesHtml}${dataPolygon}${dotsHtml}${labelsHtml}</svg></div></div>`;
	}

	/**
	 * Génère un graphique line/scatter/area en SVG (2D avec axes X/Y)
	 */
	function generateLineChart(
		data: Array<{ label?: string; value: number; color?: string; x?: number; y?: number }>,
		size: number,
		title: string,
		xLabel: string,
		yLabel: string,
		xMinOpt: number | undefined,
		xMaxOpt: number | undefined,
		yMinOpt: number | undefined,
		yMaxOpt: number | undefined,
		showLine: boolean,
		showPoints: boolean,
		smooth: boolean,
		fill: boolean,
		gridLines: boolean,
		showLegend: boolean
	): string {
		const padding = { top: 20, right: 20, bottom: 45, left: 50 };
		const width = Math.max(size, 300);
		const height = Math.max(size * 0.7, 200);
		const plotWidth = width - padding.left - padding.right;
		const plotHeight = height - padding.top - padding.bottom;
		
		// Calculer les bornes des données
		const xValues = data.map(d => d.x ?? 0);
		const yValues = data.map(d => d.y ?? d.value);
		
		const xMin = xMinOpt ?? Math.min(...xValues);
		const xMax = xMaxOpt ?? Math.max(...xValues);
		const yMin = yMinOpt ?? Math.min(...yValues, 0);
		const yMax = yMaxOpt ?? Math.max(...yValues);
		
		const xRange = xMax - xMin || 1;
		const yRange = yMax - yMin || 1;
		
		// Fonctions de conversion coordonnées données → SVG
		const toSvgX = (x: number) => padding.left + ((x - xMin) / xRange) * plotWidth;
		const toSvgY = (y: number) => padding.top + plotHeight - ((y - yMin) / yRange) * plotHeight;
		
		// Grille
		let gridHtml = '';
		if (gridLines) {
			const numGridLinesY = 5;
			const numGridLinesX = 5;
			
			for (let i = 0; i <= numGridLinesY; i++) {
				const y = padding.top + (plotHeight / numGridLinesY) * i;
				gridHtml += `<line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="hsl(var(--border))" stroke-width="1" opacity="0.3"/>`;
			}
			for (let i = 0; i <= numGridLinesX; i++) {
				const x = padding.left + (plotWidth / numGridLinesX) * i;
				gridHtml += `<line x1="${x}" y1="${padding.top}" x2="${x}" y2="${height - padding.bottom}" stroke="hsl(var(--border))" stroke-width="1" opacity="0.3"/>`;
			}
		}
		
		// Axes
		let axesHtml = '';
		// Axe X
		axesHtml += `<line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="hsl(var(--foreground))" stroke-width="1.5"/>`;
		// Axe Y
		axesHtml += `<line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="hsl(var(--foreground))" stroke-width="1.5"/>`;
		
		// Labels des axes
		let labelsHtml = '';
		const numTicksX = 5;
		const numTicksY = 5;
		
		for (let i = 0; i <= numTicksX; i++) {
			const xVal = xMin + (xRange / numTicksX) * i;
			const x = toSvgX(xVal);
			labelsHtml += `<text x="${x}" y="${height - padding.bottom + 15}" text-anchor="middle" fill="hsl(var(--muted-foreground))" font-size="10">${xVal % 1 === 0 ? xVal : xVal.toFixed(1)}</text>`;
		}
		for (let i = 0; i <= numTicksY; i++) {
			const yVal = yMin + (yRange / numTicksY) * i;
			const y = toSvgY(yVal);
			labelsHtml += `<text x="${padding.left - 8}" y="${y + 4}" text-anchor="end" fill="hsl(var(--muted-foreground))" font-size="10">${yVal % 1 === 0 ? yVal : yVal.toFixed(1)}</text>`;
		}
		
		// Labels des axes (noms)
		if (xLabel) {
			labelsHtml += `<text x="${padding.left + plotWidth / 2}" y="${height - 5}" text-anchor="middle" fill="hsl(var(--foreground))" font-size="12">${xLabel}</text>`;
		}
		if (yLabel) {
			labelsHtml += `<text x="15" y="${padding.top + plotHeight / 2}" text-anchor="middle" fill="hsl(var(--foreground))" font-size="12" transform="rotate(-90, 15, ${padding.top + plotHeight / 2})">${yLabel}</text>`;
		}
		
		// Trier les données par X pour le tracé
		const sortedData = [...data].sort((a, b) => (a.x ?? 0) - (b.x ?? 0));
		
		// Générer les points SVG
		const points = sortedData.map(d => ({
			x: toSvgX(d.x ?? 0),
			y: toSvgY(d.y ?? d.value),
			label: d.label
		}));
		
		const color = chartColors[0];
		let dataHtml = '';
		
		// Aire de remplissage
		if (fill && points.length > 1) {
			let areaPath = `M ${points[0].x} ${toSvgY(yMin)}`;
			
			if (smooth && points.length > 2) {
				areaPath += ` L ${points[0].x} ${points[0].y}`;
				for (let i = 0; i < points.length - 1; i++) {
					const p0 = points[Math.max(0, i - 1)];
					const p1 = points[i];
					const p2 = points[i + 1];
					const p3 = points[Math.min(points.length - 1, i + 2)];
					
					const cp1x = p1.x + (p2.x - p0.x) / 6;
					const cp1y = p1.y + (p2.y - p0.y) / 6;
					const cp2x = p2.x - (p3.x - p1.x) / 6;
					const cp2y = p2.y - (p3.y - p1.y) / 6;
					
					areaPath += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
				}
			} else {
				points.forEach(p => {
					areaPath += ` L ${p.x} ${p.y}`;
				});
			}
			areaPath += ` L ${points[points.length - 1].x} ${toSvgY(yMin)} Z`;
			dataHtml += `<path d="${areaPath}" fill="${color}" fill-opacity="0.2"/>`;
		}
		
		// Ligne
		if (showLine && points.length > 1) {
			let linePath = `M ${points[0].x} ${points[0].y}`;
			
			if (smooth && points.length > 2) {
				for (let i = 0; i < points.length - 1; i++) {
					const p0 = points[Math.max(0, i - 1)];
					const p1 = points[i];
					const p2 = points[i + 1];
					const p3 = points[Math.min(points.length - 1, i + 2)];
					
					const cp1x = p1.x + (p2.x - p0.x) / 6;
					const cp1y = p1.y + (p2.y - p0.y) / 6;
					const cp2x = p2.x - (p3.x - p1.x) / 6;
					const cp2y = p2.y - (p3.y - p1.y) / 6;
					
					linePath += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
				}
			} else {
				points.forEach((p, i) => {
					if (i > 0) linePath += ` L ${p.x} ${p.y}`;
				});
			}
			dataHtml += `<path d="${linePath}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
		}
		
		// Points
		if (showPoints) {
			points.forEach((p, i) => {
				dataHtml += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${color}" stroke="white" stroke-width="2"/>`;
				if (p.label) {
					dataHtml += `<text x="${p.x}" y="${p.y - 10}" text-anchor="middle" fill="hsl(var(--foreground))" font-size="10">${p.label}</text>`;
				}
			});
		}
		
		const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
		
		return `<div class="md-chart md-chart-line">${titleHtml}<div class="chart-container"><svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${gridHtml}${axesHtml}${dataHtml}${labelsHtml}</svg></div></div>`;
	}

	/**
	 * Parse les blocs :::buttons avec boutons ::button[Label]{options}
	 * Supporte: href=, link=, icon= (emoji ou classe UnoCSS), style=, newTab=
	 */
	function parseButtons(md: string): { content: string; htmlBlocks: string[] } {
		const htmlBlocks: string[] = [];
		
		const processed = md.replace(
			/:::buttons(?:\{([^}]*)\})?\s*\n([\s\S]*?)\n:::/g,
			(match, gridOptionsStr, innerContent) => {
				const gridOptions: Record<string, string> = {};
				if (gridOptionsStr) {
					gridOptionsStr.split(/\s+/).forEach((opt: string) => {
						const [key, value] = opt.split('=');
						if (key && value) gridOptions[key] = value;
					});
				}
				const align = gridOptions.align || 'left';
				
				// Parser chaque ::button[Label]{href=url icon=emoji style=solid|outline|soft}
				const buttonPattern = /::button\[([^\]]+)\](?:\{([^}]*)\})?/g;
				let buttonsHtml = '';
				let buttonMatch;
				
				while ((buttonMatch = buttonPattern.exec(innerContent)) !== null) {
					const label = buttonMatch[1];
					const optionsStr = buttonMatch[2] || '';
					
					const options: Record<string, string> = {};
					if (optionsStr) {
						optionsStr.split(/\s+/).forEach((opt: string) => {
							const [key, value] = opt.split('=');
							if (key && value) options[key] = value;
						});
					}
					
					// Support 'link=' comme alias de 'href='
					let buttonHref = options.href || options.link || '#';
					// Utiliser hrefUtil pour les liens internes (commençant par /)
					if (buttonHref.startsWith('/')) {
						buttonHref = hrefUtil(buttonHref);
					}
					const icon = options.icon || '';
					const style = options.style || 'ghost'; // ghost, default, outline
					const newTab = options.newTab === 'true';
					
					const targetAttr = newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
					
					// Déterminer si l'icône est une classe UnoCSS (commence par i-) ou un emoji
					let iconHtml = '';
					if (icon) {
						if (icon.startsWith('i-')) {
							// Classe UnoCSS/icône
							iconHtml = `<span class="btn-icon ${icon}"></span>`;
						} else {
							// Emoji ou texte
							iconHtml = `<span class="btn-icon">${icon}</span>`;
						}
					}
					
					buttonsHtml += `<a href="${buttonHref}" class="md-btn md-btn-${style}"${targetAttr}>${iconHtml}<span class="btn-label">${label}</span></a>`;
				}
				
				const html = `<div class="md-buttons md-buttons-${align}">${buttonsHtml}</div>`;
				htmlBlocks.push(html);
				return `<span data-btnblock="${htmlBlocks.length - 1}"></span>`;
			}
		);
		
		return { content: processed, htmlBlocks };
	}

	async function renderContent() {
		if (!isInitialized || !container || !sanitizer) return;

		// Extraire les options du TOC
		const tocOptions = extractTocOptions(content);
		
		// Parser les icônes AVANT tout le reste
		const contentWithIcons = parseIcons(tocOptions.content);
		
		// Parser les étoiles de notation
		const contentWithStars = parseStars(contentWithIcons);
		
		// Parser les graphiques AVANT marked (mais les restaurer APRÈS sanitize)
		const { content: contentWithoutCharts, chartBlocks } = parseCharts(contentWithStars);
		
		// Parser les boutons AVANT marked (mais les restaurer APRÈS sanitize)
		const { content: contentWithoutButtons, htmlBlocks } = parseButtons(contentWithoutCharts);
		
		// Parser le markdown (les placeholders passent sans problème)
		let parsed = await marked.parse(contentWithoutButtons);
		
		// Sanitizer avec support des data-attributes pour les placeholders
		let finalHtml = sanitizer.sanitize(parsed, {
			USE_PROFILES: { html: true, svg: true, svgFilters: true },
			ADD_TAGS: ['nav', 'details', 'summary'],
			ADD_ATTR: ['data-label', 'data-value', 'target', 'rel', 'data-chartblock', 'data-btnblock']
		});
		
		// MAINTENANT restaurer les blocs de graphiques (SVG non sanitizé)
		// marked peut envelopper les spans dans <p>, donc on utilise une regex
		chartBlocks.forEach((html, index) => {
			const regex = new RegExp(`(<p>)?<span data-chartblock="${index}"><\\/span>(</p>)?`, 'g');
			finalHtml = finalHtml.replace(regex, html);
		});
		
		// Restaurer les blocs de boutons
		htmlBlocks.forEach((html, index) => {
			const regex = new RegExp(`(<p>)?<span data-btnblock="${index}"><\\/span>(</p>)?`, 'g');
			finalHtml = finalHtml.replace(regex, html);
		});
		
		// Si on a un TOC, le générer et l'insérer au début
		if (tocOptions.hasToc) {
			const tocHtml = generateTocFromHtml(finalHtml, tocOptions.maxLevel, tocOptions.title);
			finalHtml = tocHtml + finalHtml;
		}
		
		container.innerHTML = finalHtml;
		Prism.highlightAllUnder(container);
		
		// Ajouter les event listeners pour les liens du TOC
		if (tocOptions.hasToc) {
			container.querySelectorAll('.toc-link').forEach((link) => {
				link.addEventListener('click', (e) => {
					e.preventDefault();
					const linkHref = link.getAttribute('href');
					if (linkHref) {
						const targetId = linkHref.slice(1);
						
						// Retirer la surbrillance des titres précédents
						document.querySelectorAll('.hash-target-highlight').forEach((el) => {
							el.classList.remove('hash-target-highlight');
						});
						
						// Ajouter la surbrillance au nouveau titre
						const targetElement = document.getElementById(targetId);
						if (targetElement) {
							targetElement.classList.add('hash-target-highlight');
						}
						
						// Mettre à jour l'URL avec le hash
						window.location.hash = targetId;
						// Scroll vers l'élément avec offset
						scrollToElement(targetId);
					}
				});
			});
		}
	}
	
	/**
	 * Scroll vers un élément avec offset pour le header
	 */
	function scrollToElement(targetId: string) {
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			const headerOffset = 100;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - headerOffset;
			
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}

	// Réagir aux changements de contenu
	$effect(() => {
		if (content && isInitialized) {
			renderContent();
		}
	});
</script>

<div class="markdown-wrapper">
	<div bind:this={container} class="markdown-container"></div>
</div>

<style>
	.markdown-wrapper {
		position: relative;
	}
	
	/* Effet de lueur subtile derrière le conteneur */
	.markdown-wrapper::before {
		content: '';
		position: absolute;
		inset: 10px;
		background: radial-gradient(
			ellipse at 50% 0%,
			hsl(var(--primary) / 0.08) 0%,
			transparent 70%
		);
		border-radius: 1rem;
		z-index: -1;
		pointer-events: none;
	}
	
	.markdown-container {
		position: relative;
		z-index: 1;
	}

	/* Styles pour le sommaire (Table of Contents) */
	.markdown-container :global(.toc-container) {
		background: hsl(var(--card) / 0.6);
		border: 1px solid hsl(var(--border) / 0.5);
		border-radius: 0.75rem;
		padding: 0.6rem 1rem;
		margin-bottom: 1.5rem;
		backdrop-filter: blur(8px);
		box-shadow: 0 4px 16px hsl(var(--primary) / 0.05);
	}

	.markdown-container :global(.toc-title) {
		font-size: 0.9rem;
		font-weight: 600;
		color: hsl(var(--foreground));
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		list-style: none;
		user-select: none;
	}

	.markdown-container :global(.toc-title::-webkit-details-marker) {
		display: none;
	}

	.markdown-container :global(.toc-title)::before {
		content: '▶';
		font-size: 0.6rem;
		transition: transform 0.2s ease;
	}

	.markdown-container :global(.toc-container[open]) > :global(.toc-title)::before {
		transform: rotate(90deg);
	}

	.markdown-container :global(.toc-list) {
		list-style: none;
		padding: 0;
		margin: 0.3rem 0 0 0;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.markdown-container :global(.toc-item) {
		margin: 0;
		line-height: 1.2;
		display: flex;
		align-items: baseline;
	}

	.markdown-container :global(.toc-item)::before {
		flex-shrink: 0;
		margin-right: 0.5rem;
	}

	.markdown-container :global(.toc-link) {
		color: hsl(var(--muted-foreground));
		text-decoration: none;
		font-size: 0.78rem;
		transition: all 0.2s ease;
		display: block;
		padding: 0.08rem 0;
	}

	.markdown-container :global(.toc-link:hover) {
		color: hsl(var(--primary));
	}

	.markdown-container :global(.toc-level-1)::before {
		content: '●';
		font-size: 0.5rem;
		color: hsl(var(--primary));
	}

	.markdown-container :global(.toc-level-1 .toc-link) {
		font-weight: 600;
		font-size: 0.82rem;
		color: hsl(var(--foreground));
	}

	.markdown-container :global(.toc-level-2)::before {
		content: '○';
		font-size: 0.5rem;
		color: hsl(var(--primary) / 0.7);
	}

	.markdown-container :global(.toc-level-2 .toc-link) {
		font-weight: 500;
		font-size: 0.78rem;
	}

	.markdown-container :global(.toc-level-3)::before {
		content: '◽';
		font-size: 0.45rem;
		color: hsl(var(--muted-foreground));
	}

	.markdown-container :global(.toc-level-3 .toc-link) {
		font-size: 0.74rem;
		opacity: 0.85;
	}

	/* Surbrillance des titres lors de la navigation */
	.markdown-container :global(.heading-highlight),
	.markdown-container :global(.hash-target-highlight),
	.markdown-container :global(h1:target),
	.markdown-container :global(h2:target),
	.markdown-container :global(h3:target),
	.markdown-container :global(h4:target),
	.markdown-container :global(h5:target),
	.markdown-container :global(h6:target) {
		background: #fef08a !important;
		color: #1a1a1a !important;
		-webkit-text-fill-color: #1a1a1a !important;
		-webkit-background-clip: unset !important;
		background-clip: unset !important;
		padding: 0.25rem 0.5rem;
		margin-left: -0.5rem;
		border-radius: 0.25rem;
	}

	/* Forcer la couleur sur tous les éléments enfants des titres surlignés */
	.markdown-container :global(.heading-highlight *),
	.markdown-container :global(.hash-target-highlight *),
	.markdown-container :global(h1:target *),
	.markdown-container :global(h2:target *),
	.markdown-container :global(h3:target *),
	.markdown-container :global(h4:target *),
	.markdown-container :global(h5:target *),
	.markdown-container :global(h6:target *) {
		color: #1a1a1a !important;
		-webkit-text-fill-color: #1a1a1a !important;
	}

	/* ===== BUTTONS - Boutons stylés ===== */
	.markdown-container :global(.md-buttons) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin: 1.5rem 0;
		padding: 4px;
		margin-bottom: 0.5rem;
	}

	.markdown-container :global(.md-buttons-left) {
		justify-content: flex-start;
	}

	.markdown-container :global(.md-buttons-center) {
		justify-content: center;
	}

	.markdown-container :global(.md-buttons-right) {
		justify-content: flex-end;
	}

	.markdown-container :global(.md-btn) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.625rem 1.25rem;
		font-size: 0.875rem;
		font-weight: 500;
		text-decoration: none !important;
		border-radius: 0.5rem;
		transition: background 0.15s ease, border-color 0.15s ease;
		cursor: pointer;
		white-space: nowrap;
		border: 1.5px solid transparent;
	}

	.markdown-container :global(.md-btn:hover) {
		text-decoration: none !important;
	}

	.markdown-container :global(.md-btn::after),
	.markdown-container :global(.md-btn:hover::after),
	.markdown-container :global(.md-btn::before),
	.markdown-container :global(.md-btn:hover::before) {
		display: none !important;
		content: none !important;
		width: 0 !important;
		height: 0 !important;
	}

	.markdown-container :global(.md-btn .btn-icon) {
		font-size: 1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.markdown-container :global(.md-btn .btn-label) {
		color: inherit !important;
	}

	/* Style Default - Bouton noir plein, texte blanc */
	.markdown-container :global(.md-btn-default) {
		background: #1a1a1a;
		color: #ffffff !important;
		border-color: #1a1a1a;
	}
	.markdown-container :global(.md-btn-default:hover) {
		background: #333333;
		border-color: #333333;
	}
	.markdown-container :global(.md-btn-default .btn-label),
	.markdown-container :global(.md-btn-default .btn-icon) {
		color: #ffffff !important;
	}

	/* Style Outline - Bouton bordé, fond transparent */
	.markdown-container :global(.md-btn-outline) {
		background: hsl(var(--background));
		color: hsl(var(--foreground)) !important;
		border: none;
		box-shadow: inset 0 0 0 1.5px hsl(var(--foreground) / 0.3);
	}
	.markdown-container :global(.md-btn-outline:hover) {
		background: hsl(var(--foreground) / 0.05);
		box-shadow: inset 0 0 0 1.5px hsl(var(--foreground) / 0.5);
	}

	/* Style Ghost - Bouton léger avec fond gris */
	.markdown-container :global(.md-btn-ghost) {
		background: hsl(var(--muted));
		color: hsl(var(--foreground)) !important;
		border-color: hsl(var(--border));
	}
	.markdown-container :global(.md-btn-ghost:hover) {
		background: hsl(var(--muted) / 0.7);
		border-color: hsl(var(--foreground) / 0.2);
	}

	/* Icônes inline :i[nom] ou :icon[nom] */
	.markdown-container :global(.md-icon) {
		display: inline-block;
		width: 1.2em;
		height: 1.2em;
		vertical-align: -0.15em;
		flex-shrink: 0;
	}

	/* Notations étoiles ::stars[x/y] */
	.markdown-container :global(.stars-rating) {
		display: inline-flex;
		align-items: center;
		gap: 0.1em;
		vertical-align: middle;
	}
	.markdown-container :global(.star) {
		display: inline-block;
		width: 1.1em;
		height: 1.1em;
		flex-shrink: 0;
	}
	.markdown-container :global(.star-filled) {
		color: hsl(45, 93%, 47%); /* Couleur dorée */
	}
	.markdown-container :global(.star-empty) {
		color: hsl(var(--muted-foreground) / 0.4);
	}

	/* ==================== GRAPHIQUES ==================== */
	
	/* Container général des graphiques */
	.markdown-container :global(.md-chart) {
		margin: 1.5rem 0;
		padding: 1.25rem;
		background: hsl(var(--card));
		border: 1px solid hsl(var(--border) / 0.5);
		border-radius: 0.75rem;
	}

	.markdown-container :global(.chart-title) {
		font-weight: 600;
		font-size: 1rem;
		margin-bottom: 1rem;
		color: hsl(var(--foreground));
		text-align: center;
	}

	.markdown-container :global(.chart-container) {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 200px;
	}

	/* SVG des graphiques */
	.markdown-container :global(.chart-container svg) {
		display: block;
		max-width: 100%;
		height: auto;
		overflow: visible;
	}

	.markdown-container :global(.md-chart-pie .chart-container svg),
	.markdown-container :global(.md-chart-donut .chart-container svg) {
		min-width: 200px;
		min-height: 200px;
	}

	/* Légende pour pie/donut */
	.markdown-container :global(.chart-legend) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		justify-content: center;
		margin-top: 1rem;
	}

	.markdown-container :global(.legend-item) {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		font-size: 0.8125rem;
	}

	.markdown-container :global(.legend-color) {
		width: 12px;
		height: 12px;
		border-radius: 2px;
		flex-shrink: 0;
	}

	.markdown-container :global(.legend-label) {
		color: hsl(var(--foreground));
	}

	.markdown-container :global(.legend-value) {
		color: hsl(var(--muted-foreground));
		font-size: 0.75rem;
	}

	/* Animation des slices pie/donut */
	.markdown-container :global(.chart-slice) {
		transition: transform 0.2s ease, opacity 0.2s ease;
		transform-origin: center;
	}

	.markdown-container :global(.chart-slice:hover) {
		transform: scale(1.03);
		opacity: 0.85;
	}

	/* Bar chart */
	.markdown-container :global(.chart-bars) {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.markdown-container :global(.bar-row) {
		display: grid;
		grid-template-columns: 120px 1fr auto;
		gap: 0.75rem;
		align-items: center;
	}

	.markdown-container :global(.bar-label) {
		font-size: 0.875rem;
		color: hsl(var(--foreground));
		text-align: right;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.markdown-container :global(.bar-track) {
		height: 24px;
		background: hsl(var(--muted));
		border-radius: 4px;
		overflow: hidden;
	}

	.markdown-container :global(.bar-fill) {
		height: 100%;
		border-radius: 4px;
		transition: width 0.5s ease;
	}

	.markdown-container :global(.bar-value) {
		font-size: 0.8125rem;
		font-weight: 500;
		color: hsl(var(--muted-foreground));
		min-width: 40px;
	}

	/* Progress chart */
	.markdown-container :global(.chart-progress) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.markdown-container :global(.progress-row) {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	.markdown-container :global(.progress-header) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.markdown-container :global(.progress-label) {
		font-size: 0.875rem;
		font-weight: 500;
		color: hsl(var(--foreground));
	}

	.markdown-container :global(.progress-value) {
		font-size: 0.8125rem;
		font-weight: 600;
		color: hsl(var(--muted-foreground));
	}

	.markdown-container :global(.progress-track) {
		height: 8px;
		background: hsl(var(--muted));
		border-radius: 4px;
		overflow: hidden;
	}

	.markdown-container :global(.progress-fill) {
		height: 100%;
		border-radius: 4px;
		transition: width 0.5s ease;
	}

	/* Radar chart */
	.markdown-container :global(.md-chart-radar .chart-container) {
		padding: 1rem;
	}

	.markdown-container :global(.md-chart-radar .chart-container svg) {
		min-width: 250px;
		min-height: 250px;
	}

	.markdown-container :global(.radar-label) {
		font-size: 11px;
		fill: hsl(var(--foreground));
	}

	/* Bar chart vertical */
	.markdown-container :global(.md-chart-bar-vertical .chart-container) {
		overflow-x: auto;
		padding: 0.5rem 0;
	}

	.markdown-container :global(.md-chart-bar-vertical svg) {
		display: block;
		margin: 0 auto;
	}

	.markdown-container :global(.chart-bar-v) {
		transition: filter 0.2s ease;
	}

	.markdown-container :global(.chart-bar-v:hover) {
		filter: brightness(1.1);
	}

	/* Line/Scatter chart */
	.markdown-container :global(.md-chart-line) {
		overflow-x: auto;
	}

	.markdown-container :global(.md-chart-line .chart-container) {
		min-width: 300px;
	}

	.markdown-container :global(.md-chart-line svg) {
		display: block;
		margin: 0 auto;
	}

	/* Responsive */
	@media (max-width: 640px) {
		.markdown-container :global(.bar-row) {
			grid-template-columns: 80px 1fr auto;
		}
		
		.markdown-container :global(.bar-label) {
			font-size: 0.75rem;
		}
		
		.markdown-container :global(.chart-legend) {
			flex-direction: column;
			align-items: flex-start;
		}

		.markdown-container :global(.md-chart-line .chart-container),
		.markdown-container :global(.md-chart-bar-vertical .chart-container) {
			overflow-x: auto;
		}
	}
</style>
