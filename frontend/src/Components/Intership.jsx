const journey = [
    {
      date: "2026 – Present",
      title: "MERN Stack",
      center: "Arcite Kadapakada",
      details:
        "Developed responsive user interfaces using React.js. Built and integrated RESTful APIs using Node.js and Express.js. Implemented CRUD operations, database interactions, and frontend-backend integration. Developed projects including Netflix Clone and OLX Clone using Firebase",
      stacks: ["MongoDB", "Express", "React", "Nodejs"],
    },
    {
      date: "April 2025 - May 2025",
      title: "Prompt Engineer",
      center: "Lean Transition Solution",
      details: "Worked as a Prompt Engineer supporting AI-assisted application development and workflow improvements. Contributed to a Value Stream Mapping (VSM) web application and assisted with application-related tasks. Assisted with UI enhancements and application development. Worked with React.js, MySQL, and JointJS as part of the project environment. Assisted the development team with UI improvements, prompt creation, and application functionality", 
      stacks: ["Computer Science", "Web Development"],
    },
    {
      date: "Oct 2024 - Feb 2025",
      title: "Java Full Stack Intern",
      center: "Kompetenzen",
      details: "Developed responsive interfaces using HTML, CSS, Bootstrap, and React.js. Created RESTful APIs supporting CRUD operations. Applied OOP concepts for modular application development. Worked with MySQL database design and management.",
      stacks: ["Java", "MySql", "React", "JavaScritpt"],
    },
  ];


function Internship() {
  return (
    <div style={{ color: '#a1ccdc' }}
      className="px-35 flex flex-col justify-center pt-30" >
      <h1 className="text-blue-400 p-2">
        04 / THE JOURNEY
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk']">
            Experience &  {' '}
            <span className="text-blue-400">
              learning.
            </span>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 py-20 px-25 w-full min-w-0">
          <div className="grid w-full min-w-0 grid-cols-1 gap-6 py-12">
        {journey.map((item, index) => (
          <div
            key={index}
            className="group grid min-w-0 grid-cols-1 gap-5 rounded-2xl border border-[#71b7d5]/30 bg-[#042b44]/50 p-5 sm:p-7 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8"
          >
            <div className="flex items-start gap-3 md:border-r md:border-[#71b7d5]/30">
              <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#71b7d5] shadow-[0_0_12px_#71b7d5]" />
              <p className="text-sm font-semibold tracking-wide text-[#71b7d5]">
                {item.date}
              </p>
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white transition group-hover:text-[#71b7d5] sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 font-medium text-[#71b7d5]">
                {item.center}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#a1ccdc] sm:text-base">
                {item.details}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stacks.map((stack) => (
                  <span key={stack}
                        className="rounded-full border border-[#71b7d5]/30 px-3 py-1 text-xs text-[#71b7d5]">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Internship