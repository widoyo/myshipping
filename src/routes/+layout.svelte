<script lang="ts">
  import 'uno.css'
</script>

<main class="container">
	<a href="/">Home</a> | 
	<a href="/about">About</a> | 
	<a href="/login">Login</a> |
	<a href="/shipping">Shipping</a>
	<slot />

</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
