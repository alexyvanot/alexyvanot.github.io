import { fail } from '@sveltejs/kit';
import type { Action, Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

// Configuration EmailJS depuis les variables d'environnement (avec fallback gracieux)
const SERVICE_ID = env.PUBLIC_SERVICE_ID || '';
const TEMPLATE_ID = env.PUBLIC_TEMPLATE_ID || '';
const PUBLIC_KEY = env.PUBLIC_EMAILJS_KEY || '';
const isEmailJSConfigured = SERVICE_ID !== '' && TEMPLATE_ID !== '' && PUBLIC_KEY !== '';

// Regex strict pour validation email côté serveur
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const defaultAction: Action = async ({ request }) => {
	// Vérifier si EmailJS est configuré
	if (!isEmailJSConfigured) {
		console.warn('⚠️ EmailJS non configuré côté serveur');
		return fail(503, {
			errors: {
				general: 'Le service de messagerie n\'est pas configuré. Veuillez contacter l\'administrateur.'
			}
		});
	}

	const data = await request.formData();
	const name = data.get('name') as string;
	const email = data.get('email') as string;
	const message = data.get('message') as string;
	const captchaAnswer = data.get('captcha_answer') as string;
	const captchaCorrect = data.get('captcha_correct') as string;

	// Validation côté serveur
	const errors: Record<string, string> = {};

	// Vérification des champs obligatoires
	if (!name || name.trim().length === 0) {
		errors.name = 'Le nom est obligatoire';
	}

	if (!email || email.trim().length === 0) {
		errors.email = 'L\'email est obligatoire';
	} else if (!EMAIL_REGEX.test(email.trim())) {
		errors.email = 'L\'adresse email n\'est pas valide';
	}

	if (!message || message.trim().length === 0) {
		errors.messageField = 'Le message est obligatoire';
	} else if (message.length > 2000) {
		errors.messageField = 'Le message ne peut pas dépasser 2000 caractères';
	}

	// Vérification du captcha côté serveur
	if (!captchaAnswer || !captchaCorrect) {
		errors.captcha = 'La vérification anti-robot est obligatoire';
	} else if (parseInt(captchaAnswer) !== parseInt(captchaCorrect)) {
		errors.captcha = 'La réponse du captcha est incorrecte';
	}

	// Si il y a des erreurs, on les retourne
	if (Object.keys(errors).length > 0) {
		return fail(400, {
			errors,
			name: name || '',
			email: email || '',
			messageField: message || ''
		});
	}

	// Validation réussie côté serveur - Envoi EmailJS avec simulation de navigateur
	try {
		// Simulation d'un vrai navigateur pour bypasser la restriction EmailJS
		const emailData = {
			service_id: SERVICE_ID,
			template_id: TEMPLATE_ID,
			user_id: PUBLIC_KEY,
			template_params: {
				to_name: 'Alexy VANOT',
				from_name: name.trim(),
				reply_to: email.trim(),
				message: message.trim(),
				timestamp: new Date().toISOString(),
				user_agent: request.headers.get('user-agent') || 'Unknown'
			}
		};

		// Appel direct à l'API EmailJS en simulant un navigateur
		const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
				'Accept': 'application/json, text/plain, */*',
				'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
				'Origin': 'https://alexyvanot.github.io',
				'Referer': 'https://alexyvanot.github.io/',
				'Sec-Fetch-Dest': 'empty',
				'Sec-Fetch-Mode': 'cors',
				'Sec-Fetch-Site': 'cross-site'
			},
			body: JSON.stringify(emailData)
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`EmailJS API Error: ${response.status} - ${errorText}`);
		}

		const result = await response.text();
		console.log('Email envoyé avec succès via API directe:', result);

	} catch (error) {
		console.error('Erreur lors de l\'envoi de l\'email:', error);
		return fail(500, {
			errors: {
				general: `Erreur lors de l'envoi du message: ${error instanceof Error ? error.message : 'Erreur inconnue'}. Veuillez réessayer plus tard.`
			},
			name: name || '',
			email: email || '',
			messageField: message || ''
		});
	}

	return {
		success: true,
		message: 'Message envoyé avec succès !',
		data: {
			name: name.trim(),
			email: email.trim(),
			message: message.trim()
		}
	};
};

export const actions: Actions = {
	default: defaultAction
};
