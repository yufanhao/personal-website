import { useEffect } from "react";
import FadeInSection from "../components/FadeInSection";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  useEffect(() => {
    document.title = "Fanhao Yu";
  }, []);

  return (
    <div className="mx-8  py-12 px-4" style={{ backgroundColor: "#1B1A55" }}>
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-5xl text-white">Fanhao Yu</h1>
        <p className="text-lg text-white">
          <Typewriter
            words={[
              "CS Student 👨‍💻",
              "Problem Solver 🧠",
              "Creative Programmer 🎨",
            ]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={85}
            deleteSpeed={50}
            delaySpeed={1700}
          />
          {/* Hi! I'm Fanhao, a computer science student at Cornell University. I love
        building projects that blend creativity and logic. */}
        </p>
        <h1 className="text-4xl text-white font-bold">Tailwind is working?</h1>
        <FadeInSection>
          <p className="text-lg text-white-600 font-semibold">
            THIS IS SUPPOSED TO FADE IN
          </p>
        </FadeInSection>
        <div className="h-[150vh]"></div> {/* Adds scroll */}
      </div>
    </div>
  );
}
