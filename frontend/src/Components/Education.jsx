import { School, University } from "lucide-react"

const education = [
  {
    "logo" : <University />,
    "date": "2020-2024",
    "course": "Btech in Computer Science and Engineering",
    "center": "TKM Institute of Technology",
    "place": "Kollam",
    "cgpa": "7.17"
  },
  {
    "logo": <School />,
    "date": "2018-2020",
    "course": "Higher Scecondary (Plus 2)",
    "center": "St. Marys HSS",
    "place": "Ernakulam",
    "cgpa": "86%"
  }
]

function Education() {
  return (
    <div id="education" style={{ color: '#a1ccdc' }}
      className="px-35 flex flex-col justify-center pt-30" >
      <h1 className="text-blue-400 p-2">
        05 / FOUNDATIONS
      </h1>
      <div className="flex justify-between items-center pb-20">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk']">
            Education &  {' '}
            <span className="text-blue-400">
              growth.
            </span>
          </h1>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-3">
        {education.map((edu, index) => {
          return (
            <div key={index}
              className="border-2 border-[#094d78] p-5 bg-[#042b44]/30 rounded-2xl flex gap-5">
              <div className="border-2 h-fit p-3 rounded-2xl border-[#094d78] bg-[#096b90]/30">
                {edu.logo}
              </div>
              <div>
                <div className="text-[#096b90] p-2">
                  {edu.date}
                </div>
                <div className="text-white font-bold p-2 text-3xl font-['Space_Grotesk']">
                  {edu.course}
                </div>
                <div className="font-bold text-2xl p-2 font-['Space_Grotesk']">
                  {edu.center}
                </div>
                <div className="flex justify-start gap-5 p-2">
                  <div className="rounded-full border border-[#71b7d5]/30 px-3 py-1 text-xs text-[#71b7d5]">
                    {edu.place}
                  </div>
                  <div className="rounded-full border border-[#71b7d5]/30 px-3 py-1 text-xs text-[#71b7d5]">
                    {edu.cgpa}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education