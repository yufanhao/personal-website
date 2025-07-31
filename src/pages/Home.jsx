import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import FadeInSection from "../components/FadeInSection";

export default function Home() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    document.title = "Fanhao Yu";

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Senna",
      description:
        "A brief description of your first project. This could be a web app, mobile app, or any other interesting project you've worked on.",
      image: "/project1.png",
      link: "/projects/project-one",
      tags: ["Swift", "JavaScript"],
    },
    {
      id: 2,
      title: "Amphenol Inventory Management System",
      description:
        "A brief description of your second project. Highlight the key technologies used or the problem it solves.",
      image: "/project2.png",
      link: "/projects/project-two",
      tags: ["PHP", "JavaScript"],
    },
    {
      id: 3,
      title: "Munch",
      description:
        "A brief description of your third project. Mention what makes this project unique or interesting.",
      image: "/project3.png",
      link: "/projects/project-three",
      tags: ["JavaScript", "API", "CSS"],
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #1B1A55 0%, #2D1B69 50%, #3F2A84 100%)",
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Animated geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div // solid square
          className="absolute top-1/6 right-20 w-4 h-4 bg-white/20 rotate-45 animate-pulse"
        ></div>
        <div // hollow square
          className="absolute top-40 left-20 w-6 h-6 border-2 border-white/15 rotate-12 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div // solid circle
          className="absolute top-60 right-1/3 w-3 h-3 bg-blue-300/30 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div // hollow circle
          className="absolute bottom-40 left-1/7 w-5 h-5 border-2 border-purple-300/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div // line
          className="absolute top-1/2 left-1/3 w-2 h-8 bg-white/10 rotate-45 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div // triangle
          className="absolute top-3/7 left-1/6 w-0 h-0 animate-pulse"
          style={{
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "17.5px solid rgba(255,255,255,0.15)",
            animationDelay: "1.5s",
          }}
        ></div>
        <div // x shape (two crossing lines)
          className="absolute bottom-1/2 right-1/6 w-6 h-6 animate-spin"
          style={{ animationDuration: "25s" }}
        >
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/12 transform -translate-y-1/2 rotate-45"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/12 transform -translate-y-1/2 -rotate-45"></div>
        </div>
        <div // diamond
          className="absolute bottom-24 left-5/7 w-4 h-4 bg-pink-300/25 rotate-45 animate-bounce transform -translate-x-1/2"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div // vertical line
          className="absolute bottom-1/6 right-1/8 w-1 h-10 rotate-135 bg-white/10 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center text-white">
          {/* Hero Section */}
          <FadeInSection>
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
                Fanhao Yu
              </h1>

              <div className="h-20 flex items-center justify-center">
                <p className="text-xl md:text-2xl text-gray-200 font-light">
                  <Typewriter
                    words={[
                      "Computer Science Student 👨‍💻",
                      "Problem Solver 🧠",
                      "Creative Programmer 🎨",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={85}
                    deleteSpeed={50}
                    delaySpeed={1700}
                  />
                </p>
              </div>
            </div>
          </FadeInSection>
          {/* Profile Section */}
          <FadeInSection>
            <div className="mb-50">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <img
                  src="/profile.png"
                  alt="Fanhao"
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
              </div>

              <div className="max-w-2xl mx-auto">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                  I'm Fanhao, a computer science student at Cornell University.
                </p>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                  I love building projects that blend creativity and logic.
                </p>
              </div>
            </div>
          </FadeInSection>
          {/* Projects Section */}
          <FadeInSection>
            <div id="projects-section" className="mb-20">
              <div className="h-10"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-gray-300 mb-12 text-lg">
                Here are some of my recent works
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/10"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-6 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-full border border-blue-400/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
          {/* Call to Action Section */}
          <FadeInSection>
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                I'm always interested in new opportunities and collaborations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about"
                  className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  About Me
                </a>
                <a
                  href="mailto:your-email@cornell.edu"
                  className="border-2 border-white/30 text-white font-semibold py-3 px-8 rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </FadeInSection>
          <div className="h-32"></div> {/* Bottom spacing */}
        </div>
      </div>

      {/* Floating scroll down arrow overlay */}
      <div
        className={`fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-all duration-500 ${
          showArrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={scrollToProjects}
          className="group animate-bounce cursor-pointer bg-white/10 hover:bg-white/20 rounded-full p-4 transition-all duration-300 border border-white/20 hover:border-white/40 pointer-events-auto"
          aria-label="Scroll to projects"
        >
          <svg
            className="w-6 h-6 text-white group-hover:text-blue-200 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
