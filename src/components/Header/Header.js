import React from "react";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { Link } from "react-scroll";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <FaConnectdevelop size="3rem" />
          <Span>&#123; drewhollis.dev &#125;</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link activeClass="active" to="projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/drewhollis">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/drew-hollis-a69544a6/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons component="a" href="mailto:drew@drewhollis.dev">
        <AiOutlineMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

