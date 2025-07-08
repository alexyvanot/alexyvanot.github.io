<script lang="ts">
	import Title from '$lib/components/common/title/title.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import ContactData from '$lib/data/contact';
	import { toast, Toaster } from 'svelte-sonner';
	import emailjs from '@emailjs/browser';
	import { onMount } from 'svelte';
	import { PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, PUBLIC_EMAILJS_KEY } from '$env/static/public';

	// Configuration EmailJS depuis les variables d'environnement
	const SERVICE_ID = PUBLIC_SERVICE_ID;
	const TEMPLATE_ID = PUBLIC_TEMPLATE_ID;
	const PUBLIC_KEY = PUBLIC_EMAILJS_KEY;

	let name = '';
	let email = '';
	let message = '';
	let submitting = false;

	onMount(() => {
		emailjs.init(PUBLIC_KEY);
	});

	async function handleSubmit() {
		console.log('Form data:', { name, email, message });
		
		if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
			toast.error('Veuillez remplir tous les champs');
			return;
		}

		submitting = true;
		
		try {
			// Préparation des paramètres pour EmailJS
			const templateParams = {
				from_name: name,
				from_email: email,
				message: message,
				to_name: 'Alexy VANOT',
				to_email: ContactData.email,
				reply_to: email  // Ajout de l'adresse pour la réponse
			};

			// Envoi de l'email via EmailJS
			await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
			
			toast.success('Message envoyé avec succès!');
			name = '';
			email = '';
			message = '';
		} catch (error) {
			console.error('Erreur lors de l\'envoi de l\'email:', error);
			toast.error('Une erreur est survenue lors de l\'envoi du message.');
		} finally {
			submitting = false;
		}
	}
</script>

<Title title={ContactData.title} />

<ResponsiveContainer className="mt-10">
	<div class="flex flex-col gap-8 w-full max-w-2xl mx-auto">
		<Card>
			<CardHeader>
				<CardTitle>Contactez-moi</CardTitle>
				<CardDescription>{ContactData.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div class="space-y-2">
						<Label for="name">Nom</Label>
						<Input bind:value={name} id="name" placeholder="Votre nom" required />
					</div>
					<div class="space-y-2">
						<Label for="email">Email</Label>
						<Input 
							bind:value={email} 
							id="email" 
							type="email" 
							placeholder="Votre adresse email" 
							required 
						/>
					</div>
					<div class="space-y-2">
						<Label for="message">Message</Label>
						<Textarea 
							bind:value={message} 
							id="message" 
							placeholder="Votre message" 
							required 
						></Textarea>
					</div>
					<div class="mt-4">
						<p class="text-sm text-muted-foreground mb-4">Version temporaire sans reCAPTCHA pour test</p>
					</div>
					<Button type="submit" disabled={submitting}>
						{submitting ? 'Envoi en cours...' : 'Envoyer'}
					</Button>
				</form>
			</CardContent>
			<CardFooter class="flex-col items-start gap-2">
				<div class="text-sm text-muted-foreground">
					Vous pouvez également me contacter directement par email à <a href={`mailto:${ContactData.email}`} class="font-medium underline underline-offset-4">{ContactData.email}</a>
				</div>
			</CardFooter>
		</Card>
	</div>
</ResponsiveContainer>

<Toaster />
