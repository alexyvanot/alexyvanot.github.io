<script lang="ts">
	const {
		src,
		alt = 'Profile Photo',
		class: className = '',
		size = 'large'
	}: {
		src: string;
		alt?: string;
		class?: string;
		size?: 'small' | 'medium' | 'large' | 'xlarge';
	} = $props();

	const sizeClasses = {
		small: 'w-24 h-24',
		medium: 'w-32 h-32',
		large: 'w-48 h-48',
		xlarge: 'w-64 h-64'
	};
</script>

<div 
	class={`relative overflow-hidden rounded-full ring-4 ring-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${sizeClasses[size]} ${className}`}
>
	<!-- Photo de profil -->
	<img 
		{src}
		{alt}
		class="w-full h-full object-cover object-center scale-[1.15]"
		loading="lazy"
	/>
	
	<!-- Overlay au hover -->
	<div 
		class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
	></div>
	
	<!-- Animation de border au hover -->
	<div 
		class="absolute inset-0 rounded-full ring-2 ring-primary/50 scale-110 opacity-0 hover:opacity-100 hover:scale-100 transition-all duration-500"
	></div>
</div>

<style>
	/* Animation subtile de pulse */
	@keyframes gentle-pulse {
		0%, 100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.02);
		}
	}
	
	div:hover {
		animation: gentle-pulse 2s infinite;
	}
</style>
