<script>
	export let color;
	export let stickWidth;
	export let stickHeight;
</script>

<span
	on:mouseenter
	on:click
	style="width:{stickWidth}px; height:{stickHeight}px; background-color: {color}"
	role="presentation"
></span>

<style>
	span {
		display: inline-block;
	}
</style>