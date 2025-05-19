<script>
	import Matches from './Matches.svelte';
	export let setup, initialCount, takeMax, computerBegins;
	let count = initialCount;
	let playerTake = null;
	let computerTake = null;
	let interactive;
	let gameOver = false;
	let playerWins;
	let playersMove;
	const delayTime = 2000;

	// Timer
	let timerId = null;
	function cleanUpTimer() {
		if(timerId) {
			clearTimeout(timerId);
		}
	}
	import { onDestroy } from 'svelte';
	onDestroy(cleanUpTimer);
	
	// Initialize first move
	if(computerBegins) {
		playersMove = false;
		interactive = false;
		timerId = setTimeout(computerMove, delayTime);
	}
	else {
		playersMove = true;
		interactive = true;
		if(count==1) {
			interactive = false;
			playerTake = 0;
			gameOver = true;
			playerWins = false;
		}
	}

	function handleTake(event) {
		playerTake = event.detail.take;
		count -= playerTake;
		interactive = false;
		playersMove = false;
		timerId = setTimeout(computerMove, delayTime);
	}

	function computerMove() {
		if(count==1) {
			gameOver = true;
			playerWins = true;
		}
		else
		{
			let take = (count-1) % (takeMax+1);
			if(take===0) {
				take = Math.floor(Math.random()*takeMax)+1;
			}
			computerTake = take;
			timerId = setTimeout(finalizeComputerMove, delayTime);
		}
	}

	function finalizeComputerMove() {
		count -= computerTake;
		if(count===1) {
			gameOver = true;
			playerWins = false;
		}
		else {
			computerTake = null;
			playerTake = null;
			interactive = true;
			playersMove = true;
		}
	}
</script>

<p>
	<button on:click={() => setup=true}>Neues Spiel</button>
</p>
<p>
	Es {count==1 ? 'ist' : 'sind'} {count} Hölzchen da.<br>
	Du musst mindestens eins nehmen, aber höchstens {takeMax}.<br>
	Wer das letzte nehmen muss, verliert.
</p>
<p>
	<Matches on:take={handleTake} {count} {takeMax} bind:interactive displayTake={gameOver ? null: computerTake} />
</p>
{#if playerTake!=null}
	{#if playerTake!=0}
		<div style="color: blue">
		<strong>Du nimmst {playerTake}.</strong>
		</div>
	{/if}
{/if}
{#if gameOver && playerWins}
	<div style="color: green">
	<h1>Du hast gewonnen!</h1>
	</div>
{/if}
{#if computerTake}
	<div style="color: red"><strong>Ich nehme {computerTake}.</strong></div>
{/if}
{#if !computerTake && !playersMove && !gameOver}
	<div style="color: red"><strong>Ich denke nach...</strong></div>
{/if}
{#if gameOver && !playerWins}
	<div style="color: red"><h1>Du hast verloren!</h1></div>
{/if}
{#if playersMove && !playerTake && interactive}
	<p>
		Klicke auf das Hölzchen, das du nehmen willst.<br>
		Alle rechts davon werden ebenfalls genommen.
	</p>
{/if}
