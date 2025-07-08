declare module '@beyowi/svelte-recaptcha-v2' {
  import { SvelteComponentTyped } from 'svelte';

  export class Recaptcha extends SvelteComponentTyped<{
    sitekey: string;
    theme?: 'light' | 'dark';
    size?: 'normal' | 'compact' | 'invisible';
  }, {
    ready: CustomEvent<void>;
    success: CustomEvent<{ token: string }>;
    error: CustomEvent<Error>;
    expired: CustomEvent<void>;
  }> {}

  export const recaptcha: {
    execute: () => void;
    reset: () => void;
  };

  export const observer: Promise<CustomEvent<{ token: string }>>;
}
