import ewalletImg from "../assets/ewallet.png";
import tickitzImg from "../assets/Tickitz.png";
import shortlinkImg from "../assets/shortlink.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Wallet",
    image: ewalletImg,
    description:
      "A full-stack fintech web application that enables users to securely manage their digital wallet through features such as balance management, money transfers, transaction history, and top-up services. The application focuses on providing a fast, responsive, and secure financial experience using modern web technologies.",
    link: "https://e-wallet-project-with-react.vercel.app/",
    github: "https://github.com/iamhanif11/ewallet-frontend",
  },
  {
    title: "Tickitz",
    image: tickitzImg,
    description:
      "A full-stack movie ticket booking platform that allows users to browse movies, select seats, complete ticket reservations, and manage bookings. The application also includes an administrative dashboard for monitoring ticket sales and managing movie data.",
    link: "https://tickitz.collabdev.my.id/",
    github: "https://github.com/L1mus/Tickitz-frontend",
  },
  {
    title: "ShortLink URL",
    image: shortlinkImg,
    description:
      "A full-stack URL shortening platform that enables users to generate, manage, and track shortened URLs securely. The project emphasizes clean architecture, secure authentication, and scalable backend design while providing a modern and responsive user interface.",
    link: "https://shortlink-frontend-sage.vercel.app/",
    github: "https://github.com/iamhanif11/shortlink-frontend",
  },
];

function ProjectSection() {
  return (
    <section className="relative py-24 px-6 lg:px-24 overflow-hidden bg-linear-to-b from-[#020813] via-[#11284c]/60 to-[#020813]">
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#11284c]/30 rounded-full blur-6xl pointer-events-none" />

      <div className="absolute -top-48 -left-48 w-96 h-96 bg-[#11284c]/60 blur-4xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header  */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-lg uppercase tracking-wide font-semibold text-primary-blue">
              My Projects
            </p>

            <h2 className="text-4xl mt-2 font-bold">Featured Project</h2>
          </div>
        </div>

        {/* Card  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-navy-light/40 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:border-primary-hover hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-xl aspect-16/10 bg-slate-800 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2 tracking-tight group-hover:text-primary-blue transition-colors">
                {project.title}
              </h3>


              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {project.github && (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.github, "_blank","noopener,noreferrer")
                    }}
                    className="p-2 w-10 text-slate-400 hover:text-white rounded-lg bg-slate-950/45 border border-slate-800 hover:border-primary-hover transition-colors duration-200 cursor-pointer"
                    title="View Source Code"
                >
                    <FaGithub size={20}/>
                </button>
              )} 
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
