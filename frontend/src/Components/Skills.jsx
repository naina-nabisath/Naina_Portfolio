import { Server, Wrench } from "lucide-react"
import { FaReact } from "react-icons/fa"


function Skills() {
  return (
    <div id="skills"
    style={{ color: '#a1ccdc' }}
         className="px-35 flex flex-col justify-center pt-30" >
      <h1 className="text-blue-400 p-2">
        02 / MY TOOLKIT
      </h1>
      <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk']">
        Skills that bring ideas {' '}
        <span className="text-blue-400">
          to life.
        </span>
      </h1>
      <h1>
        The tool I use to desing, develop and improve web experiences.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 w-full min-w-0">
        <div className="border-2 rounded-2xl border-[#71b7d5]/30 p-4 sm:p-5 w-full min-w-0">
          <div className="border-2 w-fit rounded p-2">
            <FaReact size={20} />
          </div>
          <h1 className="text-white font-bold text-3xl my-2">
            Frontend
          </h1>
          <h1>
            Creating responsive, accessible interfaces.
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                React
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                JavaScript ES6+
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                HTML5
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                CSS3
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                Tailwind CSS
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                Bootstrap
              </h1>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-2xl border-[#71b7d5]/30 p-4 sm:p-5 w-full min-w-0">
          <div className="border-2 w-fit rounded p-2">
            <Server size={20} />
          </div>
          <h1 className="text-white font-bold text-3xl my-2">
            Backend
          </h1>
          <h1>
            Build APIs and server side logic.
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                Node js
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                Express js
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                REST API's
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                Java
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                CRUD
              </h1>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-2xl border-[#71b7d5]/30 p-4 sm:p-5 w-full min-w-0">
          <div className="border-2 w-fit rounded p-2">
            <Wrench />
          </div>
          <h1 className="text-white font-bold text-3xl my-2">
            Data & Tools
          </h1>
          <h1>
            Managaging data and everryday workflows.
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                MongoDB
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                MySQL
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                Git
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                Github
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                VS Code
              </h1>
            </div>
            <div className="flex items-center rounded-full border border-[#71b7d5]/30 px-3 py-2 text-sm">
              <h1>
                Postman
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills