import React from "react";
import ThomHeadshot from '../../src/img/rsz_10.png'

const About = () => {
    return (
        <div>
            <main className="container mt-5 text-white">
                <div className="row">
                    <section className="col-md-8">
                        <div>
                            <h1>About Me</h1>
                        </div>
                        <div className="content">
                            <img
                                src={ThomHeadshot}
                                height="200"
                                alt="Headshot of Thom Huenger"
                                className="rounded float-left"
                                id="headshotImg"
                            />
                            <div className="about-section">
            Welcome to my personal portfolio! Here you can view some of my recent development projects
         download my resume, or send me an email, but first let me introduce myself.
        My name is Thom Huenger and I am a musician and teaching artist transitioning into web development.
         I am finishing a full-stack bootcamp through Johns Hopkins University in May 2021.
         I am seeking any and all opportunities to continue honing my coding skills after I complete the coding bootcamp.
         My background is in music composition, theatre, and education which has giving me important experience in communication and
         collaboration, which I have learned to be an intergral component to web development.
         
              <br />
                            <br />
              In addition to my skill set as a musician, I can juggle poorly, and make pretty good pizza. When I grow up I
          want to be a internationally recognized pop music icon with a successful crossover career
          in film/television, and an impressive, and diverse, investment portfolio.
          <br />
          <br />
              <a href="https://github.com/bartok1945" target="_blank" rel="noreferrer">
                                GitHub
              </a>
              &nbsp;and&nbsp;
               <a href="https://www.linkedin.com/in/thom-huenger-b81893158/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
              </a>
              &#33;
            </div>
            </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default About;