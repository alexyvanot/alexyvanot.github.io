#!/usr/bin/env node
/**
 * Optimisation des logos (static/logos/*.png)
 *
 * Les logos ne sont jamais affiches a plus de ~150px (header des pages
 * detail: 100px, vignettes: 150px, fonds de cartes decoratifs estompes).
 * Ce script plafonne leurs dimensions a MAX_DIM pixels (marge Retina 3x
 * incluse) et les recompresse en PNG palette haute qualite.
 *
 * - Ne redimensionne jamais vers le haut.
 * - N'ecrit le fichier que si le resultat est plus leger que l'original.
 * - Ne touche pas aux SVG (vectoriels) ni aux images de static/images
 *   (fonds d'ecran et photos, conserves en qualite d'origine).
 *
 * Usage: npm run optimize:logos
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOGOS_DIR = path.join(__dirname, '..', 'static', 'logos');
const MAX_DIM = 640;

async function optimizeFile(filePath) {
	const original = fs.readFileSync(filePath);
	const meta = await sharp(original).metadata();

	let pipeline = sharp(original);
	const needsResize = Math.max(meta.width ?? 0, meta.height ?? 0) > MAX_DIM;
	if (needsResize) {
		pipeline = pipeline.resize({
			width: MAX_DIM,
			height: MAX_DIM,
			fit: 'inside',
			withoutEnlargement: true
		});
	}

	const optimized = await pipeline
		.png({ compressionLevel: 9, palette: true, quality: 95, effort: 10 })
		.toBuffer();

	if (optimized.length >= original.length) {
		return { file: path.basename(filePath), skipped: true, before: original.length };
	}

	fs.writeFileSync(filePath, optimized);
	const newMeta = await sharp(optimized).metadata();
	return {
		file: path.basename(filePath),
		skipped: false,
		before: original.length,
		after: optimized.length,
		dims: `${meta.width}x${meta.height} -> ${newMeta.width}x${newMeta.height}`
	};
}

async function main() {
	const files = fs
		.readdirSync(LOGOS_DIR)
		.filter((f) => f.toLowerCase().endsWith('.png'))
		.map((f) => path.join(LOGOS_DIR, f));

	let totalBefore = 0;
	let totalAfter = 0;

	for (const file of files) {
		const result = await optimizeFile(file);
		totalBefore += result.before;
		totalAfter += result.skipped ? result.before : result.after;
		if (result.skipped) {
			console.log(`  = ${result.file} (deja optimal, ${(result.before / 1024).toFixed(1)} Ko)`);
		} else {
			console.log(
				`  - ${result.file}: ${(result.before / 1024).toFixed(1)} Ko -> ${(result.after / 1024).toFixed(1)} Ko (${result.dims})`
			);
		}
	}

	console.log(
		`\nTotal: ${(totalBefore / 1024).toFixed(1)} Ko -> ${(totalAfter / 1024).toFixed(1)} Ko (-${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}%)`
	);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
