
import { Mail, MoveUpRight, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Connect() {
  const contactLinks = [
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      icon: <FaLinkedin size={25} />,
      url: "https://www.linkedin.com/in/nainanabisaths/",
      external: true,
    },
    {
      title: "GITHUB",
      description: "Explore my code",
      icon: <FaGithub size={25} />,
      url: "https://github.com/naina-nabisath",
      external: true,
    },
    {
      title: "PORTFOLIO",
      description: "Explore my previous portfolio",
      icon: <Globe size={25} />,
      url: "https://naina-nabisath.github.io/Portfolio/",
      external: true,
    },
  ];

  return (
    <section
      id="connect"
      style={{ color: "#a1ccdc" }}
      className="flex flex-col justify-center scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 xl:px-20 2xl:px-28"
    >
      <div className="rounded-2xl border border-[#094d78] bg-linear-to-tr from-[#042b44] to-[#096b90] p-5 sm:p-8 lg:p-10">
        <p className="p-2 text-sm font-semibold tracking-widest text-blue-400">
          06 / LET'S CONNECT
        </p>

        <div className="grid grid-cols-1 gap-8 pt-5 md:grid-cols-2 md:gap-10 lg:gap-14">
          <div className="min-w-0 p-2 sm:p-4">
            <h1 className="font-['Space_Grotesk'] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Have a project or opportunity in{" "}
              <span className="text-blue-400">mind?</span>
            </h1>

            <p className="py-5 text-sm leading-7 sm:text-base">
              I'm open to junior developer roles, internships, and
              opportunities to learn with a great team. Let's talk.
            </p>

            <a
              href="mailto:nainanabisath@gmail.com"
              className="my-3 inline-flex max-w-full items-center justify-center gap-2 rounded-xl border border-[#71b7d5]/30 bg-[#096b90] px-4 py-3 text-base font-medium text-white transition hover:bg-[#71b7d5] hover:text-[#042b44] sm:px-5 sm:text-lg"
            >
              <Mail size={20} />
              <span>Send me an email</span>
              <MoveUpRight size={20} />
            </a>
          </div>

          <div className="flex min-w-0 flex-col gap-4">
            <a
              href="mailto:nainanabisath@gmail.com"
              className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-[#096b90] p-3 transition hover:border-[#71b7d5] hover:bg-white/5 sm:p-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="shrink-0 rounded-xl border border-[#094d78] bg-[#096b90]/30 p-3">
                  <Mail size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs tracking-wider">EMAIL</p>
                  <p className="break-all text-sm text-white sm:text-base">
                    nainanabisath@gmail.com
                  </p>
                </div>
              </div>
              <MoveUpRight className="shrink-0" size={20} />
            </a>

            {contactLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-[#096b90] p-3 transition hover:border-[#71b7d5] hover:bg-white/5 sm:p-4"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="shrink-0 rounded-xl border border-[#094d78] bg-[#096b90]/30 p-3">
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">
                      {link.title}
                    </p>
                    <p className="text-sm leading-6 text-[#a1ccdc]">
                      {link.description}
                    </p>
                  </div>
                </div>
                <MoveUpRight className="shrink-0" size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
