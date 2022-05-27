import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MobileNav = ({ open, setOpen }) => {
  return (
    <div className="navbar__mobile">
      <ul className="navbar__mobile-links">
        <Link href="/">
          <a
            className="hover-underline-animation"
            onClick={() => setOpen(!open)}
          >
            <h3>home</h3>
          </a>
        </Link>
        <Link href="/projects">
          <a
            className="hover-underline-animation"
            onClick={() => setOpen(!open)}
          >
            <h3>projects</h3>
          </a>
        </Link>
        <Link href="/contact">
          <a
            className="hover-underline-animation"
            onClick={() => setOpen(!open)}
          >
            <h3>Contact</h3>
          </a>
        </Link>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="navbar__logo" onClick={() => setOpen(false)}>
          <h1>kostas zisopoulos.</h1>
          <span className="navbar__logo-subtitle">
            web developer & infrastructure engineer
          </span>
        </div>
      </Link>
      <div className="navbar__links">
        <Link href="/">
          <a className="hover-underline-animation">
            <h3>Home</h3>
          </a>
        </Link>
        <Link href="/projects">
          <a className="hover-underline-animation">
            <h3>Projects</h3>
          </a>
        </Link>
        <Link href="/contact">
          <a className="hover-underline-animation">
            <h3>Contact</h3>
          </a>
        </Link>
      </div>
      {open && <MobileNav open={open} setOpen={setOpen} />}
      <div className="navbar__toggle-wrapper">
        {open ? (
          <Image
            src="/x.svg"
            alt="close button"
            width={30}
            height={30}
            className="navbar__toggle-btn"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <Image
            src="/list.svg"
            alt="menu button"
            width={30}
            height={30}
            className="navbar__toggle-btn"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
