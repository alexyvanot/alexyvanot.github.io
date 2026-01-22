<script lang="ts">
	export let className: string = '';
</script>

<div class={`animated-background ${className}`}>
	<div class="gradient-blob blob-1"></div>
	<div class="gradient-blob blob-2"></div>
	<div class="gradient-blob blob-3"></div>
	<div class="gradient-blob blob-4"></div>
	<div class="gradient-blob blob-5"></div>
	<div class="overlay"></div>
</div>

<style>
	.animated-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		overflow: hidden;
		background: linear-gradient(45deg, 
			hsl(var(--background)) 0%, 
			hsl(var(--background)) 100%
		);
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		z-index: 1;
	}

	.gradient-blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(40px);
		opacity: 0.5;
		animation-duration: 8s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}

	.blob-1 {
		width: 300px;
		height: 300px;
		background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
		top: 10%;
		left: 10%;
		animation-name: breathe-1;
		animation-delay: 0s;
	}

	.blob-2 {
		width: 400px;
		height: 400px;
		background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
		top: 60%;
		right: 10%;
		animation-name: breathe-2;
		animation-delay: 2s;
	}

	.blob-3 {
		width: 250px;
		height: 250px;
		background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
		bottom: 20%;
		left: 20%;
		animation-name: breathe-3;
		animation-delay: 4s;
	}

	.blob-4 {
		width: 350px;
		height: 350px;
		background: linear-gradient(45deg, #43e97b 0%, #38f9d7 100%);
		top: 30%;
		right: 30%;
		animation-name: breathe-4;
		animation-delay: 1s;
	}

	.blob-5 {
		width: 200px;
		height: 200px;
		background: linear-gradient(45deg, #fa709a 0%, #fee140 100%);
		top: 70%;
		left: 50%;
		animation-name: breathe-5;
		animation-delay: 3s;
	}

	@keyframes breathe-1 {
		0%, 100% {
			transform: translate(0, 0) scale(1);
			opacity: 0.4;
		}
		50% {
			transform: translate(50px, -30px) scale(1.2);
			opacity: 0.6;
		}
	}

	@keyframes breathe-2 {
		0%, 100% {
			transform: translate(0, 0) scale(1);
			opacity: 0.3;
		}
		50% {
			transform: translate(-40px, 40px) scale(1.3);
			opacity: 0.5;
		}
	}

	@keyframes breathe-3 {
		0%, 100% {
			transform: translate(0, 0) scale(1);
			opacity: 0.4;
		}
		50% {
			transform: translate(30px, -50px) scale(1.1);
			opacity: 0.6;
		}
	}

	@keyframes breathe-4 {
		0%, 100% {
			transform: translate(0, 0) scale(1);
			opacity: 0.3;
		}
		50% {
			transform: translate(-50px, -20px) scale(1.4);
			opacity: 0.5;
		}
	}

	@keyframes breathe-5 {
		0%, 100% {
			transform: translate(0, 0) scale(1);
			opacity: 0.3;
		}
		50% {
			transform: translate(20px, 30px) scale(1.2);
			opacity: 0.5;
		}
	}

	/* Mode sombre */
	:global(.dark) .overlay {
		background: rgba(0, 0, 0, 0.3);
	}

	:global(.dark) .gradient-blob {
		opacity: 0.4;
		filter: blur(50px);
	}

	:global(.dark) .blob-1 {
		background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
	}

	:global(.dark) .blob-2 {
		background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
	}

	:global(.dark) .blob-3 {
		background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
	}

	:global(.dark) .blob-4 {
		background: linear-gradient(45deg, #43e97b 0%, #38f9d7 100%);
	}

	:global(.dark) .blob-5 {
		background: linear-gradient(45deg, #fa709a 0%, #fee140 100%);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.gradient-blob {
			filter: blur(30px);
		}
		
		.blob-1, .blob-2, .blob-3, .blob-4, .blob-5 {
			width: 200px;
			height: 200px;
		}
	}
</style>
