import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import book from '../assets/images/book.png';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary wrap">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            R&D & Product Management.
            <br/>
            <br/>

            Had the privilege of spending the last 19 years building successful products from scratch with focus on feature definition, team creation and general management of projects.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Co-Founder & CEO</h3>
              <div className="subheading mb-3">500Tech</div>
              <p>
                Bespoke projects and consultancy in JS technologies: React, React-Native, Angular & Node with expert consultants in Tel Aviv & NYC.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2012 - 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Co-Founder & Instructor</h3>
              <div className="subheading mb-3">Hackademy</div>
              <p>
                Technical training for companies and teams.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2013 - 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Architect</h3>
              <div className="subheading mb-3">Jungo</div>
              <p>
                Development and Architectural design of Embedded USB stack solutions.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2004 - 2008</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">IT Architect</h3>
              <div className="subheading mb-3">IAF</div>
              <p>
                IT infrastructure for large Airforce development organization.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2000 - 2004</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">The Open University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science</div>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Mamram - IDF</h3>
              <div className="subheading mb-3">Programming training</div>
              <div>Computer Science</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="publications"
      >
        <div className="w-100">
          <h2 className="mb-5">Publications & Talk</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content book-content">
              <h3 className="mb-0">Books</h3>
              <div className="subheading mb-3">
                <a href="https://redux-book.com" target="_blank">
                  <img src={ book } alt="Complete Redux Book"/>
                  <p>
                    The Complete Redux Book
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Public Talks</h3>
              <ul className="publications">
                <li>
                  <iframe width="150" height="80" src="https://www.youtube.com/embed/tCFgYwkBQBo" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
                </li>
                <li>
                  <iframe width="150" height="80" src="https://www.youtube.com/embed/Gjiu7Lgdg3s" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
                </li>
                <li>
                  <iframe width="150" height="80" src="https://www.youtube.com/embed/xsKYAa1ZXpQ" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
                </li>
                <li>
                  <iframe width="150" height="80" src="https://www.youtube.com/embed/rEkV1beHOTc" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
                </li>
                <li>
                  <iframe width="150" height="80" src="https://www.youtube.com/embed/58CLZuz27NU" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
                </li>
                <li>
                  <iframe width="150" height="80" src="https://www.youtube.com/embed/ssyqOYISPco" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
                </li>
                <li>
                  <iframe width="150" height="80" src="https://www.youtube.com/embed/pYmAwyaxl5Y" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Courses</h3>

              <div className="subheading mb-3">Cisco, Microsoft, Checkpoint..</div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
