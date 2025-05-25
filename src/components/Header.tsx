import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ex-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-white font-oswald text-3xl font-bold">E</span>
            <span className="text-ex-red font-oswald text-3xl font-bold">
              X
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#tours"
              className="text-white hover:text-ex-red transition-colors font-roboto"
            >
              Туры
            </a>
            <a
              href="#about"
              className="text-white hover:text-ex-red transition-colors font-roboto"
            >
              О нас
            </a>
            <a
              href="#contacts"
              className="text-white hover:text-ex-red transition-colors font-roboto"
            >
              Контакты
            </a>
            <button className="bg-ex-red text-white px-6 py-2 rounded hover:bg-ex-orange transition-colors font-roboto font-medium">
              Забронировать
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-ex-gray-800">
            <div className="flex flex-col space-y-4">
              <a
                href="#tours"
                className="text-white hover:text-ex-red transition-colors"
              >
                Туры
              </a>
              <a
                href="#about"
                className="text-white hover:text-ex-red transition-colors"
              >
                О нас
              </a>
              <a
                href="#contacts"
                className="text-white hover:text-ex-red transition-colors"
              >
                Контакты
              </a>
              <button className="bg-ex-red text-white px-6 py-2 rounded w-full">
                Забронировать
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
