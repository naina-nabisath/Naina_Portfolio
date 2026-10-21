
const journey = [
  {
    date: "2026 – Present",
    title: "MERN Stack",
    center: "Arcite Kadapakada",
    details:
      "Developed responsive user interfaces using React.js. Built and integrated RESTful APIs using Node.js and Express.js. Implemented CRUD operations, database interactions, and frontend-backend integration. Developed projects including Netflix Clone and OLX Clone using Firebase.",
    stacks: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    date: "April 2025 – May 2025",
    title: "Prompt Engineer",
    center: "Lean Transition Solution",
    details:
      "Worked as a Prompt Engineer supporting AI-assisted application development and workflow improvements. Contributed to a Value Stream Mapping (VSM) web application, UI enhancements, prompt creation, and application functionality. Worked with React.js, MySQL, and JointJS.",
    stacks: ["Prompt Engineering", "Web Development", "React", "MySQL", "JointJS"],
  },
  {
    date: "Oct 2024 – Feb 2025",
    title: "Java Full Stack Intern",
    center: "Kompetenzen",
    details:
      "Developed responsive interfaces using HTML, CSS, Bootstrap, and React.js. Created RESTful APIs supporting CRUD operations. Applied OOP concepts for modular application development and worked with MySQL database design and management.",
    stacks: ["Java", "MySQL", "React", "JavaScript", "Bootstrap"],
  },
];

function Internship() {
  return (
    <section
      id="education"
      style={{ color: "#a1ccdc" }}
      className="flex flex-col justify-center scroll-mt-24 px-5 pt-20 sm:px-8 sm:pt-24 lg:px-12 xl:px-20 2xl:px-28"
    >
      <p className="p-2 text-sm font-semibold tracking-widest text-blue-400">
        04 / THE JOURNEY
      </p>

      <div className="px-2">
        <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Experience &amp;
          <br className="sm:hidden" />{" "}
          <span className="text-blue-400">learning.</span>
        </h1>
      </div>

      <div className="grid w-full min-w-0 grid-cols-1 gap-6 py-10 sm:gap-8 sm:py-14 lg:py-16">
        {journey.map((item) => (
          <article
            key={item.title}
            className="group grid min-w-0 grid-cols-1 gap-5 rounded-2xl border border-[#71b7d5]/30 bg-[#042b44]/50 p-5 transition duration-300 hover:border-[#71b7d5]/70 sm:p-7 md:grid-cols-[160px_minmax(0,1fr)] md:gap-7 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-9 lg:p-8"
          >
            <div className="flex items-start gap-3 md:border-r md:border-[#71b7d5]/30 md:pr-4">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#71b7d5] shadow-[0_0_12px_#71b7d5]" />

              <p className="text-sm font-semibold leading-6 tracking-wide text-[#71b7d5] sm:text-base md:warp-break-words">
                {item.date}
              </p>
            </div>

            <div className="min-w-0">
              <h2 className="text-xl font-bold text-white transition group-hover:text-[#71b7d5] sm:text-2xl lg:text-3xl">
                {item.title}
              </h2>

              <p className="mt-2 font-medium text-[#71b7d5] sm:text-lg">
                {item.center}
              </p>

              <p className="mt-4 text-sm leading-7 text-[#a1ccdc] sm:text-base">
                {item.details}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-[#71b7d5]/30 px-3 py-1.5 text-xs text-[#71b7d5] sm:text-sm"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Internship;
