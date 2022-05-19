import React from 'react';
import Link from 'next/link';
// import resume from '../../assets/Resume.pdf';
const Footer = () => {
  return (
    <div className="">
      <footer className="footer">
        <div className="footer__links">
          <div className="footer__links-nav">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer__links-social">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/konstantinos-zisopoulos-533678211"
            >
              Linked In
            </a>
            <a target="_blank" href="https://github.com/kzisopoulos">
              Github
            </a>
            <a href="/resume.pdf" target="_blank">
              Download CV
            </a>
          </div>
        </div>
        <div className="footer__copyright">
          Copyright &copy; Konstantinos Zisopoulos {new Date().getFullYear()}{' '}
          All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
