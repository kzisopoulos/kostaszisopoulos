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
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a
            className="hover-underline-animation"
            onClick={() => setOpen(!open)}
          >
            projects
          </a>
        </Link>
        <Link href="/contact">
          <a
            className="hover-underline-animation"
            onClick={() => setOpen(!open)}
          >
            Contact
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
        <div className="navbar__logo">
          <h1>kostas zisopoulos.</h1>
          <span className="navbar__logo-subtitle">
            web developer & infrastructure engineer
          </span>
        </div>
      </Link>
      <div className="navbar__links">
        <Link href="/">
          <a className="hover-underline-animation">Home</a>
        </Link>
        <Link href="/projects">
          <a className="hover-underline-animation">Projects</a>
        </Link>
        <Link href="/contact">
          <a className="hover-underline-animation">Contact</a>
        </Link>
      </div>
      {open && <MobileNav open={open} setOpen={setOpen} />}
      <div className="navbar__toggle-wrapper">
        {open ? (
          <Image
            src="/x.svg"
            width={30}
            height={30}
            className="navbar__toggle-btn"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <Image
            src="/list.svg"
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

<Image
  src="/x.svg"
  width={30}
  height={30}
  className="navbar__toggle-btn"
  onClick={() => setOpen(!open)}
/>;
