import cardbg from '@images/cardbg.png'
export default function Card({ title, href, bg }) {
  return (
    <a
      href={href}
      className="
        group h-72 max-w-lg rounded-lg px-5 py-4
      text-gray-400 text-4xl font-black
        flex justify-center items-center
        border border-[#434d90] transition-colors
      hover:border-neutral-700
        relative bg-cover
      "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <span className="z-10">
        {`${title} `}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </span>
    </a>
  )
}
