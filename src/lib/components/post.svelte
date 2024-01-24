<script>
	export let url
	export let thumbnail
	export let title
</script>

<div class="flex flex-col items-start rounded-3xl overflow-hidden bg-neutral-800 pb-10">
	<div class="w-full flex flex-col p-5 bg-neutral-700 group">
		<img
			src={thumbnail}
			alt="thumbnail"
			class="max-h-80 self-center group-hover:scale-105 transition-transform"
		/>
	</div>
	<a href={url} class="text-5xl font-bold mt-2 ml-4 relative z-10">{title}</a>
</div>
