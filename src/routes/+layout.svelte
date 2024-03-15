<script>
	import "../app.css";
  import Header from "./Header.svelte";
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
