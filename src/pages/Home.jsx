import FadeInSection from "../components/FadeInSection";

export default function Home() {
  return (
    <>
      <h1>Fanhao Yu</h1>
      <h2>Introduction</h2>
      <p>
        Hi! I'm Fanhao, a computer science student at Cornell University. Hi!
        I'm Fanhao, a computer science student at Cornell University.
      </p>
      <div style={{ height: "150vh" }}></div> {/* Adds scroll */}
      <h1 className="text-4xl text-red-500 font-bold">Tailwind is working?</h1>
      <FadeInSection>
        <p>THIS IS SUPPOSED TO FADE IN</p>
      </FadeInSection>
      <div style={{ height: "150vh" }}></div> {/* Adds scroll */}
    </>
  );
}
