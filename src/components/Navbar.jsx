import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-4 z-50 flex justify-center">
      <div className="flex items-center gap-2 pl-6 rounded-full bg-black/30 backdrop-blur-sm border border-white/20">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-16 text-center transition ${
              isActive ? "text-white font-semibold" : "text-gray-400"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `w-24 text-center transition ${
              isActive ? "text-white font-semibold" : "text-gray-400"
            }`
          }
        >
          Portfolio
        </NavLink>

       <a
        href="mailto:sylvianarahma@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Sylviana,%0A%0AI%20would%20like%20to%20discuss..."
        className="inline-block bg-white text-black px-4 py-3 rounded-full font-bold hover:bg-gray-200 transition"
      >
        Let's Talk
      </a>

      </div>
    </nav>
  );
}

export default Navbar;