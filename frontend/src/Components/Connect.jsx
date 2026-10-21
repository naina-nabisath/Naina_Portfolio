import { Mail, MoveUpRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Connect() {
  return (
    <div id="connect" style={{ color: '#a1ccdc' }}
      className="px-35 flex flex-col justify-center pt-30">
      <div className="border-2 border-[#094d78] rounded-2xl p-5 bg-linear-to-tr from-[#042b44] to-[#096b90]">
        <h1 className="text-blue-400 p-2">
        06 / LET'S CONNECT
      </h1>
      <div className="grid grid-cols-3 justify-between items-center pb-20">
        <div className="p-5 col-span-2">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk']">
            Have a project or opportunity in {' '}
            <span className="text-blue-400">
              mind?.
            </span>
          </h1>
          <h1 className="py-4">
            I'm open to junior developer roles, internships and oppurtunitiesto learnwith a great team. Lets talk.
          </h1>
          <button onClick={()=>{window.location.href="mailto:nainanabisath@gmail.com"}}
                  className="flex items-center gap-1.5 border border-[#096b90]/2 p-2 bg-[#096b90] rounded-2xl text-2xl text-white my-5">
            Send me an email 
            <MoveUpRight fill="white"/>
          </button>
        </div>
        <div className="col-span-1 ">
            <div className="">
                <div className="flex items-center justify-between my-5 border p-2 rounded-2xl border-[#096b90] cursor-pointer">
                    <div onClick={()=>{window.location.href="mailto:nainanabisath@gmail.com"}}
                         className="flex gap-2">
                        <div className="border-2 w-fit p-3 rounded-2xl border-[#094d78] bg-[#096b90]/30">
                            <Mail />
                        </div>
                        <div>
                            <h1>
                                EMAIL
                            </h1>
                            <h1 className="text-white">
                                nainanabisath@gmail.com
                            </h1>
                        </div>
                    </div>
                    <div>
                        <MoveUpRight />
                    </div>
                </div>
                <div onClick={()=>{window.open("https://www.linkedin.com/in/nainanabisaths/?isSelfProfile=true")}}
                     className="flex items-center justify-between my-5 border p-2 rounded-2xl border-[#096b90] cursor-pointer">
                    <div className="flex gap-2">
                        <div className="border-2 w-fit p-3 rounded-2xl border-[#094d78] bg-[#096b90]/30">
                            <FaLinkedin size={25}/>
                        </div>
                        <div>
                            <h1>
                                LinkedIn
                            </h1>
                            <h1 className="text-white">
                                Let's connect proffessionaly
                            </h1>
                        </div>
                    </div>
                    <div>
                        <MoveUpRight />
                    </div>
                </div>
                <div onClick={()=>{window.open("https://github.com/naina-nabisath")}}
                     className="flex items-center justify-between my-5 border p-2 rounded-2xl border-[#096b90] cursor-pointer">
                    <div className="flex gap-2">
                        <div className="border-2 w-fit p-3 rounded-2xl border-[#094d78] bg-[#096b90]/30">
                            <FaGithub size={25}/>
                        </div>
                        <div>
                            <h1>
                                GITHUB
                            </h1>
                            <h1 className="text-white">
                                Explore my code
                            </h1>
                        </div>
                    </div>
                    <div>
                        <MoveUpRight />
                    </div>
                </div>
                <div onClick={()=>{window.open("https://naina-nabisath.github.io/Portfolio/")}}
                     className="flex items-center justify-between my-5 border p-2 rounded-2xl border-[#096b90] cursor-pointer">
                    <div className="flex gap-2">
                        <div className="border-2 w-fit p-3 rounded-2xl border-[#094d78] bg-[#096b90]/30">
                            <MoveUpRight />
                        </div>
                        <div>
                            <h1>
                                PORTFOLIO
                            </h1>
                            <h1 className="text-white">
                                Previous portfolio
                            </h1>
                        </div>
                    </div>
                    <div>
                        <MoveUpRight />
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>

      <div className=" grid grid-cols-2 gap-3">

      </div>
    </div>
  )
}

export default Connect