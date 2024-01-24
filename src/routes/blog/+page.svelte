<script>
	export let data
	import Post from '$lib/components/post.svelte'
	import img from '$lib/thumbnail.svg'
</script>

<svelte:head>
	<title>~/blog</title>
</svelte:head>

<div class="grid grid-cols-2">
	<div class="col-span-1">
		<Post {...data.posts[0]} />
	</div>
	<div class="col-span-1"><p>text</p></div>
</div>
