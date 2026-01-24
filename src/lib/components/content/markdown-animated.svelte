<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
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
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import { mode } from 'mode-watcher';

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

	declare global {
		interface Window {
			Vara: any;
		}
	}

	let container: HTMLDivElement;

	let { content }: { content: string } = $props();

	let isInitialized = false;
	let sanitizer: any;
	let varaInitialized = false;
	let currentTheme = $state<string | undefined>(undefined);

	// Couleur selon le thème
	let handwrittenColor = $derived($mode === 'dark' ? '#ffffff' : '#1a1a1a');

	/**
	 * Convertit un nom d'icône en élément HTML avec classe UnoCSS
	 * Gère les icônes commençant par i- ou les noms courts (ajoute i-carbon-)
	 */
	function iconToHtml(icon: string, className = 'md-icon'): string {
		if (!icon) return '';
		const cleanIcon = icon.trim();
		// Si l'icône commence par i-, c'est une classe UnoCSS
		if (cleanIcon.startsWith('i-')) {
			return `<span class="${className} ${cleanIcon}" aria-hidden="true"></span>`;
		}
		// Si c'est un nom court, ajouter le préfixe i-carbon-
		if (/^[a-z0-9-]+$/i.test(cleanIcon)) {
			return `<span class="${className} i-carbon-${cleanIcon}" aria-hidden="true"></span>`;
		}
		// Sinon c'est probablement un emoji, le retourner tel quel
		return `<span class="${className}">${cleanIcon}</span>`;
	}

	/**
	 * Parse les icônes inline :i[nom-icône] ou :icon[nom-icône]
	 * Exemple: :i[i-carbon-star] ou :icon[i-carbon-home] ou :i[star]
	 */
	function parseIcons(md: string): string {
		// Pattern: :i[icon-name] ou :icon[icon-name]
		return md.replace(/:i(?:con)?\[([^\]]+)\]/g, (match, iconName) => {
			return iconToHtml(iconName, 'md-icon');
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
	 */
	function parseCharts(md: string, htmlBlocks: string[]): string {
		// Protéger les blocs de code pour ne pas parser leur contenu
		const codeBlocks: string[] = [];
		let protectedMd = md.replace(/```[\s\S]*?```/g, (match) => {
			codeBlocks.push(match);
			return `<span data-codeprotect="${codeBlocks.length - 1}"></span>`;
		});
		
		const processed = protectedMd.replace(
			/:::chart(?:\{([^}]*)\})?\s*\n([\s\S]*?)\n:::/g,
			(match, optionsStr, innerContent) => {
				const options: Record<string, string> = {};
				if (optionsStr) {
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
				
				if (data.length === 0) return match;
				
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
				
				htmlBlocks.push(chartHtml);
				return `<span data-htmlblock="${htmlBlocks.length - 1}"></span>`;
			}
		);
		
		// Restaurer les blocs de code
		let finalContent = processed;
		codeBlocks.forEach((code, index) => {
			finalContent = finalContent.replace(`<span data-codeprotect="${index}"></span>`, code);
		});
		
		return finalContent;
	}

	function generatePieChart(
		data: Array<{ label: string; value: number; color?: string }>,
		size: number, title: string, showLegend: boolean, showValues: boolean, isDonut: boolean
	): string {
		const total = data.reduce((sum, d) => sum + d.value, 0);
		const cx = size / 2, cy = size / 2, radius = size / 2 - 10;
		const innerRadius = isDonut ? radius * 0.6 : 0;
		
		let currentAngle = -90;
		let paths = '';
		
		data.forEach((item, index) => {
			const angle = (item.value / total) * 360;
			const color = item.color || chartColors[index % chartColors.length];
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
				paths += `<path d="M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1} Z" fill="${color}" class="chart-slice"/>`;
			} else {
				paths += `<path d="M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z" fill="${color}" class="chart-slice"/>`;
			}
			currentAngle += angle;
		});
		
		let legendHtml = '';
		if (showLegend) {
			legendHtml = '<div class="chart-legend">';
			data.forEach((item, index) => {
				const color = item.color || chartColors[index % chartColors.length];
				const pct = ((item.value / total) * 100).toFixed(1);
				legendHtml += `<div class="legend-item"><span class="legend-color" style="background:${color}"></span><span class="legend-label">${item.label}</span>${showValues ? `<span class="legend-value">${pct}%</span>` : ''}</div>`;
			});
			legendHtml += '</div>';
		}
		
		const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
		return `<div class="md-chart md-chart-${isDonut ? 'donut' : 'pie'}">${titleHtml}<div class="chart-container"><svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">${paths}</svg></div>${legendHtml}</div>`;
	}

	function generateBarChart(data: Array<{ label: string; value: number; color?: string }>, title: string, showValues: boolean, vertical: boolean = false): string {
		const maxValue = Math.max(...data.map(d => d.value));
		
		if (vertical) {
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
				barsHtml += `<text x="${x + barWidth / 2}" y="${chartHeight + 15}" text-anchor="middle" fill="hsl(var(--foreground))" font-size="11">${item.label}</text>`;
				if (showValues) {
					barsHtml += `<text x="${x + barWidth / 2}" y="${y - 5}" text-anchor="middle" fill="hsl(var(--muted-foreground))" font-size="11">${item.value}</text>`;
				}
			});
			
			barsHtml += '</svg></div>';
			const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
			return `<div class="md-chart md-chart-bar-vertical">${titleHtml}${barsHtml}</div>`;
		}
		
		let barsHtml = '<div class="chart-bars">';
		data.forEach((item, index) => {
			const color = item.color || chartColors[index % chartColors.length];
			const pct = (item.value / maxValue) * 100;
			barsHtml += `<div class="bar-row"><span class="bar-label">${item.label}</span><div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${color}"></div></div>${showValues ? `<span class="bar-value">${item.value}</span>` : ''}</div>`;
		});
		barsHtml += '</div>';
		const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
		return `<div class="md-chart md-chart-bar">${titleHtml}${barsHtml}</div>`;
	}

	function generateProgressChart(data: Array<{ label: string; value: number; color?: string }>, title: string, showValues: boolean): string {
		let progressHtml = '<div class="chart-progress">';
		data.forEach((item, index) => {
			const color = item.color || chartColors[index % chartColors.length];
			const value = Math.min(100, Math.max(0, item.value));
			progressHtml += `<div class="progress-row"><div class="progress-header"><span class="progress-label">${item.label}</span>${showValues ? `<span class="progress-value">${value}%</span>` : ''}</div><div class="progress-track"><div class="progress-fill" style="width:${value}%;background:${color}"></div></div></div>`;
		});
		progressHtml += '</div>';
		const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
		return `<div class="md-chart md-chart-progress">${titleHtml}${progressHtml}</div>`;
	}

	function generateRadarChart(data: Array<{ label: string; value: number; color?: string }>, size: number, title: string): string {
		const cx = size / 2, cy = size / 2, radius = size / 2 - 30;
		const levels = 5;
		const maxValue = Math.max(...data.map(d => d.value), 100);
		
		let gridHtml = '';
		for (let i = 1; i <= levels; i++) {
			const r = (radius / levels) * i;
			gridHtml += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="hsl(var(--border))" stroke-width="1" opacity="0.5"/>`;
		}
		
		const angleStep = (2 * Math.PI) / data.length;
		let axesHtml = '', labelsHtml = '';
		
		data.forEach((item, index) => {
			const angle = angleStep * index - Math.PI / 2;
			const x = cx + radius * Math.cos(angle);
			const y = cy + radius * Math.sin(angle);
			axesHtml += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="hsl(var(--border))" stroke-width="1" opacity="0.5"/>`;
			const lx = cx + (radius + 15) * Math.cos(angle);
			const ly = cy + (radius + 15) * Math.sin(angle);
			labelsHtml += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" fill="hsl(var(--foreground))" font-size="11">${item.label}</text>`;
		});
		
		let points = '';
		data.forEach((item, index) => {
			const angle = angleStep * index - Math.PI / 2;
			const value = (item.value / maxValue) * radius;
			points += `${cx + value * Math.cos(angle)},${cy + value * Math.sin(angle)} `;
		});
		
		const color = data[0]?.color || chartColors[0];
		const dataPolygon = `<polygon points="${points.trim()}" fill="${color}" fill-opacity="0.3" stroke="${color}" stroke-width="2"/>`;
		
		let dotsHtml = '';
		data.forEach((item, index) => {
			const angle = angleStep * index - Math.PI / 2;
			const value = (item.value / maxValue) * radius;
			dotsHtml += `<circle cx="${cx + value * Math.cos(angle)}" cy="${cy + value * Math.sin(angle)}" r="4" fill="${color}"/>`;
		});
		
		const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
		return `<div class="md-chart md-chart-radar">${titleHtml}<div class="chart-container"><svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">${gridHtml}${axesHtml}${dataPolygon}${dotsHtml}${labelsHtml}</svg></div></div>`;
	}

	/**
	 * Génère un graphique line/scatter/area en SVG
	 */
	function generateLineChart(
		data: Array<{ label?: string; value: number; color?: string; x?: number; y?: number }>,
		size: number, title: string, xLabel: string, yLabel: string,
		xMinOpt: number | undefined, xMaxOpt: number | undefined,
		yMinOpt: number | undefined, yMaxOpt: number | undefined,
		showLine: boolean, showPoints: boolean, smooth: boolean, fill: boolean, gridLines: boolean, showLegend: boolean
	): string {
		const padding = { top: 20, right: 20, bottom: 45, left: 50 };
		const width = Math.max(size, 300);
		const height = Math.max(size * 0.7, 200);
		const plotWidth = width - padding.left - padding.right;
		const plotHeight = height - padding.top - padding.bottom;
		
		const xValues = data.map(d => d.x ?? 0);
		const yValues = data.map(d => d.y ?? d.value);
		
		const xMin = xMinOpt ?? Math.min(...xValues);
		const xMax = xMaxOpt ?? Math.max(...xValues);
		const yMin = yMinOpt ?? Math.min(...yValues, 0);
		const yMax = yMaxOpt ?? Math.max(...yValues);
		
		const xRange = xMax - xMin || 1;
		const yRange = yMax - yMin || 1;
		
		const toSvgX = (x: number) => padding.left + ((x - xMin) / xRange) * plotWidth;
		const toSvgY = (y: number) => padding.top + plotHeight - ((y - yMin) / yRange) * plotHeight;
		
		let gridHtml = '';
		if (gridLines) {
			for (let i = 0; i <= 5; i++) {
				const y = padding.top + (plotHeight / 5) * i;
				gridHtml += `<line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="hsl(var(--border))" stroke-width="1" opacity="0.3"/>`;
				const x = padding.left + (plotWidth / 5) * i;
				gridHtml += `<line x1="${x}" y1="${padding.top}" x2="${x}" y2="${height - padding.bottom}" stroke="hsl(var(--border))" stroke-width="1" opacity="0.3"/>`;
			}
		}
		
		let axesHtml = `<line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="hsl(var(--foreground))" stroke-width="1.5"/>`;
		axesHtml += `<line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="hsl(var(--foreground))" stroke-width="1.5"/>`;
		
		let labelsHtml = '';
		for (let i = 0; i <= 5; i++) {
			const xVal = xMin + (xRange / 5) * i;
			const x = toSvgX(xVal);
			labelsHtml += `<text x="${x}" y="${height - padding.bottom + 15}" text-anchor="middle" fill="hsl(var(--muted-foreground))" font-size="10">${xVal % 1 === 0 ? xVal : xVal.toFixed(1)}</text>`;
			const yVal = yMin + (yRange / 5) * i;
			const y = toSvgY(yVal);
			labelsHtml += `<text x="${padding.left - 8}" y="${y + 4}" text-anchor="end" fill="hsl(var(--muted-foreground))" font-size="10">${yVal % 1 === 0 ? yVal : yVal.toFixed(1)}</text>`;
		}
		
		if (xLabel) labelsHtml += `<text x="${padding.left + plotWidth / 2}" y="${height - 5}" text-anchor="middle" fill="hsl(var(--foreground))" font-size="12">${xLabel}</text>`;
		if (yLabel) labelsHtml += `<text x="15" y="${padding.top + plotHeight / 2}" text-anchor="middle" fill="hsl(var(--foreground))" font-size="12" transform="rotate(-90, 15, ${padding.top + plotHeight / 2})">${yLabel}</text>`;
		
		const sortedData = [...data].sort((a, b) => (a.x ?? 0) - (b.x ?? 0));
		const points = sortedData.map(d => ({ x: toSvgX(d.x ?? 0), y: toSvgY(d.y ?? d.value), label: d.label }));
		
		const color = chartColors[0];
		let dataHtml = '';
		
		if (fill && points.length > 1) {
			let areaPath = `M ${points[0].x} ${toSvgY(yMin)}`;
			if (smooth && points.length > 2) {
				areaPath += ` L ${points[0].x} ${points[0].y}`;
				for (let i = 0; i < points.length - 1; i++) {
					const p0 = points[Math.max(0, i - 1)], p1 = points[i], p2 = points[i + 1], p3 = points[Math.min(points.length - 1, i + 2)];
					areaPath += ` C ${p1.x + (p2.x - p0.x) / 6} ${p1.y + (p2.y - p0.y) / 6}, ${p2.x - (p3.x - p1.x) / 6} ${p2.y - (p3.y - p1.y) / 6}, ${p2.x} ${p2.y}`;
				}
			} else {
				points.forEach(p => { areaPath += ` L ${p.x} ${p.y}`; });
			}
			areaPath += ` L ${points[points.length - 1].x} ${toSvgY(yMin)} Z`;
			dataHtml += `<path d="${areaPath}" fill="${color}" fill-opacity="0.2"/>`;
		}
		
		if (showLine && points.length > 1) {
			let linePath = `M ${points[0].x} ${points[0].y}`;
			if (smooth && points.length > 2) {
				for (let i = 0; i < points.length - 1; i++) {
					const p0 = points[Math.max(0, i - 1)], p1 = points[i], p2 = points[i + 1], p3 = points[Math.min(points.length - 1, i + 2)];
					linePath += ` C ${p1.x + (p2.x - p0.x) / 6} ${p1.y + (p2.y - p0.y) / 6}, ${p2.x - (p3.x - p1.x) / 6} ${p2.y - (p3.y - p1.y) / 6}, ${p2.x} ${p2.y}`;
				}
			} else {
				points.forEach((p, i) => { if (i > 0) linePath += ` L ${p.x} ${p.y}`; });
			}
			dataHtml += `<path d="${linePath}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
		}
		
		if (showPoints) {
			points.forEach(p => {
				dataHtml += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${color}" stroke="white" stroke-width="2"/>`;
				if (p.label) dataHtml += `<text x="${p.x}" y="${p.y - 10}" text-anchor="middle" fill="hsl(var(--foreground))" font-size="10">${p.label}</text>`;
			});
		}
		
		const titleHtml = title ? `<div class="chart-title">${title}</div>` : '';
		return `<div class="md-chart md-chart-line">${titleHtml}<div class="chart-container"><svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${gridHtml}${axesHtml}${dataHtml}${labelsHtml}</svg></div></div>`;
	}

	/**
	 * Parse la syntaxe custom:
	 * - ::handwritten[texte]{options} - Texte animé simple
	 * - :::profile-card - Début d'une carte profil (photo + texte côte à côte)
	 * - ::toc - Génère automatiquement un sommaire cliquable
	 * - :::values-grid - Grille de vignettes pour afficher des valeurs/qualités
	 * - :i[icon] ou :icon[icon] - Icône inline
	 * - ::stars[x/y] - Notation étoiles
	 * - ::: - Fin du bloc
	 */
	function preprocessContent(md: string): string {
		// Parser les icônes en premier
		let result = parseIcons(md);
		
		// Parser les étoiles de notation
		result = parseStars(result);
		
		// Générer le sommaire (Table of Contents) à partir des headings
		// Pattern: ::toc ou ::toc{maxLevel=3}
		const tocPattern = /::toc(?:\{([^}]*)\})?/g;
		
		result = result.replace(tocPattern, (match, optionsStr) => {
			const options: Record<string, string> = {};
			if (optionsStr) {
				optionsStr.split(/\s+/).forEach((opt: string) => {
					const [key, value] = opt.split('=');
					if (key && value) options[key] = value;
				});
			}
			
			const maxLevel = parseInt(options.maxLevel || '3', 10);
			const title = options.title || 'Sommaire';
			
			// Extraire tous les headings du markdown
			const headingPattern = /^(#{1,6})\s+(.+)$/gm;
			const headings: Array<{ level: number; text: string; id: string }> = [];
			let headingMatch;
			
			while ((headingMatch = headingPattern.exec(md)) !== null) {
				const level = headingMatch[1].length;
				if (level <= maxLevel) {
					const text = headingMatch[2].trim();
					// Générer un ID slug pour le heading (compatible avec marked-gfm-heading-id)
					const id = text
						.toLowerCase()
						.replace(/[^\w\s-]/g, '')
						.replace(/\s+/g, '-')
						.replace(/-+/g, '-')
						.trim();
					headings.push({ level, text, id });
				}
			}
			
			if (headings.length === 0) {
				return '';
			}
			
			// Générer le HTML du sommaire
			let tocHtml = `<nav class="toc-container" aria-label="Sommaire">`;
			tocHtml += `<div class="toc-title">${title}</div>`;
			tocHtml += `<ul class="toc-list">`;
			
			for (const heading of headings) {
				const indent = heading.level - 1;
				tocHtml += `<li class="toc-item toc-level-${heading.level}" style="padding-left: ${indent * 1}rem;">`;
				tocHtml += `<a href="#${heading.id}" class="toc-link">${heading.text}</a>`;
				tocHtml += `</li>`;
			}
			
			tocHtml += `</ul></nav>`;
			
			return tocHtml;
		});

		// Pattern pour les blocs profile-card
		// :::profile-card
		// ![alt](url)
		// ::handwritten[texte]{options}
		// :::
		result = result.replace(
			/:::profile-card\s*\n([\s\S]*?)\n:::/g,
			(match, innerContent) => {
				// Parser les images markdown dans le bloc
				let parsedInner = innerContent.replace(
					/!\[([^\]]*)\]\(([^)]+)\)/g,
					'<img src="$2" alt="$1" />'
				);
				return `<div class="profile-card">${parsedInner}</div>`;
			}
		);

		// Pattern: ::handwritten[Texte ici]{fontSize=36 duration=2000}
		const handwrittenPattern = /::handwritten\[([^\]]+)\](?:\{([^}]*)\})?/g;
		
		result = result.replace(handwrittenPattern, (match, text, optionsStr) => {
			const options: Record<string, string> = {};
			if (optionsStr) {
				optionsStr.split(/\s+/).forEach((opt: string) => {
					const [key, value] = opt.split('=');
					if (key && value) options[key] = value;
				});
			}
			
			const fontSize = options.fontSize || '32';
			const duration = options.duration || '2000';
			const strokeWidth = options.strokeWidth || '1.2';
			const height = options.height || '60';
			
			// Générer un ID unique
			const id = `handwritten-${Math.random().toString(36).substr(2, 9)}`;
			
			return `<div class="handwritten-wrapper" data-handwritten="${encodeURIComponent(text)}" data-fontsize="${fontSize}" data-duration="${duration}" data-strokewidth="${strokeWidth}" data-height="${height}" id="${id}" style="min-height: ${height}px;"></div>`;
		});

		return result;
	}

	/**
	 * Charger Vara.js via script tag
	 */
	function loadVaraScript(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (typeof window.Vara !== 'undefined') {
				resolve();
				return;
			}
			
			const existingScript = document.querySelector('script[src="/scripts/vara.min.js"]');
			if (existingScript) {
				const checkInterval = setInterval(() => {
					if (typeof window.Vara !== 'undefined') {
						clearInterval(checkInterval);
						resolve();
					}
				}, 50);
				setTimeout(() => {
					clearInterval(checkInterval);
					reject(new Error('Vara load timeout'));
				}, 5000);
				return;
			}
			
			const script = document.createElement('script');
			script.src = '/scripts/vara.min.js';
			script.onload = () => {
				setTimeout(resolve, 100); // Petit délai pour s'assurer que Vara est prêt
			};
			script.onerror = (error) => reject(error);
			document.body.appendChild(script);
		});
	}

	async function initializeVara(color: string) {
		if (!browser || !container || varaInitialized) return;

		const elements = container.querySelectorAll('[data-handwritten]');
		if (elements.length === 0) return;

		try {
			await loadVaraScript();
		} catch (e) {
			console.error('Failed to load Vara.js:', e);
			// Fallback pour tous les éléments
			elements.forEach((el) => {
				const text = decodeURIComponent(el.getAttribute('data-handwritten') || '');
				const fontSize = el.getAttribute('data-fontsize') || '32';
				el.innerHTML = `<span style="font-size: ${fontSize}px; font-family: 'Pacifico', cursive;">${text}</span>`;
			});
			return;
		}

		elements.forEach((el) => {
			// Vider l'élément avant d'initialiser
			el.innerHTML = '';
			
			const text = decodeURIComponent(el.getAttribute('data-handwritten') || '');
			const fontSize = parseInt(el.getAttribute('data-fontsize') || '32');
			const duration = parseInt(el.getAttribute('data-duration') || '2000');
			const strokeWidth = parseFloat(el.getAttribute('data-strokewidth') || '1.2');
			const height = parseInt(el.getAttribute('data-height') || '60');

			try {
				new window.Vara(
					`#${el.id}`,
					'/fonts/Pacifico.json',
					[{
						text,
						fontSize,
						strokeWidth,
						color,
						duration,
						x: 10, // Décalage pour éviter que le texte soit coupé à gauche
						y: fontSize * 1.1 // Positionner juste sous la ligne de base
					}],
					{
						autoAnimation: true
					}
				);
			} catch (e) {
				console.error('Vara init error:', e);
				el.innerHTML = `<span style="font-size: ${fontSize}px; font-family: 'Pacifico', cursive;">${text}</span>`;
			}
		});

		varaInitialized = true;
	}

	onMount(async () => {
		marked.use(gfmHeadingId());
		marked.use(mangle());
		sanitizer = createSanitizer(window);
		isInitialized = true;
		currentTheme = $mode;
		await renderContent();
	});

	async function renderContent() {
		if (!isInitialized || !container || !sanitizer) return;

		// Prétraiter le contenu - extraire les blocs HTML custom et les remplacer par des placeholders
		const htmlBlocks: string[] = [];
		let preprocessed = content;
		
		// Extraire les blocs :::values-grid avant marked
		preprocessed = preprocessed.replace(
			/:::values-grid(?:\{([^}]*)\})?\s*\n([\s\S]*?)\n:::/g,
			(match, gridOptionsStr, innerContent) => {
				const gridOptions: Record<string, string> = {};
				if (gridOptionsStr) {
					gridOptionsStr.split(/\s+/).forEach((opt: string) => {
						const [key, value] = opt.split('=');
						if (key && value) gridOptions[key] = value;
					});
				}
				const cols = gridOptions.cols || '2';
				
				const valuePattern = /::value\[([^\]]+)\](?:\{([^}]*)\})?\s*\n([\s\S]*?)(?=::value|\n::$|$)/g;
				let valuesHtml = '';
				let valueMatch;
				
				while ((valueMatch = valuePattern.exec(innerContent)) !== null) {
					const title = valueMatch[1];
					const optionsStr = valueMatch[2] || '';
					let description = valueMatch[3].trim().replace(/\n::$/, '').trim();
					
					const options: Record<string, string> = {};
					if (optionsStr) {
						optionsStr.split(/\s+/).forEach((opt: string) => {
							const [key, value] = opt.split('=');
							if (key && value) options[key] = value;
						});
					}
					
					const icon = options.icon || 'sparkles';
					const color = options.color || 'primary';
					const iconHtml = iconToHtml(icon, 'value-icon');
					
					description = description
						.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
						.replace(/\*([^*]+)\*/g, '<em>$1</em>');
					
					valuesHtml += `<div class="value-card value-card-${color}"><div class="value-card-icon">${iconHtml}</div><div class="value-card-content"><h4 class="value-card-title">${title}</h4><p class="value-card-description">${description}</p></div></div>`;
				}
				
				const html = `<div class="values-grid values-grid-cols-${cols}">${valuesHtml}</div>`;
				htmlBlocks.push(html);
				return `<span data-htmlblock="${htmlBlocks.length - 1}"></span>`;
			}
		);
		
		// Extraire les blocs :::buttons avant marked
		preprocessed = preprocessed.replace(
			/:::buttons(?:\{([^}]*)\})?\s*\n([\s\S]*?)\n:::/g,
			(match, gridOptionsStr, innerContent) => {
				const gridOptions: Record<string, string> = {};
				if (gridOptionsStr) {
					gridOptionsStr.split(/\s+/).forEach((opt: string) => {
						const [key, value] = opt.split('=');
						if (key && value) gridOptions[key] = value;
					});
				}
				const align = gridOptions.align || 'center';
				
				// Parser chaque ::button[Label]{href=url icon=emoji style=solid|outline|soft color=blue}
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
					
					const href = options.href || '#';
					const icon = options.icon || '';
					const style = options.style || 'ghost'; // ghost, default, outline, secondary
					const newTab = options.newTab === 'true';
					
					const targetAttr = newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
					const iconHtml = icon ? iconToHtml(icon, 'btn-icon') : '';
					
					buttonsHtml += `<a href="${href}" class="md-btn md-btn-${style}"${targetAttr}>${iconHtml}<span class="btn-label">${label}</span></a>`;
				}
				
				const html = `<div class="md-buttons md-buttons-${align}">${buttonsHtml}</div>`;
				htmlBlocks.push(html);
				return `<span data-htmlblock="${htmlBlocks.length - 1}"></span>`;
			}
		);

		// Extraire les blocs :::tags avant marked (affichage en badges/chips)
		preprocessed = preprocessed.replace(
			/:::tags(?:\{([^}]*)\})?\s*\n([\s\S]*?)\n:::/g,
			(match, optionsStr, innerContent) => {
				const options: Record<string, string> = {};
				if (optionsStr) {
					optionsStr.split(/\s+/).forEach((opt: string) => {
						const [key, value] = opt.split('=');
						if (key && value) options[key] = value;
					});
				}
				const layout = options.layout || 'wrap'; // wrap, grid
				
				// Parser chaque ::tag[Label]{icon=emoji desc=description}
				const tagPattern = /::tag\[([^\]]+)\](?:\{([^}]*)\})?/g;
				let tagsHtml = '';
				let tagMatch;
				
				while ((tagMatch = tagPattern.exec(innerContent)) !== null) {
					const label = tagMatch[1];
					const tagOptionsStr = tagMatch[2] || '';
					
					const tagOptions: Record<string, string> = {};
					if (tagOptionsStr) {
						// Parser les options avec support des guillemets pour les longues descriptions
						const optRegex = /(\w+)=(?:"([^"]*)"|(\S+))/g;
						let optMatch;
						while ((optMatch = optRegex.exec(tagOptionsStr)) !== null) {
							const key = optMatch[1];
							const value = optMatch[2] !== undefined ? optMatch[2] : optMatch[3];
							tagOptions[key] = value;
						}
					}
					
					const icon = tagOptions.icon || '';
					const desc = tagOptions.desc ? tagOptions.desc.replace(/_/g, ' ') : '';
					const full = tagOptions.full ? tagOptions.full.replace(/_/g, ' ') : '';
					
					const iconHtml = icon ? iconToHtml(icon, 'tag-icon') : '';
					const descHtml = desc ? `<span class="tag-desc">${desc}</span>` : '';
					const fullHtml = full ? `<div class="tag-full">${full}</div>` : '';
					
					tagsHtml += `<div class="md-tag"><div class="tag-header">${iconHtml}<span class="tag-label">${label}</span>${descHtml}</div>${fullHtml}</div>`;
				}
				
				const html = `<div class="md-tags md-tags-${layout}">${tagsHtml}</div>`;
				htmlBlocks.push(html);
				return `<span data-htmlblock="${htmlBlocks.length - 1}"></span>`;
			}
		);
		
		// Extraire les blocs :::chart avant marked (stockés dans htmlBlocks)
		preprocessed = parseCharts(preprocessed, htmlBlocks);
		
		// Prétraiter le reste (profile-card, handwritten, toc)
		preprocessed = preprocessContent(preprocessed);
		
		// Parser avec marked
		let parsed = await marked.parse(preprocessed);
		
		// Sanitizer avec support des data-attributes pour les placeholders
		let finalHtml = sanitizer.sanitize(parsed, {
			USE_PROFILES: { html: true, svg: true, svgFilters: true },
			ADD_TAGS: ['nav'],
			ADD_ATTR: ['data-handwritten', 'data-fontsize', 'data-duration', 'data-strokewidth', 'data-height', 'aria-label', 'data-label', 'data-value', 'target', 'rel', 'data-htmlblock', 'data-codeprotect']
		});
		
		// MAINTENANT restaurer les blocs HTML (incluant les SVG non sanitizés)
		// marked peut envelopper les spans dans <p>, donc on utilise une regex
		htmlBlocks.forEach((html, index) => {
			const regex = new RegExp(`(<p>)?<span data-htmlblock="${index}"><\\/span>(</p>)?`, 'g');
			finalHtml = finalHtml.replace(regex, html);
		});
		
		container.innerHTML = finalHtml;
		
		Prism.highlightAllUnder(container);
		
		// Initialiser les animations après le rendu
		await tick();
		varaInitialized = false; // Reset pour permettre la réinitialisation
		await initializeVara(handwrittenColor);
	}

	// Observer les changements de thème
	$effect(() => {
		const newTheme = $mode;
		if (isInitialized && currentTheme !== undefined && currentTheme !== newTheme) {
			currentTheme = newTheme;
			// Re-render quand le thème change
			varaInitialized = false;
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

	/* Style pour la carte profil (photo + texte côte à côte) */
	:global(.markdown-container .profile-card) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin: 1.5rem auto; /* auto pour centrer horizontalement */
		max-width: fit-content;
	}

	@media (min-width: 640px) {
		:global(.markdown-container .profile-card) {
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 1.5rem;
		}
	}

	:global(.markdown-container .profile-card img) {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid hsl(var(--primary) / 0.3);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		flex-shrink: 0;
	}

	:global(.markdown-container .profile-card .handwritten-wrapper) {
		display: flex;
		align-items: center;
		min-width: 280px; /* Largeur min pour éviter trop de retours à la ligne */
		padding-left: 8px; /* Éviter que le texte soit coupé à gauche */
	}

	:global(.markdown-container .handwritten-wrapper) {
		display: flex;
		justify-content: center;
		padding-left: 8px; /* Éviter que le texte soit coupé à gauche */
	}

	/* Styles pour le sommaire (Table of Contents) */
	:global(.markdown-container .toc-container) {
		background: hsl(var(--muted) / 0.3);
		border: 1px solid hsl(var(--border));
		border-radius: 0.75rem;
		padding: 1.25rem 1.5rem;
		margin: 1.5rem 0 2rem 0;
		backdrop-filter: blur(8px);
	}

	:global(.markdown-container .toc-title) {
		font-size: 1.1rem;
		font-weight: 600;
		color: hsl(var(--foreground));
		margin-bottom: 0.75rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid hsl(var(--border) / 0.5);
	}

	:global(.markdown-container .toc-list) {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:global(.markdown-container .toc-item) {
		margin: 0;
		line-height: 1.4;
	}

	:global(.markdown-container .toc-link) {
		color: hsl(var(--muted-foreground));
		text-decoration: none;
		font-size: 0.95rem;
		transition: all 0.2s ease;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	:global(.markdown-container .toc-link::before) {
		content: '›';
		color: hsl(var(--primary) / 0.5);
		font-weight: bold;
		transition: all 0.2s ease;
	}

	:global(.markdown-container .toc-link:hover) {
		color: hsl(var(--primary));
	}

	:global(.markdown-container .toc-link:hover::before) {
		color: hsl(var(--primary));
		transform: translateX(3px);
	}

	:global(.markdown-container .toc-level-1) {
		font-weight: 600;
	}

	:global(.markdown-container .toc-level-2) {
		font-weight: 500;
	}

	:global(.markdown-container .toc-level-3) {
		font-size: 0.9rem;
	}

	/* ===== VALUES GRID - Grille de vignettes ===== */
	:global(.markdown-container .values-grid) {
		display: grid;
		gap: 0.75rem;
		margin: 1rem 0;
	}

	:global(.markdown-container .values-grid-cols-1) {
		grid-template-columns: 1fr;
	}

	:global(.markdown-container .values-grid-cols-2) {
		grid-template-columns: repeat(2, 1fr);
	}

	:global(.markdown-container .values-grid-cols-3) {
		grid-template-columns: repeat(3, 1fr);
	}

	:global(.markdown-container .values-grid-cols-4) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 768px) {
		:global(.markdown-container .values-grid-cols-2),
		:global(.markdown-container .values-grid-cols-3),
		:global(.markdown-container .values-grid-cols-4) {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		:global(.markdown-container .values-grid-cols-3),
		:global(.markdown-container .values-grid-cols-4) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	:global(.markdown-container .value-card) {
		position: relative;
		display: flex;
		gap: 0.75rem;
		padding: 0.875rem;
		background: hsl(var(--card) / 0.6);
		border: 1px solid hsl(var(--border) / 0.5);
		border-radius: 0.75rem;
		backdrop-filter: blur(8px);
		transition: all 0.3s ease;
		overflow: hidden;
	}

	:global(.markdown-container .value-card::before) {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 3px;
		height: 100%;
		border-radius: 3px 0 0 3px;
		transition: all 0.3s ease;
	}

	:global(.markdown-container .value-card:hover) {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px -3px rgba(0, 0, 0, 0.1);
		border-color: hsl(var(--border));
	}

	/* Couleurs des cartes */
	:global(.markdown-container .value-card-primary::before) {
		background: hsl(var(--primary));
	}

	:global(.markdown-container .value-card-blue::before) {
		background: linear-gradient(180deg, #3b82f6, #1d4ed8);
	}

	:global(.markdown-container .value-card-green::before) {
		background: linear-gradient(180deg, #22c55e, #16a34a);
	}

	:global(.markdown-container .value-card-purple::before) {
		background: linear-gradient(180deg, #a855f7, #7c3aed);
	}

	:global(.markdown-container .value-card-orange::before) {
		background: linear-gradient(180deg, #f97316, #ea580c);
	}

	:global(.markdown-container .value-card-red::before) {
		background: linear-gradient(180deg, #ef4444, #dc2626);
	}

	:global(.markdown-container .value-card-yellow::before) {
		background: linear-gradient(180deg, #eab308, #ca8a04);
	}

	:global(.markdown-container .value-card-cyan::before) {
		background: linear-gradient(180deg, #06b6d4, #0891b2);
	}

	:global(.markdown-container .value-card-icon) {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		font-size: 1.25rem;
		background: hsl(var(--muted) / 0.5);
		border-radius: 0.5rem;
	}

	:global(.markdown-container .value-card-icon .value-icon) {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
	}

	:global(.markdown-container .value-card-content) {
		flex: 1;
		min-width: 0;
	}

	:global(.markdown-container .value-card-title) {
		margin: 0 0 0.25rem 0;
		font-size: 0.95rem;
		font-weight: 600;
		color: hsl(var(--foreground));
		line-height: 1.2;
	}

	:global(.markdown-container .value-card-description) {
		margin: 0;
		font-size: 0.8rem;
		color: hsl(var(--muted-foreground));
		line-height: 1.5;
	}

	:global(.markdown-container .value-card-description strong) {
		color: hsl(var(--foreground));
		font-weight: 600;
	}

	/* ===== BUTTONS - Boutons stylés (flat, noir/blanc) ===== */
	:global(.markdown-container .md-buttons) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin: 1.5rem 0;
		padding: 4px;
		margin-bottom: 0.5rem;
	}

	:global(.markdown-container .md-buttons-left) {
		justify-content: flex-start;
	}

	:global(.markdown-container .md-buttons-center) {
		justify-content: center;
	}

	:global(.markdown-container .md-buttons-right) {
		justify-content: flex-end;
	}

	:global(.markdown-container .md-btn) {
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

	:global(.markdown-container .md-btn:hover) {
		text-decoration: none !important;
	}

	:global(.markdown-container .md-btn::after),
	:global(.markdown-container .md-btn:hover::after),
	:global(.markdown-container .md-btn::before),
	:global(.markdown-container .md-btn:hover::before) {
		display: none !important;
		content: none !important;
		width: 0 !important;
		height: 0 !important;
	}

	:global(.prose .md-btn),
	:global(.prose .md-btn:hover),
	:global(article .md-btn),
	:global(article .md-btn:hover) {
		text-decoration: none !important;
		border-bottom: none !important;
	}

	:global(.prose .md-btn::after),
	:global(.prose .md-btn:hover::after),
	:global(article .md-btn::after),
	:global(article .md-btn:hover::after) {
		display: none !important;
		content: none !important;
	}

	:global(.markdown-container .md-btn .btn-icon) {
		font-size: 1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.1rem;
		height: 1.1rem;
	}

	:global(.markdown-container .md-btn .btn-label) {
		color: inherit !important;
	}

	/* Style Default - Bouton noir plein, texte blanc */
	:global(.markdown-container .md-btn-default) {
		background: #1a1a1a;
		color: #ffffff !important;
		border-color: #1a1a1a;
	}
	:global(.markdown-container .md-btn-default:hover) {
		background: #333333;
		border-color: #333333;
	}
	:global(.markdown-container .md-btn-default .btn-label),
	:global(.markdown-container .md-btn-default .btn-icon) {
		color: #ffffff !important;
	}

	/* Style Outline - Bouton bordé, fond transparent */
	:global(.markdown-container .md-btn-outline) {
		background: hsl(var(--background));
		color: hsl(var(--foreground)) !important;
		border: none;
		box-shadow: inset 0 0 0 1.5px hsl(var(--foreground) / 0.3);
	}
	:global(.markdown-container .md-btn-outline:hover) {
		background: hsl(var(--foreground) / 0.05);
		box-shadow: inset 0 0 0 1.5px hsl(var(--foreground) / 0.5);
	}

	/* Style Ghost - Bouton léger avec fond gris */
	:global(.markdown-container .md-btn-ghost) {
		background: hsl(var(--muted));
		color: hsl(var(--foreground)) !important;
		border-color: hsl(var(--border));
	}
	:global(.markdown-container .md-btn-ghost:hover) {
		background: hsl(var(--muted) / 0.7);
		border-color: hsl(var(--foreground) / 0.2);
	}

	/* ===== TAGS - Affichage en badges modernes avec expand ===== */
	:global(.markdown-container .md-tags) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 1rem 0;
		position: relative;
		z-index: 10;
	}

	:global(.markdown-container .md-tags-grid) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5rem;
		position: relative;
		z-index: 10;
	}

	@media (max-width: 640px) {
		:global(.markdown-container .md-tags-grid) {
			grid-template-columns: 1fr;
		}
	}

	:global(.markdown-container .md-tag) {
		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0;
		padding: 0.5rem 0.875rem;
		background: hsl(var(--muted) / 0.5);
		border-radius: 0.5rem;
		font-size: 0.8125rem;
		cursor: default;
		position: relative;
		z-index: 1;
	}

	:global(.markdown-container .md-tag:hover) {
		z-index: 100;
	}

	:global(.markdown-container .md-tag .tag-header) {
		display: flex;
		align-items: center;
		gap: 0.375rem;
	}

	:global(.markdown-container .md-tag .tag-icon) {
		font-size: 0.9rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.1rem;
		height: 1.1rem;
	}

	:global(.markdown-container .md-tag .tag-label) {
		font-weight: 600;
		color: hsl(var(--foreground));
	}

	:global(.markdown-container .md-tag .tag-desc) {
		font-size: 0.75rem;
		color: hsl(var(--muted-foreground));
		margin-left: 1.25rem;
	}

	/* Texte complet en overlay */
	:global(.markdown-container .md-tag .tag-full) {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background: hsl(var(--card));
		border: 1px solid hsl(var(--border) / 0.5);
		border-top: none;
		border-radius: 0 0 0.5rem 0.5rem;
		padding: 0.625rem 0.875rem;
		font-size: 0.8rem;
		line-height: 1.5;
		color: hsl(var(--foreground) / 0.85);
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.2s ease, visibility 0.2s ease;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
		z-index: 200;
	}

	/* Au hover, affiche le texte en overlay */
	:global(.markdown-container .md-tag:hover) {
		background: hsl(var(--card));
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		border-radius: 0.5rem 0.5rem 0 0;
	}

	:global(.markdown-container .md-tag:hover .tag-full) {
		opacity: 1;
		visibility: visible;
	}

	/* Icônes inline :i[nom] ou :icon[nom] */
	:global(.markdown-container .md-icon) {
		display: inline-block;
		width: 1.2em;
		height: 1.2em;
		vertical-align: -0.15em;
		flex-shrink: 0;
	}

	/* Notations étoiles ::stars[x/y] */
	:global(.markdown-container .stars-rating) {
		display: inline-flex;
		align-items: center;
		gap: 0.1em;
		vertical-align: middle;
	}
	:global(.markdown-container .star) {
		display: inline-block;
		width: 1.1em;
		height: 1.1em;
		flex-shrink: 0;
	}
	:global(.markdown-container .star-filled) {
		color: hsl(45, 93%, 47%); /* Couleur dorée */
	}
	:global(.markdown-container .star-empty) {
		color: hsl(var(--muted-foreground) / 0.4);
	}

	/* ============ GRAPHIQUES / CHARTS ============ */
	
	:global(.markdown-container .md-chart) {
		margin: 1.5rem 0;
		padding: 1.25rem;
		background: hsl(var(--card));
		border: 1px solid hsl(var(--border) / 0.5);
		border-radius: 0.75rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	:global(.markdown-container .chart-title) {
		font-weight: 600;
		font-size: 1rem;
		color: hsl(var(--foreground));
		margin-bottom: 1rem;
		text-align: center;
	}

	:global(.markdown-container .chart-container) {
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
		min-height: 200px;
	}

	:global(.markdown-container .chart-container svg) {
		display: block;
		max-width: 100%;
		height: auto;
		overflow: visible;
	}

	:global(.markdown-container .md-chart-pie .chart-container svg),
	:global(.markdown-container .md-chart-donut .chart-container svg) {
		min-width: 200px;
		min-height: 200px;
	}

	:global(.markdown-container .md-chart-radar .chart-container svg) {
		min-width: 250px;
		min-height: 250px;
	}

	:global(.markdown-container .chart-slice) {
		transition: transform 0.2s ease, filter 0.2s ease;
		transform-origin: center;
	}

	:global(.markdown-container .chart-slice:hover) {
		filter: brightness(1.1);
	}

	/* Légende */
	:global(.markdown-container .chart-legend) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem 1.25rem;
		margin-top: 0.75rem;
	}

	:global(.markdown-container .legend-item) {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
	}

	:global(.markdown-container .legend-color) {
		width: 12px;
		height: 12px;
		border-radius: 2px;
		flex-shrink: 0;
	}

	:global(.markdown-container .legend-label) {
		color: hsl(var(--foreground));
	}

	:global(.markdown-container .legend-value) {
		color: hsl(var(--muted-foreground));
		font-size: 0.8rem;
	}

	/* Bar Chart */
	:global(.markdown-container .chart-bars) {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	:global(.markdown-container .bar-row) {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	:global(.markdown-container .bar-label) {
		min-width: 80px;
		font-size: 0.85rem;
		color: hsl(var(--foreground));
		text-align: right;
	}

	:global(.markdown-container .bar-track) {
		flex: 1;
		height: 20px;
		background: hsl(var(--muted) / 0.3);
		border-radius: 4px;
		overflow: hidden;
	}

	:global(.markdown-container .bar-fill) {
		height: 100%;
		border-radius: 4px;
		transition: width 0.5s ease;
	}

	:global(.markdown-container .bar-value) {
		min-width: 40px;
		font-size: 0.85rem;
		color: hsl(var(--muted-foreground));
	}

	/* Progress Chart */
	:global(.markdown-container .chart-progress) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	:global(.markdown-container .progress-row) {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	:global(.markdown-container .progress-header) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	:global(.markdown-container .progress-label) {
		font-size: 0.9rem;
		font-weight: 500;
		color: hsl(var(--foreground));
	}

	:global(.markdown-container .progress-value) {
		font-size: 0.85rem;
		color: hsl(var(--muted-foreground));
	}

	:global(.markdown-container .progress-track) {
		height: 8px;
		background: hsl(var(--muted) / 0.3);
		border-radius: 4px;
		overflow: hidden;
	}

	:global(.markdown-container .progress-fill) {
		height: 100%;
		border-radius: 4px;
		transition: width 0.5s ease;
	}

	/* Radar Chart */
	:global(.markdown-container .md-chart-radar .chart-container svg text) {
		font-family: inherit;
	}

	/* Bar chart vertical */
	:global(.markdown-container .md-chart-bar-vertical .chart-container) {
		overflow-x: auto;
		padding: 0.5rem 0;
	}

	:global(.markdown-container .md-chart-bar-vertical svg) {
		display: block;
		margin: 0 auto;
	}

	:global(.markdown-container .chart-bar-v) {
		transition: filter 0.2s ease;
	}

	:global(.markdown-container .chart-bar-v:hover) {
		filter: brightness(1.1);
	}

	/* Line/Scatter chart */
	:global(.markdown-container .md-chart-line) {
		overflow-x: auto;
	}

	:global(.markdown-container .md-chart-line .chart-container) {
		min-width: 300px;
	}

	:global(.markdown-container .md-chart-line svg) {
		display: block;
		margin: 0 auto;
	}

	/* Responsive */
	@media (max-width: 480px) {
		:global(.markdown-container .bar-label) {
			min-width: 60px;
			font-size: 0.75rem;
		}
		:global(.markdown-container .bar-value) {
			min-width: 30px;
			font-size: 0.75rem;
		}
		:global(.markdown-container .chart-legend) {
			gap: 0.5rem 0.75rem;
		}
		:global(.markdown-container .legend-item) {
			font-size: 0.75rem;
		}
		:global(.markdown-container .md-chart-line .chart-container),
		:global(.markdown-container .md-chart-bar-vertical .chart-container) {
			overflow-x: auto;
		}
	}
</style>
