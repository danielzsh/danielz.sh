<script>
	import Card from '$lib/components/card.svelte'
	import textbg from '$lib/images/textbg.png'
</script>

<h1
	class="text-[120px] bg-clip-text text-transparent bg-contain font-black inline-block font-interblack"
	style="background-image: url({textbg}); -webkit-text-stroke: 1px white;"
>
	Hi. I'm Daniel.
</h1>
<Card href="/blog" heading="~/blog" />
