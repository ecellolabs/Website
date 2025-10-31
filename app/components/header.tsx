export default function Header() {
  const navItems = ['Home', 'About Us', 'Services', 'Products'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
        <a href="/" className="font-bold text-xl">
            <span className="text-[#002B5C]">ec</span>
            <span className="text-[#4AB8E8]">e</span>
            <span className="text-[#1E88C7]">l</span>
            <span className="text-[#87CEEB]">l</span>
            <span className="text-[#4AB8E8]">o</span>
        </a>
          <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-foreground transition-opacity duration-300 hover:opacity-70"
              >
                {item}
              </a>
            </li>
          ))}
                  </ul>
        </div>

        <button className="bg-black text-white cursor-pointer px-7 py-2 rounded-full transition-opacity duration-300 hover:opacity-80">
          Get in touch
        </button>
      </nav>
    </header>
  );
}