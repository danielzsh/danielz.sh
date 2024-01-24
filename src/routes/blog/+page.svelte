<script>
	export let data
	import Post from '$lib/components/post.svelte'
</script>

<svelte:head>
	<title>~/blog</title>
</svelte:head>

<div class="grid grid-cols-2 gap-10">
	<div class="col-span-1">
		<Post {...data.posts[0]} />
	</div>
	<div class="col-span-1"><p>No older posts!</p></div>
</div>
