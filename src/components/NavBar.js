import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";




import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa"
import { AiOutlineGithub } from "react-icons/ai"
import { ExternalLink } from 'react-external-link';
import linkedin from "../assets/img/AppImgs/svg/nav-icon1.svg";
import telegram from "../assets/img/AppImgs/svg/telegram.svg";
import email from "../assets/img/AppImgs/svg/email.svg";
import github from "../assets/img/AppImgs/svg/icons8-github.svg"

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>

       

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>

            <span className="navbar-text">

              <div className="social-icon">
                 <ExternalLink href=""> <img src={linkedin}  /> </ExternalLink>
              <ExternalLink href="https://t.me/Andromeda123612"> <img src={telegram} style={{transform: "scale(1.35)"}} /> </ExternalLink>
              <ExternalLink href="">  <img src={email} style={{transform: "scale(1.3)"}} /> </ExternalLink>
              <ExternalLink href="https://github.com/IlliaMel">  <img src={github} style={{transform: "scale(1.32)"}} /> </ExternalLink>
              </div>

              <HashLink to='#connect'>
                <button ><span>Let’s Connect</span></button>
              </HashLink>

            </span>
          </Navbar.Collapse >
        </Container >
      </Navbar >
    </Router >
  )
}
