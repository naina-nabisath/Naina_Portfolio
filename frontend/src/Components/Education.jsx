
import { School, University } from "lucide-react";

const education = [
  {
    logo: University,
    date: "2020–2024",
    course: "B.Tech in Computer Science and Engineering",
    center: "TKM Institute of Technology",
    place: "Kollam",
    cgpa: "7.17 CGPA",
  },
  {
    logo: School,
    date: "2018–2020",
    course: "Higher Secondary (Plus Two)",
    center: "St. Mary's HSS",
    place: "Ernakulam",
    cgpa: "86%",
  },
];

function Education() {
  return (
    <section
      id="education"
      style={{ color: "#a1ccdc" }}
      className="flex flex-col justify-center scroll-mt-24 px-5 pt-20 sm:px-8 sm:pt-24 lg:px-12 xl:px-20 2xl:px-28"
    >
      <p className="p-2 text-sm font-semibold tracking-widest text-blue-400">
        05 / FOUNDATIONS
      </p>

      <div className="pb-10 sm:pb-14 lg:pb-16">
        <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Education &amp;
          <br className="sm:hidden" />{" "}
          <span className="text-blue-400">growth.</span>
        </h1>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 pb-12 md:grid-cols-2 md:gap-6 lg:gap-8">
        {education.map((edu) => {
          const Logo = edu.logo;

          return (
            <article
              key={edu.date}
              className="flex min-w-0 flex-col gap-4 rounded-2xl border border-[#094d78] bg-[#042b44]/30 p-5 transition duration-300 hover:border-[#71b7d5]/70 sm:flex-row sm:gap-5 sm:p-6 lg:p-7"
            >
              <div className="flex h-fit w-fit shrink-0 items-center justify-center rounded-2xl border border-[#094d78] bg-[#096b90]/30 p-3">
                <Logo size={28} className="text-[#71b7d5]" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="mb-2 text-sm font-medium text-[#71b7d5]">
                  {edu.date}
                </p>

                <h2 className="break-words font-['Space_Grotesk'] text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                  {edu.course}
                </h2>

                <h3 className="mt-3 break-words font-['Space_Grotesk'] text-lg font-semibold text-[#a1ccdc] sm:text-xl">
                  {edu.center}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#71b7d5]/30 px-3 py-1.5 text-xs text-[#71b7d5] sm:text-sm">
                    {edu.place}
                  </span>

                  <span className="rounded-full border border-[#71b7d5]/30 px-3 py-1.5 text-xs text-[#71b7d5] sm:text-sm">
                    {edu.cgpa}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
