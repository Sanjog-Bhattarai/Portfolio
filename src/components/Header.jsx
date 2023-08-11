import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <a href="/">
      <h2>Sanjog</h2>
    </a>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        <strong>Home</strong>
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
      <strong>Work</strong>
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
      <strong>Experiences</strong>
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
      <strong>Services</strong>
      </a>
      <a onClick={() => setMenuOpen(false)} href="#testimonial">
      <strong>Testimonials</strong>
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
      <strong>Contact</strong>
      </a>
    </div>
    <a href="sanjogbhattarai999@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
