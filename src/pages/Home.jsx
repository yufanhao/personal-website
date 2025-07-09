import { useEffect } from "react";
import FadeInSection from "../components/FadeInSection";

export default function Home() {
  useEffect(() => {
    document.title = "Fanhao Yu";
  }, []);

  return (
    <div className="px-4 py-12 max-w-3xl mx-auto text-center space-y-8">
      <h1 className="text-5xl font-bold text-blue-600">Fanhao Yu</h1>
      <h2 className="text-2xl font-semibold text-gray-700">Introduction</h2>
      <p className="text-lg text-gray-600">
        Hi! I'm Fanhao, a computer science student at Cornell University. I love
        building projects that blend creativity and logic.
      </p>
      <h1 className="text-4xl text-red-500 font-bold">Tailwind is working?</h1>
      <FadeInSection>
        <p className="text-lg text-green-600 font-semibold">
          THIS IS SUPPOSED TO FADE IN
        </p>
      </FadeInSection>
      <div className="h-[150vh]"></div> {/* Adds scroll */}
    </div>
  );
}
