<script>
	import { createEventDispatcher } from 'svelte';
	import Stick from './Stick.svelte';
	export let count, takeMax;
	export let interactive;
	export let displayTake;
	
	const stickWidth = 8;
	const stickHeight = 40;
	const stickSpacing = 6;
	const stickColor = 'green';
	const stickSelectedColor = 'blue';
	const stickDisplayTakeColor = 'red';

	const dispatch = createEventDispatcher();
	
	let firstMarked = 9999;

	$: {
		if(displayTake) {
			firstMarked = count-displayTake+1;
		}
		else {
			firstMarked = 9999;
		}
	}
	
	function range(n) {
		return Array.from({ length: n }, (_, i) => i+1);
	}

	function mouseOnStick(n) {
		if(!interactive) return;
		if(n>count-takeMax && n>1) {
			firstMarked = n;
		}
	}

	function stickClicked(n) {
		if(!interactive) return;
		if(n>count-takeMax && n>1) {
			let take = count-n+1;
			count -= take;
			dispatch('take', { take: take})
		}
	}
</script>

{#each range(count) as n}
	<Stick
		{stickWidth} {stickHeight}
		on:mouseenter={() => mouseOnStick(n)}
		on:click={() => stickClicked(n)}
		color={n>=firstMarked ? (displayTake ? stickDisplayTakeColor : stickSelectedColor) : stickColor} 
	/><!--
	--><span style="display:inline-block; width: {stickSpacing}px;"></span>
{/each}