import GetInTouch from "./ui/get-in-touch";
import ViewProjects from "./ui/view-projects";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative  flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-blue-600/20 to-white -z-10" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-foreground">
          Providing Cloud-based Solutions at Scale
        </h1>
        <p className="text-lg text-foreground/80 mb-10">
          We help clients deploy and manage cloud environments with confidence.
        </p>
        {/**CTA buttons */}
        <div className="flex gap-2 justify-center">
          <GetInTouch />
          <ViewProjects />
        </div>
      </div>
    </section>
  );
}
