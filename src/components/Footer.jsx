import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Founder"
        />

        <h2>Sanjog Bhattarai</h2>
        <p>Keep Learning,Keep Growing.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/sanjog-bhattarai" target={"blank"}>
            <AiFillLinkedin/>
          </a>
          <a href="https://www.instagram.com/sanjog_999" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="/" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
