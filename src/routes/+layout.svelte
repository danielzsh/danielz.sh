<script>
	import Navbar from '$lib/components/navbar.svelte'
	import '../app.css'
</script>

<div class="pt-6 pl-6">
	<Navbar />
	<main class="px-5 md:px-12 pb-24 pt-5"><slot /></main>
</div>
