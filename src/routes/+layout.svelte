<script>
	import "../app.css";
  import Header from "./Header.svelte";
</script>

<div class="app">
	<Header />
	<main class="bg-white text-black dark:bg-dark-base dark:text-white transition-colors duration-300 ease-linear">
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
