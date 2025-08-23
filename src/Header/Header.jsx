import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import BurgerIcon from "../utils/BurgerIcon.jsx";
import ChangeLanguageButton from "../utils/ChangeLanguageButton.jsx";

const navigationHeader = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "portfolio", path: "/portfolio" },
  { key: "forSale", path: "/distribution" },
  { key: "events", path: "/events" },
  { key: "contact", path: "/contact" },
];

export default function Header() {
  const { t } = useTranslation("header");

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-overlay-bg text-overlay-text z-900 py-4 lg:py-6 px-4 sm:px-6 md:px-9 lg:px-12 flex flex-col gap-0">
      <section className="flex flex-row justify-between items-center">
        <Link
          className={
            "transition-all duration-400 text-lg sm:text-xl md:text-3xl xl:text-4xl"
          }
          to={"/"}
        >
          Kristýna Koubková
        </Link>
        <div className={"flex flex-row gap-3 items-center justify-center"}>
          <div>
            <ChangeLanguageButton />
          </div>
          <div
            className={
              "h-4 w-4 box-content relative md:hidden flex flex-row items-center justify-center"
            }
            onClick={toggleMenu}
          >
            <BurgerIcon isOpen={menuOpen} />
          </div>
        </div>
      </section>
      <section
        className={`top-14 fixed inset-0 bg-overlay-bg transition-all duration-400 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:static md:opacity-100 md:visible md:flex`}
      >
        <nav className={"select-none"}>
          <ul
            className={"flex flex-col pt-4 md:flex md:flex-row gap-4 md:gap-8"}
          >
            {navigationHeader.map((item, index) => {
              return (
                <li className={""} key={index} onClick={toggleMenu}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex justify-center text-xl md:text-base ${isActive ? "" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <span
                        className={`border-b border-transparent hover:text-link-hover-color hover:border-b-link-hover-color active:text-link-hover-color active:border-b-link-hover-color transition-all duration-200 ease-in-out ${isActive ? "border-b-link-hover-color text-link-hover-color " : "border-transparent text-overlay-text"}`}
                      >
                        {t(item.key)}
                      </span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </header>
  );
}
