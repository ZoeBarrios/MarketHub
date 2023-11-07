import { useState } from "react";
import { LIST_TO_SHOW } from "../utils/constants";

export default function Hamburger({ handleListToShow }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger">
      <div
        className={`hamburger__icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger__bar"></div>
        <div className="hamburger__bar"></div>
        <div className="hamburger__bar"></div>
      </div>
      {menuOpen && (
        <div className="hamburger__menu">
          <div
            className="hamburger__line"
            onClick={() => handleListToShow(LIST_TO_SHOW.WISHLIST)}
          >
            WishList
          </div>
          <div
            className="hamburger__line"
            onClick={() => handleListToShow(LIST_TO_SHOW.PUBLICATIONS)}
          >
            My Publications
          </div>
          <div
            className="hamburger__line"
            onClick={() => handleListToShow(LIST_TO_SHOW.PURCHASES)}
          >
            My Purchases
          </div>
          <div
            className="hamburger__line"
            onClick={() => handleListToShow(LIST_TO_SHOW.MY_SALES)}
          >
            My Sales
          </div>
        </div>
      )}
    </div>
  );
}
