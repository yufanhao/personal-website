import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import FadeInSection from "../components/FadeInSection";

export default function Home() {
  const [showArrow, setShowArrow] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    document.title = "Fanhao Yu";

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const experiencesSection = document.getElementById("experiences-section");
      const projectsSection = document.getElementById("projects-section");
      const ctaSection = document.getElementById("cta-section");

      // Calculate how close we are to the bottom
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const bottomProximity = scrollY / scrollableHeight;

      // Show arrow unless we're very close to the bottom
      if (bottomProximity > 0.9) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }

      // Determine current section based on scroll position
      if (ctaSection && scrollY >= ctaSection.offsetTop - 200) {
        setCurrentSection(3);
      } else if (
        projectsSection &&
        scrollY >= projectsSection.offsetTop - 200
      ) {
        setCurrentSection(2);
      } else if (
        experiencesSection &&
        scrollY >= experiencesSection.offsetTop - 200
      ) {
        setCurrentSection(1);
      } else {
        setCurrentSection(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const experiencesSection = document.getElementById("experiences-section");
    const projectsSection = document.getElementById("projects-section");
    const ctaSection = document.getElementById("cta-section");

    if (currentSection === 0) {
      // Scroll to experiences
      if (experiencesSection) {
        experiencesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (currentSection === 1) {
      // Scroll to projects
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (currentSection === 2) {
      // Scroll to CTA
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Senna",
      description:
        "iOS Social fitness app featuring real-time workout tracking and social feed, like Strava for weight lifting. Available on App Store!",
      image: "https://via.placeholder.com/400x225/403F4C/ffffff?text=Project+1",
      link: "/projects/project-one",
      tags: ["Swift", "Firebase", "MVVM Architecture"],
    },
    {
      id: 2,
      title: "DuckDuckDebug",
      description:
        "AI voice controlled debugging tool combining the CodeBERT model (fine-tuned on CoNaLa dataset) and RAG for intelligent assistance.",
      image: "duckduckdebug.png",
      link: "/projects/project-two",
      tags: ["Node.js", "React", "ML", "MongoDB"],
    },
    {
      id: 3,
      title: "Munch",
      description:
        "iOS social dining app that scans receipts and automatically extracts food items to split the bill in group settings.",
      image: "munch.png",
      link: "/projects/project-three",
      tags: ["Python", "Flask", "SwiftUI", "Computer Vision"],
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#121420",
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(64,63,76,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64,63,76,0.4) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Animated geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div // solid square
          className="absolute top-1/6 right-20 w-4 h-4 rotate-45 animate-pulse"
          style={{ backgroundColor: "rgba(64,63,76,0.9)" }}
        ></div>
        <div // hollow square
          className="absolute top-40 left-20 w-6 h-6 border-2 rotate-12 animate-spin"
          style={{
            borderColor: "rgba(168,165,160,0.8)",
            animationDuration: "20s",
          }}
        ></div>
        <div // solid circle
          className="absolute top-60 right-1/3 w-3 h-3 rounded-full animate-bounce"
          style={{
            backgroundColor: "rgba(232,230,227,0.7)",
            animationDelay: "1s",
          }}
        ></div>
        <div // solid circle
          className="absolute bottom-28 left-9/30 w-3 h-3 rounded-full animate-bounce"
          style={{
            backgroundColor: "rgba(232,230,227,0.7)",
            animationDelay: "1s",
          }}
        ></div>
        <div // hollow circle
          className="absolute bottom-40 left-1/7 w-5 h-5 border-2 rounded-full animate-pulse"
          style={{
            borderColor: "rgba(64,63,76,0.9)",
            animationDelay: "2s",
          }}
        ></div>
        <div // line
          className="absolute top-1/2 left-1/3 w-2 h-8 rotate-45 animate-pulse"
          style={{
            backgroundColor: "rgba(168,165,160,0.6)",
            animationDelay: "0.5s",
          }}
        ></div>
        <div // triangle
          className="absolute top-3/7 left-1/6 w-0 h-0 animate-pulse"
          style={{
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "17.5px solid rgba(64,63,76,0.8)",
            animationDelay: "1.5s",
          }}
        ></div>
        <div // x shape (two crossing lines)
          className="absolute bottom-1/2 right-1/6 w-6 h-6 animate-spin"
          style={{ animationDuration: "25s" }}
        >
          <div
            className="absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2 rotate-45"
            style={{ backgroundColor: "rgba(168,165,160,0.7)" }}
          ></div>
          <div
            className="absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2 -rotate-45"
            style={{ backgroundColor: "rgba(168,165,160,0.7)" }}
          ></div>
        </div>
        <div // diamond
          className="absolute bottom-24 left-5/7 w-4 h-4 rotate-45 animate-bounce transform -translate-x-1/2"
          style={{
            backgroundColor: "rgba(232,230,227,0.6)",
            animationDelay: "2.5s",
          }}
        ></div>
        <div // vertical line
          className="absolute bottom-1/6 right-1/8 w-1 h-10 rotate-135 animate-pulse"
          style={{
            backgroundColor: "rgba(64,63,76,0.8)",
            animationDelay: "3s",
          }}
        ></div>
      </div>

      <div className="relative py-20 px-4 sm:px-8 lg:px-16">
        <div
          className="max-w-7xl mx-auto text-center"
          style={{ color: "#E8E6E3" }}
        >
          {/* Hero Section */}
          <FadeInSection>
            <div className="mt-16 mb-8">
              <h1
                className="text-6xl md:text-7xl font-bold mb-6"
                style={{
                  color: "#E8E6E3",
                }}
              >
                Fanhao Yu
              </h1>

              <div className="h-20 flex items-center justify-center">
                <p
                  className="text-xl md:text-2xl font-light"
                  style={{ color: "#A8A5A0" }}
                >
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
                <div
                  className="absolute inset-0 rounded-full blur-lg opacity-60 animate-pulse"
                  style={{
                    backgroundColor: "#403F4C",
                  }}
                ></div>
                <img
                  src="profile.png"
                  alt="Fanhao"
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 shadow-2xl"
                  style={{ borderColor: "rgba(64,63,76,0.6)" }}
                />
              </div>

              <div className="max-w-2xl mx-auto">
                <p
                  className="text-lg md:text-xl leading-relaxed font-light"
                  style={{ color: "#A8A5A0" }}
                >
                  I'm Fanhao, a computer science student at Cornell University.
                </p>
                <p
                  className="text-lg md:text-xl leading-relaxed font-light"
                  style={{ color: "#A8A5A0" }}
                >
                  I love building projects that blend creativity and logic.
                </p>
              </div>
            </div>
          </FadeInSection>
          {/* Experiences Timeline Section */}
          <FadeInSection>
            <div id="experiences-section" className="mb-50">
              <div className="h-10"></div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  color: "#E8E6E3",
                }}
              >
                Experience
              </h2>
              <p className="mb-8 text-lg" style={{ color: "#6B6B6B" }}>
                My professional journey and achievements
              </p>

              <div className="max-w-4xl mx-auto">
                {/* Timeline container */}
                <div className="relative">
                  {/* Vertical line */}
                  <div
                    className="absolute left-8 top-0 bottom-0 w-0.5"
                    style={{ backgroundColor: "rgba(64,63,76,0.6)" }}
                  ></div>

                  {/* Timeline items */}
                  <div className="space-y-8">
                    {/* Experience 1 */}
                    <div className="relative flex items-start">
                      {/* Timeline dot */}
                      <div
                        className="absolute left-6 w-4 h-4 rounded-full border-4"
                        style={{
                          backgroundColor: "#1B2432",
                          borderColor: "#403F4C",
                        }}
                      ></div>

                      {/* Content */}
                      <div className="ml-16 flex-1">
                        <div
                          className="rounded-xl p-6 border transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: "rgba(44,43,60,0.3)",
                            borderColor: "rgba(64,63,76,0.4)",
                          }}
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3
                              className="text-xl font-bold"
                              style={{ color: "#E8E6E3" }}
                            >
                              Software Engineering Intern
                            </h3>
                            <span
                              className="text-sm font-medium px-3 py-1 rounded-full border"
                              style={{
                                backgroundColor: "rgba(27,36,50,0.4)",
                                color: "#A8A5A0",
                                borderColor: "rgba(64,63,76,0.5)",
                              }}
                            >
                              Summer 2025
                            </span>
                          </div>
                          <p
                            className="text-lg font-medium mb-2"
                            style={{ color: "#A8A5A0" }}
                          >
                            Amphenol
                          </p>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "#A8A5A0" }}
                          >
                            Built an enterprise-grade internal inventory system
                            with real-time tracking, advanced search, and
                            multi-user authentication for employees to track
                            5000+ previously unmanaged items, equipment, parts,
                            and products. Currently deployed on internal company
                            network
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Experience 2 */}
                    <div className="relative flex items-start">
                      {/* Timeline dot */}
                      <div
                        className="absolute left-6 w-4 h-4 rounded-full border-4"
                        style={{
                          backgroundColor: "#1B2432",
                          borderColor: "#403F4C",
                        }}
                      ></div>

                      {/* Content */}
                      <div className="ml-16 flex-1">
                        <div
                          className="rounded-xl p-6 border transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: "rgba(44,43,60,0.3)",
                            borderColor: "rgba(64,63,76,0.4)",
                          }}
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3
                              className="text-xl font-bold"
                              style={{ color: "#E8E6E3" }}
                            >
                              Research Assistant
                            </h3>
                            <span
                              className="text-sm font-medium px-3 py-1 rounded-full border"
                              style={{
                                backgroundColor: "rgba(27,36,50,0.4)",
                                color: "#A8A5A0",
                                borderColor: "rgba(64,63,76,0.5)",
                              }}
                            >
                              2023 - Present
                            </span>
                          </div>
                          <p
                            className="text-lg font-medium mb-2"
                            style={{ color: "#A8A5A0" }}
                          >
                            Cornell University
                          </p>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "#A8A5A0" }}
                          >
                            Conducted research in artificial intelligence and
                            machine learning. Published findings and presented
                            at academic conferences.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Experience 3 */}
                    <div className="relative flex items-start">
                      {/* Timeline dot */}
                      <div
                        className="absolute left-6 w-4 h-4 rounded-full border-4"
                        style={{
                          backgroundColor: "#1B2432",
                          borderColor: "#403F4C",
                        }}
                      ></div>

                      {/* Content */}
                      <div className="ml-16 flex-1">
                        <div
                          className="rounded-xl p-6 border transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: "rgba(44,43,60,0.3)",
                            borderColor: "rgba(64,63,76,0.4)",
                          }}
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3
                              className="text-xl font-bold"
                              style={{ color: "#E8E6E3" }}
                            >
                              Teaching Assistant
                            </h3>
                            <span
                              className="text-sm font-medium px-3 py-1 rounded-full border"
                              style={{
                                backgroundColor: "rgba(27,36,50,0.4)",
                                color: "#A8A5A0",
                                borderColor: "rgba(64,63,76,0.5)",
                              }}
                            >
                              Fall 2023
                            </span>
                          </div>
                          <p
                            className="text-lg font-medium mb-2"
                            style={{ color: "#A8A5A0" }}
                          >
                            Cornell University - CS 2110
                          </p>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "#A8A5A0" }}
                          >
                            Assisted students with object-oriented programming
                            concepts and data structures. Held office hours and
                            graded assignments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
          {/* Projects Section */}
          <FadeInSection>
            <div id="projects-section" className="mb-20">
              <div className="h-10"></div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  color: "#E8E6E3",
                }}
              >
                Featured Projects
              </h2>
              <p className="mb-12 text-lg" style={{ color: "#6B6B6B" }}>
                Here are some of my recent works
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group rounded-2xl p-6 transition-all duration-500 hover:scale-105"
                    style={{
                      backgroundColor: "rgba(44,43,60,0.3)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(64,63,76,0.4)",
                      animationDelay: `${index * 200}ms`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(44,43,60,0.5)";
                      e.currentTarget.style.borderColor = "rgba(64,63,76,0.7)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(44,43,60,0.3)";
                      e.currentTarget.style.borderColor = "rgba(64,63,76,0.4)";
                    }}
                  >
                    <div
                      className="aspect-video rounded-xl mb-6 overflow-hidden relative"
                      style={{
                        backgroundColor: "#1B2432",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="text-left">
                      <h3
                        className="text-xl font-bold mb-3 transition-colors group-hover:opacity-80"
                        style={{ color: "#E8E6E3" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-sm mb-4 leading-relaxed line-clamp-3"
                        style={{ color: "#A8A5A0" }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full border"
                            style={{
                              backgroundColor: "rgba(27,36,50,0.4)",
                              color: "#A8A5A0",
                              borderColor: "rgba(64,63,76,0.5)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 font-medium py-3 px-6 rounded-lg transition-all duration-300"
                        style={{
                          backgroundColor: "#403F4C",
                          color: "#E8E6E3",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#2C2B3C";
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow =
                            "0 10px 25px rgba(64,63,76,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#403F4C";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
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
            <div className="h-25"></div>
            <div
              id="cta-section"
              className="rounded-2xl p-8 md:p-12 border"
              style={{
                backgroundColor: "rgba(44,43,60,0.4)",
                backdropFilter: "blur(10px)",
                borderColor: "rgba(64,63,76,0.5)",
              }}
            >
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: "#E8E6E3" }}
              >
                Let's Build Something Amazing
              </h3>
              <p className="mb-8 text-lg" style={{ color: "#A8A5A0" }}>
                I'm always interested in new opportunities and collaborations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about"
                  className="font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: "#403F4C",
                    color: "#E8E6E3",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2C2B3C";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#403F4C";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  About Me
                </a>
                <a
                  href="mailto:your-email@cornell.edu"
                  className="border-2 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                  style={{
                    borderColor: "rgba(64,63,76,0.8)",
                    color: "#E8E6E3",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#403F4C";
                    e.currentTarget.style.backgroundColor =
                      "rgba(64,63,76,0.2)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(64,63,76,0.8)";
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
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
          onClick={scrollToNextSection}
          className="group animate-bounce cursor-pointer rounded-full p-4 transition-all duration-300 border pointer-events-auto"
          style={{
            backgroundColor: "rgba(44,43,60,0.4)",
            borderColor: "rgba(64,63,76,0.6)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(44,43,60,0.6)";
            e.currentTarget.style.borderColor = "rgba(64,63,76,0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(44,43,60,0.4)";
            e.currentTarget.style.borderColor = "rgba(64,63,76,0.6)";
          }}
          aria-label="Scroll to projects"
        >
          <svg
            className="w-6 h-6 transition-colors group-hover:opacity-80"
            style={{ color: "#A8A5A0" }}
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
