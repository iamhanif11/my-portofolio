import { PROFILE } from "./data/portofolio";
// import photo from "../assets/photo-linkedin-1-no-bg.png";

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-24 py-12 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* kolom kiri */}
        <div className="z-10 text-center lg:text-left">
          <span className="bg-navy-lighter text-primary-blue px-4 py-2 rounded text-sm font-medium tracking-widest uppercase">
            Welcome to My Portofolio
          </span>

          <h1 className="text-text-light text-5xl lg:text-7xl font-extrabold mt-8 tracking-tight">
            Hi! I'm M. Hanif Irfan
          </h1>

          {/* mari eksperimen animasi */}
          <h2 className="text-primary-blue text-3xl lg:text-5xl font-extrabold mt-4 leading-tight">
            FULLSTACK WEB DEVELOPER
          </h2>

          {/* deskripsi */}
          <p className="text-text-muted text-lg mt-4 max-w-lg leading-relaxed mx-auto lg:mx-0">
            {PROFILE.description}
          </p>

          {/* sosmed */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1xLQCAa5qkqMnGKq9bLrxgE2Ak7MJPAEL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-blue hover:bg-primary-hover px-8 py-4 rounded-full font-bold flex items-center gap-4 transition-all transform hover:scale-100 shadow-lg shadow-blue-500/20"
            >
              Resume
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/iamhanif11"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-600 flex justify-center items-center hover:border-primary-blue transition-all bg-navy-light"
              >
                <img
                  src="https://api.iconify.design/ri:github-fill.svg?color=white"
                  alt="github"
                  className="w-8 h-8 "
                />
              </a>

              <a
                href="www.linkedin.com/in/mhanifirfan"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-600 flex justify-center items-center hover:border-primary-blue transition-all bg-navy-light"
              >
                <img
                  src="https://api.iconify.design/ri:linkedin-fill.svg?color=white"
                  alt="linkedin"
                  className="w-5 h-5"
                />
              </a>

              <a
                href="https://www.instagram.com/iamhanif11/"
                target="_blank"
                className="w-10 h-10 rounded-full border border-gray-600 flex justify-center items-center hover:border-primary-blue transition-all bg-navy-light"
              >
                <img
                  src="https://api.iconify.design/ri:instagram-fill.svg?color=white"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* kolom kanan */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center py-10">


          {/* === BUNGKUSAN KARTU GLASSMORPHISM === */}
          <div className="relative z-10 p-3 lg:p-5 rounded-4xl lg:rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_24px_0_rgba(0,0,0,0.3)] transition-transform duration-500 hover:-translate-y-2">
            
            {/* Kontainer Foto Utama */}
            <div className="relative w-64 h-80 lg:w-90 lg:h-120 rounded-3xl lg:rounded-4xl overflow-hidden">
               <img 
                 src="src\assets\photo-linkedin-2-no-bg.png" 
                 alt="Profile" 
                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               />
               
               {/* Bayangan Gradasi di bawah foto (Opsional, agar menyatu dengan kartu) */}
               <div className="absolute inset-0 bg-lineear-to-t from-navy-base/80 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
