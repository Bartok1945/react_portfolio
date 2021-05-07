import React from "react";
import Project from "../components/Project";
import AdventureCompanionImage from "../../src/img/charactersheet.png";
import NoteTakerImage from "../../src/img/notetaker.png";
import gottaGoImage from "../../src/img/gottaGO.png";
import PasswordGeneratorImage from "../../src/img/passwordgenerator.png";
import BurgerAppImage from "../img/burgerapp.PNG";
import WorkoutImage from "../img/workout.PNG";


const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <main className="container mt-5">
        <div className="row">
          <section className="col-md-9">
            <div>
              <h1>Portfolio</h1>
            </div>
            <div className="content">
              <div className="row">
                <Project
                  thumbnail={AdventureCompanionImage}
                  altText={"Adventure Companion"}
                  deployedLink={"https://bartok1945.github.io/adventure_companion/"}
                  sourceCode={"https://github.com/Bartok1945/adventure_companion"}
                />
                <Project
                  thumbnail={gottaGoImage}
                  altText={"gottaGO App"}
                  deployedLink={"https://lit-reef-23500.herokuapp.com/"}
                  sourceCode={"https://github.com/nvandenberge/gottaGO"}
                />
              </div>
              <div className="row">
                <Project
                  thumbnail={NoteTakerImage}
                  altText={"Note Taker"}
                  deployedLink={"https://quiet-scrubland-92784.herokuapp.com/"}
                  sourceCode={"https://github.com/Bartok1945/note_taker"}
                />
                <Project
                  thumbnail={PasswordGeneratorImage}
                  altText={"Password Generator"}
                  deployedLink={"https://bartok1945.github.io/password_generator/"}
                  sourceCode={"https://github.com/Bartok1945/password_generator"}
                />
                <div className="row">
                <Project
                  thumbnail={WorkoutImage}
                  altText={"Fitness tracker"}
                  deployedLink={"https://glacial-retreat-20847.herokuapp.com/?id=60954e0314d06f001560b112"}
                  sourceCode={"https://github.com/Bartok1945/fitness_tracker"}
                />
                <Project
                  thumbnail={BurgerAppImage}
                  altText={"Eat the burger app"}
                  deployedLink={"https://vast-brushlands-06178.herokuapp.com/"}
                  sourceCode={"https://github.com/Bartok1945/burger_app"}
                />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <br></br>
    </div>
  );
};

export default Portfolio;