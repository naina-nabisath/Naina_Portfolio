import { ArrowDown, Astroid, MoveUpRight } from "lucide-react"
import { FaNodeJs, FaReact } from "react-icons/fa"

function Home() {
  return (
    <div style={{ color: '#a1ccdc', width: '100%' }}>
      <div id="home"
        className="flex flex-col items-center justify-around gap-12 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-8 lg:px-12 ">
        <div className="flex w-full max-w-2xl flex-col gap-6 py-6 sm:gap-7 lg:w-1/2 lg:py-10">
          <h1 className="flex gap-3 text-blue-400 font-bold">
            HELLO, I'M NAINA
            <Astroid />
          </h1>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk']">
            Building ideas
            <br />
            into <span className="font-['Space_Grotesk'] text-blue-400">web</span>
            <br />
            <span className="font-['Space_Grotesk'] text-blue-400">experiences.</span>
          </h1>
          <h1 className="text-blue-300 font-bold text-3xl">
            MERN Stack Developer
          </h1>
          <p className="max-w-xl text-sm leading-7 text-blue-200 sm:text-base">
            I create modern, responsive and user-friendly web applications
            with clean code, thoughtful interfaces and real-world impact.
          </p>
          <div className="flex flex-wrap gap-3 text-blue-300">
            <div className="flex gap-1.5 items-center rounded-full border border-[#71b7d5]/30 px-4 py-2 text-sm">
              <FaReact />
              React
            </div>
            <div className="flex gap-1.5 items-center rounded-full border border-[#71b7d5]/30 px-4 py-2 text-sm">
              <FaNodeJs />
              Node.js
            </div>
            <div className="rounded-full border border-[#71b7d5]/30 px-4 py-2 text-sm">
              Express
            </div>
            <div className="rounded-full border border-[#71b7d5]/30 px-4 py-2 text-sm">
              MongoDB
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div onClick={() => { window.open("https://github.com/naina-nabisath?tab=repositories") }}
              className="flex gap-3 border-2 px-4 py-3 text-sm sm:px-6 sm:py-4 sm:text-base rounded-4xl text-white font-bold border-[#042b44] bg-[#042b44] cursor-pointer">
              Explore My Work
              <MoveUpRight />
            </div>
            <div onClick={() => window.location.href = "mailto:nainanabisath@gmail.com"}
              className="flex gap-3 border-2 border-[#042b44] px-4 py-3 text-sm sm:px-6 sm:py-4 sm:text-base rounded-4xl text-[#042b44] font-bold cursor-pointer">
              Contact me
              <MoveUpRight />
            </div>
          </div>
          <div className="flex gap-5">
            <div onClick={() => { window.open("https://github.com/naina-nabisath") }}
              className="flex gap-0 text-sm sm:gap-6 sm:text-base cursor-pointer">
              GitHub
              <MoveUpRight />
            </div>
            <div onClick={() => { window.open("https://www.linkedin.com/in/nainanabisaths/?isSelfProfile=true") }}
              className="flex flex-wrap gap-5 text-sm sm:gap-6 sm:text-base cursor-pointer">
              LinkedIn
              <MoveUpRight />
            </div>
            <div onClick={() => window.location.href = "mailto:nainanabisath@gmail.com"}
              className="flex flex-wrap gap-5 text-sm sm:gap-6 sm:text-base cursor-pointer">
              Email
              <MoveUpRight />
            </div>
          </div>
          <a href="#about">
            <div className="flex gap-3 cursor-pointer">
              <ArrowDown />
              SCROLL TO EXPLORE
            </div>
          </a>
        </div>
        <div className="relative flex aspect-square w-full max-w-[320px] shrink-0 items-center justify-center sm:max-w-100 lg:w-1/2 lg:max-w-120">
          <div className="absolute h-[88%] w-[78%] rotate-[-25deg] rounded-full border border-[#08171e]" />
          <div className="absolute h-[80%] w-[88%] rotate-25 rounded-full border border-[#042b44]" />
          <div className="absolute h-[80%] w-[78%] rotate-85 rounded-full border border-[#08171e]" />
          <div className="flex aspect-square w-[75%] items-center justify-center rounded-full border-2 border-[#042b44] bg-linear-to-b from-[#042b44] to-[#096b90] text-7xl font-bold font-['Space_Grotesk'] sm:text-8xl lg:text-9xl">
            N
          </div>
          <p className="absolute bottom-0 right-0 text-[10px] font-bold tracking-[0.2em] text-[#A1CCDC]/60 sm:text-xs">
            CODE · CREATE · GROW
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home