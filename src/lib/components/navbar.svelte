<script>
	import logo from '$lib/images/pfp.png'
	import { page } from '$app/stores'
	const links = $page.url.pathname
		.split('/')
		.slice(1)
		.reduce((res, link) => {
			res.push(res.length ? [link, res.at(-1)[0] + '/' + link] : [link || '~', `/${link}`])
			return res
		}, [])
	console.log(links)
</script>

<div class="w-full h-auto text-7xl flex align-middle">
	<a href="/">
		<img src={logo} alt="logo" class="rounded-full h-[4.5rem] w-auto" />
	</a>
	<p class="text-gray-600 font-medium">/</p>
	<div class="font-extralight text-white">
		{#each links as [link, href]}
			<a {href} class="heading">{link}</a>
		{/each}
	</div>
</div>
