<script>
	export let href = ''
	export let heading = ''
	import cardbg from '$lib/images/cardbg.png'
</script>

<a
	{href}
	class="
    group h-72 max-w-lg rounded-lg px-5 py-4
  text-gray-400 text-4xl font-black
    flex justify-center items-center
    border border-[#434d90] transition-colors
  hover:border-neutral-700
    relative bg-cover
  "
	style="background-image: url({cardbg});"
>
	<span class="z-10">
		{`${heading} `}
		<span
			class="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
		>
			-&gt;
		</span>
	</span>
</a>
