<script>
	import logo from '$lib/images/pfp.png'
	import { page } from '$app/stores'
</script>

<div class="w-full h-auto text-7xl pt-12 pl-12 flex align-middle">
	<a href="/">
		<img src={logo} alt="logo" class="rounded-full h-[4.5rem] w-auto" />
	</a>
	<p class="text-gray-600 font-medium">/</p>
	<p class="text-white font-extralight">{$page.route.id?.slice(1) || '~'}</p>
</div>
