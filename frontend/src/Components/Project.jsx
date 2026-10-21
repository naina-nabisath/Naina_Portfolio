import Codesphere from '../assets/codesphere.png'
import Vsm from '../assets/vsm.png'
import Slr from '../assets/slr.png'
import Cnn from '../assets/cnn.png'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    image: Codesphere,
    title: "CodeSphere",
    details: "CodeSphere is a MERN stack-based e-learning platform that connects students, teachers, and administrators. It offers online courses, video lessons, exams, progress tracking, and certificates through a user-friendly interface.",
    stacks: ["mongodb", "express", "react", "nodejs"],
    button: "https://github.com/naina-nabisath/CodeSphere"
  },
  {
    image: Vsm,
    title: "Value Stream Mapping (VSM)",
    details: "VSM is a process-optimization web application.It enables users to create interactive process flow diagrams to visualize workflows, identify inefficiencies, and improve overall process efficiency.",
    stacks: ["React", "MySql", "Jointjs", "Nodejs"],
    button: "https://github.com/naina-nabisath/vsm"
  },
  {
    image: Slr,
    title: "Sign Language Reader (SLR)",
    details: "Machine learning project that recognizes sign language gestures using Long Short-Term Memory (LSTM) networks. It analyzes sequences of hand movements to interpret gestures and convert them into readable text, helping improve communication between deaf and hearing individuals.",
    stacks: ["Python", "Tenserflow", "Keras", "OpenCV", "Mediapipe", "Numpy"],
    button: "https://github.com/naina-nabisath/Sign-language-reader-using-LSTM"
  },
  {
    image: Cnn,
    title: "Sign language recognition",
    details: "A deep learning project that uses Convolutional Neural Networks (CNN) to recognize sign language gestures from images and translate them into readable text, helping improve communication.",
    stacks: ["Python", "Tenserflow", "Keras", "CNN"],
    button: "https://github.com/naina-nabisath/Sign-language-recognition-using-CNN"
  }
]

function Project() {
  return (
    <div id='projects'
     style={{ color: '#a1ccdc' }}
      className="px-35 flex flex-col justify-center pt-30" >
      <h1 className="text-blue-400 p-2">
        03 / SELECTED WORKS
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk']">
            Projects I'am  {' '}
            <span className="text-blue-400">
              proud of.
            </span>
          </h1>
        </div>
        <div>
          A mix of full stack application, UI projects and <br /> experiments.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-20 px-25 w-full min-w-0">
        {projects.map((project, index) => {
          return(
          <div key={index}
               className="w-full max-w-sm rounded-2xl border border-[#71b7d5]/30">
            <div className="overflow-hidden p-5 rounded">
              <img src={project.image} 
                   alt={project.title} 
                   className="h-52 w-full object-fit rounded-2xl"/>
            </div>
            <div className="p-5">
              <h2 className="mb-3 text-xl font-bold text-white">
                {project.title}
              </h2>
              <p className="text-sm leading-7 text-[#a1ccdc]">
                {project.details}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <span key={stack}
                        className="rounded-full border border-[#71b7d5]/30 px-3 py-1 text-xs text-[#71b7d5]" >
                    {stack}
                  </span>
                ))}
              </div>
              <div className='flex justify-center mt-10'>
              {project.button ? (
                  <a
                    href={project.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#096b90] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#71b7d5] hover:text-[#042b44]"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="rounded-lg border border-[#71b7d5]/30 px-5 py-2.5 text-sm text-[#a1ccdc]">
                    Project Details
                  </span>
                )}
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Project