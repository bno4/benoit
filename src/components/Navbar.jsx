import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  let lastScrollPosition = 0;
  const [open, setOpen] = useState(false);
  // const links = document.querySelectorAll("nav li");

  // Apparition/Disparition de la nav au scroll
  const controlNavbar = () => {
    if (window.scrollY > lastScrollPosition) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    lastScrollPosition = window.scrollY;
  };

  // Management du burger menu à -730px de width
  const toggleClass = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => controlNavbar());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   links.forEach((link) => {
  //     link.addEventListener("click", () => {
  //       toggleClass();
  //     });
  //   });
  // }, []);

  return (
    <div>
      <nav className={navbar ? "navbar hidden" : "navbar"}>
        <li>
          <NavLink
            to="/"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            Benoît Duchemin
          </NavLink>
        </li>
        <ul className={open ? "ul active" : "ul"}>
          <li onClick={toggleClass}>
            <NavLink
              to="/projects"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              projets
            </NavLink>
          </li>

          <li onClick={toggleClass}>
            <NavLink
              to="/about"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              à propos
            </NavLink>
          </li>

          <li onClick={toggleClass}>
            <NavLink
              to="/contact"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              contact{" "}
            </NavLink>
          </li>
        </ul>

        <div
          onClick={toggleClass}
          className={open ? "icons active" : "icons"}
        ></div>
      </nav>
    </div>
  );
};

export default Navbar;
