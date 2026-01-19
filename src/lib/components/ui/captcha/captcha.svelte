<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Asterisk } from 'lucide-svelte';

	interface Props {
		onverified?: (isValid: boolean) => void;
	}

	let { onverified }: Props = $props();

	let canvasElement: HTMLCanvasElement;
	let userInput = $state('');
	let correctAnswer = 0;
	let isVerified = $state(false);
	let showError = $state(false);

	// Variable calculée pour le statut du bouton
	let isButtonDisabled = $derived(isVerified || !userInput || userInput.length === 0);

	// Fonction publique pour vérifier le captcha (sécurité)
	export function isCurrentlyValid(): boolean {
		return isVerified && parseInt(userInput) === correctAnswer;
	}

	// Fonction publique pour récupérer la réponse de l'utilisateur
	export function getUserInput(): string {
		return userInput;
	}

	// Fonction publique pour récupérer la réponse correcte
	export function getCorrectAnswer(): number {
		return correctAnswer;
	}

	// Fonction publique pour générer un nouveau captcha
	export function generateNewCaptcha(): void {
		generateCaptcha();
	}

	// Génère une nouvelle question de captcha
	function generateCaptcha() {
		const num1 = Math.floor(Math.random() * 10) + 1;
		const num2 = Math.floor(Math.random() * 10) + 1;
		const operations = ['+', '-', '*'];
		const operation = operations[Math.floor(Math.random() * operations.length)];
		
		let question = '';
		switch (operation) {
			case '+':
				correctAnswer = num1 + num2;
				question = `${num1} + ${num2}`;
				break;
			case '-':
				correctAnswer = num1 - num2;
				question = `${num1} - ${num2}`;
				break;
			case '*':
				correctAnswer = num1 * num2;
				question = `${num1} × ${num2}`;
				break;
		}
		
		drawCaptcha(question);
		userInput = '';
		isVerified = false;
		showError = false;
		onverified?.(false);
	}

	// Dessine le captcha sur le canvas avec distorsions avancées
	function drawCaptcha(text: string) {
		if (!canvasElement) return;
		
		const ctx = canvasElement.getContext('2d');
		if (!ctx) return;

		const width = canvasElement.width;
		const height = canvasElement.height;

		// Nettoie le canvas
		ctx.clearRect(0, 0, width, height);
		
		// Fond avec gradient aléatoire
		const gradient = ctx.createLinearGradient(
			Math.random() * width, 
			Math.random() * height, 
			width - Math.random() * width, 
			height - Math.random() * height
		);
		const bgColors = [
			['#f0f4f8', '#d9e2ec'],
			['#e8f4f8', '#b2d4e0'],
			['#f5f0ff', '#e0d4f7'],
			['#fff5f5', '#fed7d7'],
			['#f0fff4', '#c6f6d5']
		];
		const bgPair = bgColors[Math.floor(Math.random() * bgColors.length)];
		gradient.addColorStop(0, bgPair[0]);
		gradient.addColorStop(1, bgPair[1]);
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, width, height);
		
		// Lignes de bruit courbes (bezier curves)
		const lineColors = ['#adb5bd', '#868e96', '#495057', '#6c757d', '#ced4da'];
		for (let i = 0; i < 8; i++) {
			ctx.strokeStyle = lineColors[Math.floor(Math.random() * lineColors.length)];
			ctx.lineWidth = Math.random() * 2 + 0.5;
			ctx.beginPath();
			const startX = Math.random() * width;
			const startY = Math.random() * height;
			const cp1x = Math.random() * width;
			const cp1y = Math.random() * height;
			const cp2x = Math.random() * width;
			const cp2y = Math.random() * height;
			const endX = Math.random() * width;
			const endY = Math.random() * height;
			ctx.moveTo(startX, startY);
			ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
			ctx.stroke();
		}
		
		// Points de bruit de tailles variées
		const dotColors = ['#adb5bd', '#6c757d', '#495057', '#868e96'];
		for (let i = 0; i < 50; i++) {
			ctx.fillStyle = dotColors[Math.floor(Math.random() * dotColors.length)];
			ctx.globalAlpha = Math.random() * 0.5 + 0.3;
			ctx.beginPath();
			ctx.arc(
				Math.random() * width, 
				Math.random() * height, 
				Math.random() * 2.5 + 0.5, 
				0, 
				2 * Math.PI
			);
			ctx.fill();
		}
		ctx.globalAlpha = 1;
		
		// Lignes traversantes pour brouiller
		for (let i = 0; i < 3; i++) {
			ctx.strokeStyle = lineColors[Math.floor(Math.random() * lineColors.length)];
			ctx.lineWidth = Math.random() * 1.5 + 0.5;
			ctx.beginPath();
			ctx.moveTo(0, Math.random() * height);
			ctx.lineTo(width, Math.random() * height);
			ctx.stroke();
		}
		
		// Texte principal avec distorsion avancée
		const textColors = ['#2d3748', '#1a202c', '#4a5568', '#2c5282', '#553c9a', '#744210', '#22543d'];
		const fonts = ['Arial', 'Georgia', 'Verdana', 'Times New Roman', 'Courier New'];
		
		const characters = text.split('');
		const charWidth = 28;
		const totalWidth = characters.length * charWidth;
		let startX = (width - totalWidth) / 2 + charWidth / 2;
		
		characters.forEach((char, index) => {
			ctx.save();
			
			// Position avec variation aléatoire
			const x = startX + (index * charWidth) + (Math.random() - 0.5) * 8;
			const y = height / 2 + (Math.random() - 0.5) * 14;
			
			// Rotation aléatoire plus prononcée
			const rotation = (Math.random() - 0.5) * 0.5;
			
			// Taille de police variable
			const fontSize = Math.floor(Math.random() * 8) + 24;
			const fontWeight = Math.random() > 0.5 ? 'bold' : 'normal';
			const fontStyle = Math.random() > 0.7 ? 'italic' : 'normal';
			const font = fonts[Math.floor(Math.random() * fonts.length)];
			
			ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${font}`;
			ctx.fillStyle = textColors[Math.floor(Math.random() * textColors.length)];
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			
			// Appliquer transformation
			ctx.translate(x, y);
			ctx.rotate(rotation);
			
			// Étirement horizontal ou vertical aléatoire
			const scaleX = 0.8 + Math.random() * 0.4;
			const scaleY = 0.8 + Math.random() * 0.4;
			ctx.scale(scaleX, scaleY);
			
			// Ombre légère pour certains caractères
			if (Math.random() > 0.5) {
				ctx.shadowColor = 'rgba(0,0,0,0.3)';
				ctx.shadowBlur = 2;
				ctx.shadowOffsetX = 1;
				ctx.shadowOffsetY = 1;
			}
			
			ctx.fillText(char, 0, 0);
			
			// Contour pour certains caractères (effet stencil)
			if (Math.random() > 0.6) {
				ctx.strokeStyle = textColors[Math.floor(Math.random() * textColors.length)];
				ctx.lineWidth = 0.5;
				ctx.strokeText(char, 0, 0);
			}
			
			ctx.restore();
		});
		
		// Lignes qui traversent le texte (après le texte pour plus de difficulté)
		for (let i = 0; i < 2; i++) {
			ctx.strokeStyle = lineColors[Math.floor(Math.random() * lineColors.length)];
			ctx.lineWidth = Math.random() * 1 + 0.5;
			ctx.beginPath();
			const yPos = height / 2 + (Math.random() - 0.5) * 20;
			ctx.moveTo(10, yPos);
			ctx.bezierCurveTo(
				width * 0.3, yPos + (Math.random() - 0.5) * 30,
				width * 0.7, yPos + (Math.random() - 0.5) * 30,
				width - 10, yPos + (Math.random() - 0.5) * 20
			);
			ctx.stroke();
		}
		
		// Ajouter du "grain" subtil
		const imageData = ctx.getImageData(0, 0, width, height);
		const data = imageData.data;
		for (let i = 0; i < data.length; i += 4) {
			if (Math.random() > 0.97) {
				const noise = Math.floor(Math.random() * 30) - 15;
				data[i] = Math.min(255, Math.max(0, data[i] + noise));
				data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
				data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
			}
		}
		ctx.putImageData(imageData, 0, 0);
	}

	// Fonction pour valider la saisie (seulement chiffres et signe moins)
	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		
		// Permettre seulement les chiffres et le signe moins au début
		const validPattern = /^-?\d*$/;
		
		if (!validPattern.test(value)) {
			// Supprimer les caractères invalides
			const cleanValue = value.replace(/[^-\d]/g, '');
			// S'assurer que le signe moins n'est qu'au début
			const finalValue = cleanValue.replace(/(?!^)-/g, '');
			userInput = finalValue;
		}
	}

	// Vérifie la réponse
	function checkAnswer() {
		const answer = parseInt(userInput);
		if (answer === correctAnswer) {
			isVerified = true;
			showError = false;
			onverified?.(true);
		} else {
			showError = true;
			isVerified = false;
			onverified?.(false);
		}
	}

	// Rafraîchit le captcha
	function refreshCaptcha() {
		userInput = '';
		generateCaptcha();
	}

	onMount(() => {
		generateCaptcha();
	});

	// Vérifie automatiquement quand l'utilisateur tape
	$effect(() => {
		if (userInput) {
			showError = false;
		}
	});
</script>

<div class="flex flex-col gap-3">
	<Label for="captcha-input" class="flex items-center gap-1">
		Vérification anti-robot
		<Asterisk class="w-3 h-3 text-orange-500" />
	</Label>
	<div class="flex flex-col sm:flex-row items-center gap-3">
		<div class="relative flex-shrink-0">
			<canvas 
				bind:this={canvasElement} 
				width="180" 
				height="60" 
				class="border rounded-md cursor-pointer block {isVerified ? 'border-green-500' : showError ? 'border-red-500' : 'border-gray-300'}"
				onclick={refreshCaptcha}
				style="max-width: 100%; height: auto;"
			></canvas>
			{#if isVerified}
				<div class="absolute top-1 right-1 text-green-500">
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
					</svg>
				</div>
			{/if}
		</div>
		<div class="flex flex-col sm:flex-row gap-2 flex-1 w-full sm:w-auto">
			<Button 
				type="button" 
				variant="outline" 
				size="sm" 
				onclick={refreshCaptcha}
				class="flex items-center gap-1 whitespace-nowrap"
			>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
			</svg>
			Nouveau
		</Button>
		</div>
	</div>
	<div class="flex flex-col sm:flex-row gap-2 w-full">
		<Input 
			bind:value={userInput}
			id="captcha-input"
			placeholder="Votre réponse"
			type="text"
			inputmode="numeric"
			pattern="^-?[0-9]*$"
			class="flex-1 {isVerified ? 'border-green-500' : showError ? 'border-red-500' : ''}"
			on:input={handleInput}
			on:keydown={(e) => {
				if (e.key === 'Enter') {
					e.preventDefault();
					checkAnswer();
				}
			}}
		/>
		<Button 
			type="button" 
			onclick={checkAnswer}
			disabled={isButtonDisabled}
			size="sm"
			class="whitespace-nowrap"
		>
			Vérifier
		</Button>
	</div>
	{#if showError}
		<p class="text-sm text-red-500">Réponse incorrecte. Veuillez réessayer.</p>
	{/if}
	{#if isVerified}
		<p class="text-sm text-green-500">Vérification réussie !</p>
	{/if}
	<p class="text-xs text-muted-foreground">Cliquez sur l'image pour générer un nouveau captcha</p>
</div>
