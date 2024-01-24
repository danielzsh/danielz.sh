<script>
	import logo from '$lib/images/pfp.png'
	import { page } from '$app/stores'
	$: links = $page.url.pathname
		.split('/')
		.slice(1)
		.reduce((res, link) => {
			res.push(res.length ? [link, res.at(-1)[0] + '/' + link] : [link || '~', `/${link}`])
			return res
		}, [])
</script>

<div class="w-full h-auto text-7xl flex align-middle">
	<a href="/">
		<img src={logo} alt="logo" class="rounded-full h-[4.5rem] w-auto" />
	</a>
	<div class="flex">
		{#each links as [link, href]}
			<p class="text-gray-600 font-light">/</p>
			<a {href} class="font-extralight flex heading">{link}</a>
		{/each}
	</div>
</div>
