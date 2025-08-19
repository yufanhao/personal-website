import { useEffect } from "react";
import FadeInSection from "../components/FadeInSection";

export default function About() {
  useEffect(() => {
    document.title = "About - Fanhao Yu";
  }, []);

  const skills = [
    {
      category: "Languages",
      items: ["Python", "Java", "JavaScript", "C++", "TypeScript", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Flask", "Django", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Linux", "Figma", "Machine Learning"],
    },
  ];

  const timeline = [
    {
      year: "2024 - Present",
      title: "Cornell University",
      description:
        "Studying Computer Science with a focus on software engineering and AI/ML. Maintaining a strong GPA while actively participating in tech clubs and hackathons.",
      type: "education",
    },
    {
      year: "2023",
      title: "First Hackathon Win",
      description:
        "Won first place at CornellHacks with a innovative web application that helps students find study groups using machine learning algorithms.",
      type: "achievement",
    },
    {
      year: "2022",
      title: "Started Programming Journey",
      description:
        "Began learning programming with Python, quickly developing a passion for solving complex problems through code and building meaningful projects.",
      type: "milestone",
    },
  ];

  const interests = [
    {
      icon: "💻",
      title: "Software Development",
      description:
        "Building full-stack applications and exploring new technologies",
    },
    {
      icon: "🤖",
      title: "Machine Learning",
      description:
        "Fascinated by AI and its potential to solve real-world problems",
    },
    {
      icon: "🎮",
      title: "Game Development",
      description:
        "Creating interactive experiences and learning game design principles",
    },
    {
      icon: "🌱",
      title: "Open Source",
      description: "Contributing to community projects and sharing knowledge",
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
        <div
          className="absolute top-1/4 right-16 w-3 h-3 rounded-full animate-pulse"
          style={{ backgroundColor: "rgba(232,230,227,0.7)" }}
        ></div>
        <div
          className="absolute top-1/3 left-12 w-4 h-4 border-2 rotate-45 animate-spin"
          style={{
            borderColor: "rgba(168,165,160,0.8)",
            animationDuration: "15s",
          }}
        ></div>
        {/* <div
          className="absolute bottom-1/4 right-1/4 w-2 h-8 rotate-12 animate-pulse"
          style={{
            backgroundColor: "rgba(64,63,76,0.8)",
            animationDelay: "1s",
          }}
        ></div> */}
        {/* <div
          className="absolute bottom-1/3 left-1/6 w-5 h-5 border-2 rounded-full animate-bounce"
          style={{
            borderColor: "rgba(64,63,76,0.9)",
            animationDelay: "2s",
          }}
        ></div> */}
      </div>

      <div className="relative py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto" style={{ color: "#E8E6E3" }}>
          {/* Header Section */}
          <div className="h-10"></div>
          <FadeInSection>
            <div className="text-center mb-16">
              <h1
                className="text-5xl md:text-6xl font-bold mb-6"
                style={{ color: "#E8E6E3" }}
              >
                About Me
              </h1>
              <p
                className="text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#A8A5A0" }}
              >
                I'm a passionate computer science student who loves turning
                ideas into reality through code
              </p>
            </div>
          </FadeInSection>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Left Column - Profile & Intro */}
            <div className="lg:col-span-2 space-y-8">
              <FadeInSection delay={200}>
                <div
                  className="rounded-2xl p-8 border"
                  style={{
                    backgroundColor: "rgba(44,43,60,0.3)",
                    backdropFilter: "blur(10px)",
                    borderColor: "rgba(64,63,76,0.4)",
                  }}
                >
                  <h2
                    className="text-3xl font-bold mb-6"
                    style={{ color: "#E8E6E3" }}
                  >
                    My Story
                  </h2>
                  <div
                    className="space-y-4 leading-relaxed"
                    style={{ color: "#A8A5A0" }}
                  >
                    <p>
                      I'm Fanhao Yu, a sophomore at{" "}
                      <span
                        className="font-semibold"
                        style={{ color: "#E8E6E3" }}
                      >
                        Cornell University
                      </span>{" "}
                      pursuing a degree in Computer Science. My journey into
                      programming began with curiosity about how technology
                      shapes our world, and it has evolved into a deep passion
                      for creating solutions that make a difference.
                    </p>
                    <p>
                      What excites me most about computer science is the perfect
                      blend of logical thinking and creative problem-solving.
                      Whether I'm building a web application, exploring machine
                      learning algorithms, or contributing to open-source
                      projects, I'm always eager to learn new technologies and
                      push the boundaries of what's possible.
                    </p>
                    <p>
                      When I'm not coding, you can find me participating in
                      hackathons, collaborating with fellow students on
                      innovative projects, or exploring the beautiful Cornell
                      campus. I believe in the power of technology to create
                      positive change, and I'm committed to using my skills to
                      build a better future.
                    </p>
                  </div>
                </div>
              </FadeInSection>

              {/* Timeline */}
              <FadeInSection delay={400}>
                <div
                  className="rounded-2xl p-8 border"
                  style={{
                    backgroundColor: "rgba(44,43,60,0.3)",
                    backdropFilter: "blur(10px)",
                    borderColor: "rgba(64,63,76,0.4)",
                  }}
                >
                  <h2
                    className="text-3xl font-bold mb-8"
                    style={{ color: "#E8E6E3" }}
                  >
                    My Journey
                  </h2>
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-4 h-4 rounded-full`}
                            style={{
                              backgroundColor:
                                item.type === "education"
                                  ? "#403F4C"
                                  : item.type === "achievement"
                                  ? "#2C2B3C"
                                  : "#1B2432",
                            }}
                          ></div>
                          {index < timeline.length - 1 && (
                            <div
                              className="w-0.5 h-16 mt-2"
                              style={{ backgroundColor: "rgba(64,63,76,0.6)" }}
                            ></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div
                            className="text-sm font-medium mb-1"
                            style={{ color: "#A8A5A0" }}
                          >
                            {item.year}
                          </div>
                          <h3
                            className="text-xl font-semibold mb-2"
                            style={{ color: "#E8E6E3" }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="leading-relaxed"
                            style={{ color: "#A8A5A0" }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Right Column - Skills & Interests */}
            <div className="space-y-8">
              {/* Skills */}
              <FadeInSection delay={600}>
                <div
                  className="rounded-2xl p-6 border"
                  style={{
                    backgroundColor: "rgba(44,43,60,0.3)",
                    backdropFilter: "blur(10px)",
                    borderColor: "rgba(64,63,76,0.4)",
                  }}
                >
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ color: "#E8E6E3" }}
                  >
                    Technical Skills
                  </h2>
                  <div className="space-y-6">
                    {skills.map((skillGroup, index) => (
                      <div key={index}>
                        <h3
                          className="text-lg font-semibold mb-3"
                          style={{ color: "#A8A5A0" }}
                        >
                          {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-sm rounded-full border transition-colors hover:bg-opacity-60"
                              style={{
                                backgroundColor: "rgba(27,36,50,0.4)",
                                color: "#A8A5A0",
                                borderColor: "rgba(64,63,76,0.5)",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Quick Facts */}
              <FadeInSection delay={800}>
                <div
                  className="rounded-2xl p-6 border"
                  style={{
                    backgroundColor: "rgba(44,43,60,0.3)",
                    backdropFilter: "blur(10px)",
                    borderColor: "rgba(64,63,76,0.4)",
                  }}
                >
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#E8E6E3" }}
                  >
                    Quick Facts
                  </h2>
                  <div className="space-y-3" style={{ color: "#A8A5A0" }}>
                    <div className="flex items-center gap-3">
                      <span>🎓</span>
                      <span>Sophomore at Cornell University</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>📍</span>
                      <span>Ithaca, NY</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>💼</span>
                      <span>Seeking internship opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>🏆</span>
                      <span>Hackathon winner</span>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>

          {/* Interests Section */}
          <FadeInSection delay={1000}>
            <div className="mb-16">
              <h2
                className="text-4xl font-bold text-center mb-12"
                style={{ color: "#E8E6E3" }}
              >
                What I'm Passionate About
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-6 border transition-all duration-300 hover:scale-105 text-center"
                    style={{
                      backgroundColor: "rgba(44,43,60,0.3)",
                      backdropFilter: "blur(10px)",
                      borderColor: "rgba(64,63,76,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(64,63,76,0.7)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(64,63,76,0.4)";
                    }}
                  >
                    <div className="text-4xl mb-4">{interest.icon}</div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: "#E8E6E3" }}
                    >
                      {interest.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#A8A5A0" }}
                    >
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Call to Action */}
          <FadeInSection delay={1200}>
            <div
              className="text-center rounded-2xl p-8 md:p-12 border"
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
                Let's Connect!
              </h3>
              <p
                className="mb-8 text-lg max-w-2xl mx-auto"
                style={{ color: "#A8A5A0" }}
              >
                I'm always excited to meet new people, discuss interesting
                projects, or explore collaboration opportunities. Feel free to
                reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/projects"
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
                  View My Projects
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
        </div>
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
      `}</style>
    </div>
  );
}
