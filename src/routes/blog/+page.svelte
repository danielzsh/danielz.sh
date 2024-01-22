<script>
	export let data
</script>

{#each data.posts as post}
	<p>{post.url}</p>
	<svelte:component this={post.content} />
{/each}
