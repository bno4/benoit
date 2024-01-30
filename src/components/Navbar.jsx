import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  let lastScrollPosition = 0;
  const [open, setOpen] = useState(false);

  // Apparition/Disparition de la nav au scroll
  const controlNavbar = () => {
    if (window.scrollY > lastScrollPosition) {
      console.log(window.scrollY);
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

  return (
    <div>
      <nav className={navbar ? "navbar show" : "navbar"}>
        <h3>
          <FontAwesomeIcon icon={faIgloo} />
        </h3>
        <ul className={open ? "ul active" : "ul"}>
          <li>
            <a href="#">accueil</a>
          </li>
          <li>
            <a href="#">Projets</a>
          </li>
          <li>
            <a href="#">A propos</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
