import { fail } from '@sveltejs/kit';
import type { Action, Actions } from '@sveltejs/kit';

// Regex strict pour validation email côté serveur
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const defaultAction: Action = async ({ request }) => {
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

	// Validation réussie côté serveur
	// L'envoi d'email se fait côté client via EmailJS
	
	return {
		success: true,
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
