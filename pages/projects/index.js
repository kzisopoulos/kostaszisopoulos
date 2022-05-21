import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="page__container">
      <h1 className="hero__title">Check out my latest work!</h1>
      <h2>Click on each project for detailed analysis</h2>

      {/* start of cards container */}
      <div className="projects">
        <Link href="/projects/collaborate">
          <div className="card">
            <div className="card__title">
              <h2>Collaborate App</h2>
            </div>
            <div className="card__image">
              <Image
                src="/collab_thumb.png"
                layout="responsive"
                width={300}
                height={150}
              />
            </div>
            <div className="card__description">
              <p>
                A small CRM type application that offers out of the box basic
                project management features like:
              </p>
            </div>
            <div className="features">
              <span>Login System</span>
              <span>Categories</span>
              <span>Assignees</span>
              <span>Online Status</span>
              <span>Comments</span>
              <span>Due dates</span>
              <span>Archiving</span>
            </div>
          </div>
        </Link>
      </div>
      {/* end of cards container */}
    </div>
  );
};

export default Projects;
