<script lang="ts">
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Captcha } from '$lib/components/ui/captcha';
	import ContactData from '$lib/data/contact';
	import { toast, Toaster } from 'svelte-sonner';
	import emailjs from '@emailjs/browser';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { browser } from '$app/environment';
	import { PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, PUBLIC_EMAILJS_KEY } from '$env/static/public';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { Check, X, Asterisk } from 'lucide-svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';

	// Propriétés pour les données de l'action serveur
	export let form: ActionData;

	// Configuration EmailJS depuis les variables d'environnement
	const SERVICE_ID = PUBLIC_SERVICE_ID;
	const TEMPLATE_ID = PUBLIC_TEMPLATE_ID;
	const PUBLIC_KEY = PUBLIC_EMAILJS_KEY;

	let name = '';
	let email = '';
	let message = '';
	let submitting = false;
	let captchaVerified = false;
	let captchaComponent: any; // Référence au composant captcha
	let correctAnswer = 0; // Pour stocker la réponse correcte du captcha

	// Limite de caractères pour le message
	const MESSAGE_MAX_LENGTH = 2000;

	// Variables pour la validation en temps réel
	let emailError = '';
	let nameError = '';
	let messageError = '';
	let emailTouched = false; // Pour savoir si l'utilisateur a quitté le champ email
	let messageTouched = false; // Pour savoir si l'utilisateur a quitté le champ message
	let nameTouched = false; // Pour savoir si l'utilisateur a quitté le champ nom
	let captchaUnlocked = false; // Une fois débloqué, le captcha reste visible
	let formHovered = false; // Pour détecter si l'utilisateur survole le formulaire
	let messageSent = false; // Pour afficher l'état de confirmation après envoi
	let emailSentThisSession = false; // Pour éviter les renvois lors du rechargement
	let lastProcessedFormId: ActionData = null; // Pour éviter les exécutions multiples du même résultat

	// Regex pour validation email côté client
	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	// Fonction pour valider l'email quand on quitte le champ
	function handleEmailBlur() {
		emailTouched = true;
		// La validation reactive se déclenchera automatiquement
	}

	// Fonction pour valider le nom quand on quitte le champ
	function handleNameBlur() {
		nameTouched = true;
	}

	// Fonction pour valider le message quand on quitte le champ
	function handleMessageBlur() {
		messageTouched = true;
	}

	// Fonction pour gérer le survol du formulaire
	function handleFormMouseEnter() {
		formHovered = true;
	}

	// Validation en temps réel de l'email : seulement après le premier blur
	$: {
		if (emailTouched) {
			if (email.trim() === '') {
				emailError = '';
			} else if (!emailRegex.test(email.trim())) {
				emailError = 'Adresse email non valide';
			} else {
				emailError = '';
			}
		} else {
			emailError = '';
		}
	}

	// État de validation de l'email pour les icônes
	$: emailIsValid = emailTouched && email.trim() !== '' && emailRegex.test(email.trim());
	$: emailIsInvalid = emailTouched && email.trim() !== '' && !emailRegex.test(email.trim());

	// Validation en temps réel du nom
	$: {
		if (name.trim() === '') {
			nameError = '';
		} else if (name.trim().length < 2) {
			nameError = 'Le nom doit contenir au moins 2 caractères';
		} else {
			nameError = '';
		}
	}

	// Validation en temps réel du message
	$: {
		if (message.trim() === '') {
			messageError = '';
		} else if (message.trim().length < 10) {
			messageError = 'Le message doit contenir au moins 10 caractères';
		} else if (message.length > MESSAGE_MAX_LENGTH) {
			messageError = `Le message ne peut pas dépasser ${MESSAGE_MAX_LENGTH} caractères`;
		} else {
			messageError = '';
		}
	}

	// Compteur de caractères pour le message
	$: messageCharCount = message.length;
	$: messageCharCountColor = messageCharCount > MESSAGE_MAX_LENGTH ? 'text-red-500' : 
	                          messageCharCount > MESSAGE_MAX_LENGTH * 0.9 ? 'text-orange-500' : 
	                          'text-gray-500';

	// Vérification si les champs principaux sont correctement remplis
	$: allFieldsValid = name.trim() !== '' && 
	                   name.trim().length >= 2 && 
	                   email.trim() !== '' && 
	                   emailRegex.test(email.trim()) && 
	                   message.trim() !== '' && 
	                   message.trim().length >= 10 && 
	                   message.length <= MESSAGE_MAX_LENGTH;

	// Condition pour afficher le captcha
	$: shouldShowCaptcha = allFieldsValid && (
		(emailTouched && messageTouched && nameTouched) || 
		formHovered
	);

	// Condition finale pour afficher le captcha
	$: showCaptcha = captchaUnlocked || shouldShowCaptcha;

	// Déverrouiller définitivement le captcha quand les conditions sont remplies
	$: if (shouldShowCaptcha && !captchaUnlocked) {
		captchaUnlocked = true;
	}
	// Vérifier si le formulaire est valide
	$: isFormValid = allFieldsValid && captchaVerified;

	onMount(() => {
		emailjs.init(PUBLIC_KEY);
		
		// Vérifier si un message a déjà été envoyé récemment (optimisé)
		if (browser) {
			try {
				const lastSentTime = localStorage.getItem('contactFormLastSent');
				if (lastSentTime) {
					const timeSinceLastSend = Date.now() - parseInt(lastSentTime);
					// Si moins de 5 minutes (300000 ms), afficher le message de confirmation
					if (timeSinceLastSend < 300000) {
						messageSent = true;
						emailSentThisSession = true;
					}
				}
			} catch (error) {
				// Ignore les erreurs localStorage (mode privé, etc.)
			}
		}
	});

	function handleCaptchaVerification(isValid: boolean) {
		captchaVerified = isValid;
		if (isValid && captchaComponent) {
			// Récupérer la réponse correcte du captcha
			correctAnswer = captchaComponent.getCorrectAnswer();
		}
		// Forcer la mise à jour de la réactivité
		captchaVerified = captchaVerified;
	}

	// Fonction pour envoyer l'email via EmailJS côté client
	async function sendEmailViaEmailJS(nameValue?: string, emailValue?: string, messageValue?: string) {
		try {
			// Utiliser les valeurs passées en paramètre ou les valeurs actuelles
			const finalName = nameValue || name;
			const finalEmail = emailValue || email;
			const finalMessage = messageValue || message;
			
			// Vérification de sécurité : ne jamais envoyer un email vide
			if (!finalName?.trim() || !finalEmail?.trim() || !finalMessage?.trim()) {
				return false;
			}
			
			const templateParams = {
				to_name: 'Alexy VANOT',
				from_name: finalName.trim(),
				reply_to: finalEmail.trim(),
				message: finalMessage.trim()
			};

			await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
			
			// Marquer l'envoi dans le localStorage pour éviter les renvois
			if (browser) {
				try {
					localStorage.setItem('contactFormLastSent', Date.now().toString());
				} catch (error) {
					// Ignore les erreurs localStorage
				}
			}
			
			return true;
		} catch (error) {
			return false;
		}
	}

	// Fonction pour gérer le succès de l'action serveur
	async function handleFormSuccess() {
		if (!emailSentThisSession) {
			// Récupérer les valeurs depuis les données du serveur si disponibles, 
			// sinon utiliser les valeurs actuelles du formulaire
			const nameToSend = form?.data?.name || name;
			const emailToSend = form?.data?.email || email;
			const messageToSend = form?.data?.message || message;
			
			// Vérification finale avant envoi
			if (nameToSend?.trim() && emailToSend?.trim() && messageToSend?.trim()) {
				// Marquer comme envoyé pour éviter les renvois
				emailSentThisSession = true;
				
				// Envoyer l'email côté client avec les valeurs sauvegardées
				const emailSent = await sendEmailViaEmailJS(nameToSend, emailToSend, messageToSend);
				
				if (emailSent) {
					// Réinitialiser le formulaire SEULEMENT après envoi réussi
					name = '';
					email = '';
					message = '';
					emailError = '';
					nameError = '';
					messageError = '';
					emailTouched = false;
					nameTouched = false;
					messageTouched = false;
					captchaVerified = false;
					captchaUnlocked = false;
					formHovered = false;
					captchaComponent?.generateNewCaptcha();
					
					messageSent = true; // Afficher l'état de confirmation
					toast.success('Message envoyé avec succès!');
				} else {
					toast.error('Message validé mais erreur lors de l\'envoi. Veuillez réessayer.');
					emailSentThisSession = false; // Permettre une nouvelle tentative en cas d'erreur
				}
			} else {
				toast.error('Erreur : données du formulaire vides');
			}
		}
	}

	// Réagir aux résultats de l'action serveur avec protection contre les exécutions multiples
	$: if (form?.success && form !== lastProcessedFormId) {
		lastProcessedFormId = form;
		handleFormSuccess();
	}

	$: if (form?.errors) {
		if (form.errors.general) {
			toast.error(form.errors.general);
		} else {
			const errorMessages = Object.values(form.errors).join(', ');
			toast.error(errorMessages);
		}
	}
</script>

<TitledPage title={ContactData.title}>
	<div class="flex flex-col items-center justify-start w-full max-w-2xl mx-auto pt-4 pb-8">
		<Card class="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
			<CardHeader>
				<CardTitle>Contactez-moi</CardTitle>
				<CardDescription>{ContactData.description}</CardDescription>
			</CardHeader>
			<CardContent>
				{#if messageSent}
					<!-- État de confirmation après envoi -->
					<div class="flex flex-col items-center justify-center py-12 text-center space-y-6">
						<div class="relative">
							<Icon icon="i-carbon-send-alt" className="w-24 h-24 text-green-500 animate-pulse" />
						</div>
						<div class="space-y-2">
							<h3 class="text-xl font-semibold text-green-600 dark:text-green-400">
								Message envoyé avec succès !
							</h3>
							<p class="text-muted-foreground max-w-md">
								Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais à l'adresse email que vous avez fournie.
							</p>
							<p class="text-xs text-muted-foreground mt-4">
								Vous pouvez fermer cette page ou naviguer ailleurs.
							</p>
						</div>
						<div class="text-sm text-muted-foreground">
							Merci de votre intérêt !
						</div>
					</div>
				{:else}
					<!-- Formulaire de contact -->
				<form 
					method="POST" 
					on:mouseenter={handleFormMouseEnter}
					use:enhance={({ formElement, formData, action, cancel, submitter }) => {
						// Validation côté client avant envoi
						if (name.trim() === '') {
							toast.error('Veuillez entrer votre nom');
							cancel();
							return;
						}

						if (email.trim() === '') {
							toast.error('Veuillez entrer votre adresse email');
							cancel();
							return;
						}

						if (!emailRegex.test(email.trim())) {
							toast.error('Veuillez entrer une adresse email valide');
							cancel();
							return;
						}

						if (message.trim() === '') {
							toast.error('Veuillez entrer votre message');
							cancel();
							return;
						}

						if (message.length > MESSAGE_MAX_LENGTH) {
							toast.error(`Le message ne peut pas dépasser ${MESSAGE_MAX_LENGTH} caractères`);
							cancel();
							return;
						}

						if (!captchaVerified) {
							toast.error('Veuillez compléter la vérification anti-robot');
							cancel();
							return;
						}

						// Ajouter la réponse correcte du captcha au FormData
						formData.set('captcha_correct', correctAnswer.toString());
						
						submitting = true;
						
						return async ({ result, update }) => {
							submitting = false;
							await update();
						};
					}}
					class="space-y-6"
				>
					<input type="hidden" name="captcha_answer" value={captchaComponent?.getUserInput() || ''} />
					<div class="space-y-2">
						<Label for="name" class="flex items-center gap-1">
							Nom
							<Asterisk class="w-3 h-3 text-orange-500" />
						</Label>
						<Input 
							bind:value={name} 
							name="name" 
							id="name" 
							placeholder="Votre nom" 
							required 
							class={nameError ? 'border-red-500' : ''}
							on:blur={handleNameBlur}
						/>
						{#if nameError}
							<p class="text-sm text-red-500">{nameError}</p>
						{/if}
						{#if form?.errors?.name}
							<p class="text-sm text-red-500">{form.errors.name}</p>
						{/if}
					</div>
					<div class="space-y-2">
						<Label for="email" class="flex items-center gap-1">
							Email
							<Asterisk class="w-3 h-3 text-orange-500" />
						</Label>
						<div class="relative">
							<Input 
								bind:value={email} 
								name="email"
								id="email" 
								type="email" 
								placeholder="Votre adresse email" 
								required 
								class={`pr-10 ${emailError ? 'border-red-500' : emailIsValid ? 'border-green-500' : ''}`}
								on:blur={handleEmailBlur}
							/>
							{#if emailIsValid}
								<div class="absolute right-3 top-1/2 transform -translate-y-1/2">
									<Check class="h-5 w-5 text-green-500" />
								</div>
							{:else if emailIsInvalid}
								<div class="absolute right-3 top-1/2 transform -translate-y-1/2">
									<X class="h-5 w-5 text-red-500" />
								</div>
							{/if}
						</div>
						{#if emailError}
							<p class="text-sm text-red-500">{emailError}</p>
						{/if}
						{#if form?.errors?.email}
							<p class="text-sm text-red-500">{form.errors.email}</p>
						{/if}
					</div>
					<div class="space-y-2">
						<Label for="message" class="flex items-center gap-1">
							Message
							<Asterisk class="w-3 h-3 text-orange-500" />
						</Label>
						<div class="relative">
							<Textarea 
								bind:value={message} 
								name="message"
								id="message" 
								placeholder="Votre message" 
								required 
								maxlength={MESSAGE_MAX_LENGTH}
								class={messageError ? 'border-red-500' : ''}
								on:blur={handleMessageBlur}
							></Textarea>
							<div class="absolute bottom-2 right-2 text-xs {messageCharCountColor}">
								{messageCharCount}/{MESSAGE_MAX_LENGTH}
							</div>
						</div>
						{#if messageError}
							<p class="text-sm text-red-500">{messageError}</p>
						{/if}
						{#if form?.errors?.messageField}
							<p class="text-sm text-red-500">{form.errors.messageField}</p>
						{/if}
					</div>
					
					{#if showCaptcha}
						<div transition:slide={{ duration: 400, easing: quintOut }}>
							<!-- Séparateur discret -->
							<div class="border-t border-gray-200 dark:border-gray-700 mb-6"></div>
							
							<Captcha bind:this={captchaComponent} onverified={handleCaptchaVerification} />
							{#if form?.errors?.captcha}
								<p class="text-sm text-red-500 mt-2">{form.errors.captcha}</p>
							{/if}
							
							<!-- Séparateur discret -->
							<div class="border-t border-gray-200 dark:border-gray-700 mt-6"></div>
						</div>
					{/if}
					
					<Button type="submit" disabled={submitting || !isFormValid} class="flex items-center gap-2">
						<Icon icon="i-carbon-send-alt" className="w-4 h-4" />
						{submitting ? 'Envoi en cours...' : 'Envoyer'}
					</Button>
				</form>
				{/if}
			</CardContent>
			<CardFooter class="flex-col items-start gap-2">
				<div class="text-sm text-muted-foreground">
					Vous pouvez également me contacter directement par email à <a href={`mailto:${ContactData.email}`} class="font-medium underline underline-offset-4">{ContactData.email}</a>
				</div>
			</CardFooter>
		</Card>
	</div>
</TitledPage>

<Toaster />
