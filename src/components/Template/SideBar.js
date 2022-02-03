import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Harsh Vardhan</h2>
        <p><a href="harshvardhanparaiya@gmail.com">harshvardhan@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Harsh. I like developing things.
        I am an <a href="https://iitbhu.ac.in/">IIT BHU</a> graduate, and
        Software Developer at <a href="https://one.walmart.com/content/globaltechindia/en_in.html">Walmart</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Harsh Vardhan <Link to="/">harsh.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
