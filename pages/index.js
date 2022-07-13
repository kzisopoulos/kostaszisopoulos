import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="page__container">
      <h1 className="hero__title">
        Developing for the web today, with the technologies of tomorrow
      </h1>
      <h1>Hello there im kostas a frontend web developer!</h1>
      <div className="hero">
        <div className="hero__quick-info">
          <p>
            I am devoted to crafting beautiful websites , custom web
            applications and eshops focused on simplicity and purpose.
          </p>
          <p>
            What I strive for is constant learning and keeping up to date with
            the latest technologies and trends to stay relavant in the field.
          </p>
          <div>
            <Link href="/projects">
              <a className="btn">
                <h2>check out my work</h2>
              </a>
            </Link>
          </div>
        </div>
        <div className="hero__image-container">
          <Image
            src="/hero.svg"
            className="hero__image"
            alt="illustration of site builing"
            width={600}
            height={300}
            layout="responsive"
          />
        </div>
      </div>

      <div className="hero__cards">
        <div className="card">
          <div className="card__title">
            <h2>web stack</h2>
          </div>
          <ul className="stack__list">
            <li>
              <h2>HTML / CSS / Javascript</h2>
            </li>
            <li>
              <h2>Node.js / Express.js</h2>
            </li>
            <li>
              <h2>React.js / Next.js</h2>
            </li>
            <li>
              <h2>SASS / BEM</h2>
            </li>
            <li>
              <h2>Firebase / Mongodb</h2>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="card__title hue">
            <h2>IT stack</h2>
          </div>
          <ul className="stack__list">
            <li>
              <h2>Network Maintenance</h2>
            </li>
            <li>
              <h2>Server maintenance</h2>
            </li>
            <li>
              <h2>troubleshooting</h2>
            </li>
            <li>
              <h2>Active Directory</h2>
            </li>
            <li>
              <h2>systems monitoring</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
