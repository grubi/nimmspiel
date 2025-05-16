<script>
	import Setup from './lib/Setup.svelte';
	import Game from './lib/Game.svelte';
	let setup = true;
	let takeMax = 10;
	let initialCount = 50;
	let computerBegins = false;
</script>

<h1>Nimmspiel</h1>
<p><i>Written in Svelte in 2025 by Thomas Gruber</i></p>

{#if setup}
	<Setup bind:setup={setup} bind:number={initialCount} bind:max={takeMax} bind:computerBegins={computerBegins} />
{:else}
	<Game bind:setup={setup} {initialCount} {takeMax} {computerBegins} />
{/if}
