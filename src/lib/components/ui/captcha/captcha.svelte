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

	// Dessine le captcha sur le canvas
	function drawCaptcha(text: string) {
		if (!canvasElement) return;
		
		const ctx = canvasElement.getContext('2d');
		if (!ctx) return;

		// Nettoie le canvas
		ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
		
		// Fond avec gradient
		const gradient = ctx.createLinearGradient(0, 0, canvasElement.width, canvasElement.height);
		gradient.addColorStop(0, '#f8f9fa');
		gradient.addColorStop(1, '#e9ecef');
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
		
		// Lignes de bruit
		ctx.strokeStyle = '#dee2e6';
		ctx.lineWidth = 1;
		for (let i = 0; i < 5; i++) {
			ctx.beginPath();
			ctx.moveTo(Math.random() * canvasElement.width, Math.random() * canvasElement.height);
			ctx.lineTo(Math.random() * canvasElement.width, Math.random() * canvasElement.height);
			ctx.stroke();
		}
		
		// Points de bruit
		ctx.fillStyle = '#adb5bd';
		for (let i = 0; i < 20; i++) {
			ctx.beginPath();
			ctx.arc(Math.random() * canvasElement.width, Math.random() * canvasElement.height, 1, 0, 2 * Math.PI);
			ctx.fill();
		}
		
		// Texte principal
		ctx.font = 'bold 28px Arial';
		ctx.fillStyle = '#495057';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		
		// Légère rotation et position aléatoire pour chaque caractère
		const characters = text.split('');
		const spacing = 30;
		const totalWidth = characters.length * spacing;
		let startX = (canvasElement.width - totalWidth) / 2 + spacing / 2;
		
		characters.forEach((char, index) => {
			ctx.save();
			const x = startX + (index * spacing);
			const y = canvasElement.height / 2 + (Math.random() - 0.5) * 8;
			const rotation = (Math.random() - 0.5) * 0.2;
			
			ctx.translate(x, y);
			ctx.rotate(rotation);
			ctx.fillText(char, 0, 0);
			ctx.restore();
		});
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
