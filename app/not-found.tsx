import Header from "../components/header";
import Footer from "../components/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-blue-600/20 to-white -z-10" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm tracking-wider text-foreground/60 mb-3">
            Error 404
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight text-foreground">
            Page not found
          </h1>
          <p className="text-foreground/80 mb-10">
            The page you’re looking for doesn’t exist, or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="bg-black text-white px-7 py-2 rounded-full transition-all duration-300 font-medium cursor-pointer"
            >
              Go Home
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
