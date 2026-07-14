import { FaGraduationCap } from "react-icons/fa";

const educations = [
  {
    institute: "Koda Tech Academy",
    location: "Bogor, Indonesia",
    degree: "Fullstack Web Developer",
    duration: "Feb 2026 - Jun 2026",
    description:
      "Learned modern fullstack web development through intensive project-based training, building production-ready applications using React.js, Golang (Gin Framework), PostgreSQL, and Redis from frontend to backend. Practiced building reusable UI architecture with Tailwind CSS, managing complex states via Redux Toolkit, and implementing security frameworks (Argon2id Hashing, JWT, and Redis token blacklists).",
  },
  {
    institute: "State University of Padang",
    location: "Padang, Indonesia",
    degree: "Chemistry",
    duration: "Agu 2015 - Sep 2019",
    description: "Graduated with a Bachelor's Degree in Chemistry.",
  },
];

function EducationSection() {
  return (
    <section className="relative py-24 px-6 lg:px-24 overflow-hidden bg-linear-to-b from-[#020813] via-[#11284c]/40 to-[#020813]">
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#11284c]/20 rounded-full blur-6xl pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-[#11284c]/40 blur-4xl rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto">
        <div className="mb-12">
          <p className="text-lg uppercase tracking-wide font-semibold text-primary-blue">
            Education
          </p>

          <h2 className="text-4xl mt-2 font-bold tracking-tight">
            Educational Background
          </h2>
        </div>

        <div className="space-y-6">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="group bg-navy-light/30 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row md:items-start justify-between gap-4 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 ">
                  <FaGraduationCap size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {edu.degree}
                  </h3>

                  <p className="font-medium mt-1">
                    {edu.institute}{" "}
                    <span className="text-slate-500 text-sm  font-normal ml-1">
                      • {edu.location}
                    </span>
                  </p>
                  <p className="text-sm leading-relaxed mt-4 max-w-5xl text-justify">
                    {edu.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <span className="inline-block px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-lg bg-slate-900 border border-slate-800/80 ">
                  {edu.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
