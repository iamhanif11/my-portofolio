function TechStack() {
    const techStacks = [
    { name: "HTML5", icon: "https://api.iconify.design/logos:html-5.svg" },
    { name: "CSS3", icon: "https://api.iconify.design/logos:css-3.svg" },
    { name: "JavaScript", icon: "https://api.iconify.design/logos:javascript.svg" },
    { name: "React", icon: "https://api.iconify.design/logos:react.svg" },
    { name: "Redux", icon: "https://api.iconify.design/logos:redux.svg" },
    { name: "Tailwind CSS", icon: "https://api.iconify.design/logos:tailwindcss-icon.svg" },
    { name: "Golang", icon: "https://api.iconify.design/logos:go.svg" },
    { name: "Gin-Gonic", icon: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png" }, 
    { name: "PostgreSQL", icon: "https://api.iconify.design/logos:postgresql.svg" },
    { name: "Redis", icon: "https://api.iconify.design/logos:redis.svg" },
    { name: "Docker", icon: "https://api.iconify.design/logos:docker-icon.svg" },
    { name: "Swagger", icon: "https://api.iconify.design/logos:swagger.svg" },
    { name: "Figma", icon: "https://api.iconify.design/logos:figma.svg" },
    { name: "Trello", icon: "https://api.iconify.design/logos:trello.svg" },
    { name: "Notion", icon: "https://api.iconify.design/logos:notion-icon.svg" },
  ];
  return (
    <section className="bg-navy-lighter py-8 border-white/5 overflow-hidden flex items-center">

        <div className="flex w-max animate-marquee">

            <div className="flex min-w-max justify-around gap-4 px-4">
                {techStacks.map((tech, index) => (
                    <div key={`set1-${index}`} className="flex items-center justify-center min-w-30 group">
                        <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="h-10 lg:h-12  object-contain"
                        />                    
                    </div>
                ))}
            </div>

            <div className="flex min-w-max justify-around gap-4 px-4">
                {techStacks.map((tech, index) => (
                    <div key={`set2-${index}`} className="flex items-center justify-center min-w-30 group">
                        <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="h-10 lg:h-12 object-contain"
                        />
                    </div>
                ))}
            </div>

        </div>
    </section>
  )
}

export default TechStack