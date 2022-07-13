import React from "react";
import Link from "next/link";
const collaborate = () => {
  return (
    <div className="page__container">
      <h1>Collaborate application</h1>
      <div className="collab__desc">
        <p>
          Collaborate app, is a small CRM type application that offers out of
          the box basic project management features and uses a wide variety of
          techniques and technologies.
        </p>
        <p>
          Its a work in progress and it is based upon the idea of Shaun Pelling
          , my mentor , it started as a learning project and I plan on keep
          working on it and keep adding new exciting features.
        </p>
        <p>
          Now its a full scale React.js application which handles and utilizes
          Firebase for authorization and real time database needs.
        </p>
      </div>
      <div className="hero__cards">
        <div className="card">
          <div className="card__title">
            <h2>features</h2>
          </div>
          <ul className="card__content">
            <li>
              <h2>Categories</h2>
            </li>
            <li>
              <h2>Assignees</h2>
            </li>
            <li>
              <h2>Online Status</h2>
            </li>
            <li>
              <h2>Comments</h2>
            </li>
            <li>
              <h2>Due dates</h2>
            </li>
            <li>
              <h2>Archiving</h2>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="card__title hue">
            <h2>TECH</h2>
          </div>
          <ul className="card__content">
            <li>
              <h2>REACT.js</h2>
            </li>
            <li>
              <h2>CRUD operations</h2>
            </li>
            <li>
              <h2>Global state</h2>
            </li>
            <li>
              <h2>log in system</h2>
            </li>
            <li>
              <h2>Firebase Auth </h2>
            </li>
            <li>
              <h2>Firebase Realtime DB</h2>
            </li>
          </ul>
        </div>
      </div>

      <div className="collab__links">
        <a
          href="https://collab-f3cc5.firebaseapp.com/login"
          target="_blank"
          className="btn"
          rel="noopener noreferrer"
        >
          <h2>check it out</h2>
        </a>

        <Link href="/contact">
          <a className="btn hue">
            <h2>Request demo</h2>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default collaborate;
