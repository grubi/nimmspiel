<script>
	export let setup, number, max, computerBegins;
</script>

<div>
	<label>Anzahl Hölzchen: <input bind:value={number}></label><br>
	<label>Maximal nehmen: <input bind:value={max}></label>
		
	<p><label><input type="checkbox" bind:checked={computerBegins}> Computer beginnt</label></p>

	<p><button on:click={() => setup=false}>Spiel starten</button></p>
</div>