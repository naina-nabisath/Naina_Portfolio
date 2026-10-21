import { ArrowUp } from "lucide-react"

function Footer() {


  return (
    <nav className='relative z-50 w-full border-b-2 border-[#08171e]'
      style={{ backgroundColor: '#042b44', color: '#a1ccdc' }}>
      <div className="mx-auto flex max-w-7xl justify-around items-center py-5 sm:px-6 lg:px-8">
        <div className='flex min-w-0 items-center gap-3'>
          <div className="flex gap-3">
            <h1 className="font-bold text-4xl text-blue-400">
              NN
            </h1>
            <div>
              <div className="text-white font-bold">
                Naina Nabisath S
              </div>
              <div>
                MERN Stack Developer
              </div>
            </div>
          </div>
        </div>
        <div>
          Designed with purpose. Built with curiosity.
        </div>
        <a href={`#home`}>
          <button className='hidden items-center gap-2 rounded-full border border-blue-400 px-4 py-2 text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-white lg:flex'>
            <span>
              <ArrowUp />
            </span>
          </button>
        </a>
      </div>
      <div className="border-t border-white/10 px-4 pb-5 pt-3 lg:hidden sm:px-6">
        <ul className="flex flex-col gap-1">
          <li>
            <button className="w-full rounded-lg px-3 py-3 text-left transition-colors duration-200 hover:bg-white/10 hover:text-blue-400">
            </button>
          </li>
        </ul>

        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-blue-400 px-4 py-3 text-blue-400 transition hover:bg-blue-400 hover:text-white">
          <ArrowUp />
        </button>
      </div>
    </nav>
  )
}

export default Footer