import { BrainCircuit, Hand, LocationEdit, Mail, MoveUpRightIcon, UserRoundGroup } from "lucide-react"
import { FaGithub, FaLinkedin,  } from "react-icons/fa";


function About() {
    return (
        <div id="about"
        style={{ color: '#a1ccdc', width: '100%' }}
            className="px-35  flex flex-col justify-center pt-30">
            <h1 className="text-blue-400 p-3">
                01 / A LITTLE ABOUT ME
            </h1>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk']">
                Curious mind. {' '}
                <span className="text-blue-400">
                    Builder's heart.
                </span>
            </h1>
            <div className="flex flex-col lg:flex-row">
                <div className="border-2 rounded-2xl border-[#042b44] m-3 sm:m-5 p-4 sm:p-5 min-w-0 flex-2">
                    <h1 className="py-2 pb-6">
                        ABOUT ME ___
                    </h1>
                    <h1 className="flex  flex-wrap item-center gap-1.5 text-2xl sm:text-3xl font-bold text-white py-5">
                        Hi, I'm Naina
                        <Hand fill="gold" stroke="gold" />
                    </h1>
                    <div className="text-white ">
                        <h1 className="py-3">
                            I'm a Computer Science graduate and aspiring MERN Stack Developer who enjoys turning ideas into useful, real-world web applications.
                        </h1>
                        <h1 className="py-3">
                            From designing responsive React interfaces to building REST APls and working with databases, I love learning how each part of an application comes together.
                        </h1>
                        <h1 className="py-3">
                            I'm currently strengthening my development skills and looking for opportunities to contribute, collaborate and grow as a developer
                        </h1>
                    </div>
                    <div className="flex justify-start gap-5 text-[#042b44] pt-3">
                        <h1 className="flex gap-0.5">
                            <BrainCircuit />
                            Problem Solver
                        </h1>
                        <h1 className="flex gap-0.5">
                            <MoveUpRightIcon />
                            Continuous Learning
                        </h1>
                        <h1 className="flex gap-0.5">
                            <UserRoundGroup />
                            Team Player
                        </h1>
                    </div>
                </div>
                <div className="border-2 rounded-2xl border-[#042b44] m-3 sm:m-5 p-3 sm:p-5 min-w-0 flex-1 lg:flex-1">
                    <h1 className="py-2 pb-10">
                        QUICK DETAILS  ___
                    </h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="border-2 p-2 rounded-full bg-[#042b44] border-[#042b44] ">
                                <LocationEdit />
                            </div>
                            <div>
                                <h1>
                                    LOCATION
                                </h1>
                                <h1 className="text-white">
                                    Thiruvanathapuram, Kerala
                                </h1>
                            </div>
                        </div>
                        <div onClick={()=>{window.location.href="mailto:nainanabisath@gmail.com"}}
                             className="flex items-center gap-3 cursor-pointer">
                            <div className="border-2 p-2 rounded-full bg-[#042b44] border-[#042b44]">
                             <Mail />
                           </div>
                            <div>
                                <h1>
                                    Email
                                </h1>
                                <h1 className="text-white">
                                    nainanabisath@gmail.com
                                </h1>
                            </div>
                        </div>
                        <div onClick={()=>{window.open("https://www.linkedin.com/in/nainanabisaths/?isSelfProfile=true")}}
                             className="flex items-center gap-3 cursor-pointer">
                            <div className="border-2 p-2 rounded-full bg-[#042b44] ml-1 border-[#042b44]">
                                <FaLinkedin size={20}/>
                            </div>
                            <div>
                                <h1>
                                    LinkedIn
                                </h1>
                                <h1 className="flex gap-1.5 text-white">
                                    Connect with me 
                                    <MoveUpRightIcon />
                                </h1>
                            </div>
                        </div>
                        <div onClick={()=>{window.open("https://github.com/naina-nabisath")}}
                             className="flex items-center gap-3 cursor-pointer">
                            <div className="border-2 p-2 rounded-full bg-[#042b44] ml-1 border-[#042b44]">
                                <FaGithub size={20}/>
                            </div>
                            <div>
                                <h1>
                                    Git Hub
                                </h1>
                                <h1 className="flex gap-1.5 text-white">
                                    View Repositories
                                    <MoveUpRightIcon />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About