export type ActionData = {
	success?: boolean;
	message?: string;
	data?: {
		name?: string;
		email?: string;
		message?: string;
	};
	errors?: {
		name?: string;
		email?: string;
		messageField?: string;
		captcha?: string;
		general?: string;
	};
	name?: string;
	email?: string;
	messageField?: string;
} | null;
