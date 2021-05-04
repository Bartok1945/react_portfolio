import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioPage">
            <h1 class="portfolio">Portfolio</h1>
            <div class="container">

                <div class="row">

                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src="assets\charactersheet.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Adventure Companion</h5>
                                    <p class="card-text">A quick reference guide and character sheet for Dungeons and Dragons.</p>
                                </div>

                                <div class="card-body">
                                    <a href="https://bartok1945.github.io/adventure_companion/" class="card-link" target="_blank">Github Page</a>
                                    <a href="https://github.com/Bartok1945/adventure_companion" class="card-link" target="_blank">Repository</a>
                                </div>
                            </img>
                        </div>
                        <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                <img src="assets\passwordgenerator.png" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Password Generator</h5>
                                        <p class="card-text">Choose what combination of numbers, upper and lowercase letters,
                                        and special characters you want and generatre a random password.
                                        </p>
                                    </div>

                                    <div class="card-body">
                                        <a href="https://bartok1945.github.io/password_generator/" class="card-link" target="_blank">Github Page</a>
                                        <a href="https://github.com/Bartok1945/password_generator" class="card-link" target="_blank">Repository</a>
                                    </div>
                                </img>
                            </div>
                        </div>

                        <div class="row mb-5">

                            <div class="col-md-4">
                                <div class="card" style="width: 18rem;">
                                    <img src="assets\notetaker.png" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Note Taker</h5>
                                            <p class="card-text">A simple CRUD appication that allows you to add, save, and delete notes.</p>
                                        </div>

                                        <div class="card-body">
                                            <a href="https://github.com/Bartok1945/note_taker" class="card-link" target="_blank">Github Page</a>
                                            <a href="https://quiet-scrubland-92784.herokuapp.com/" class="card-link" target="_blank">Deploy Link</a>
                                        </div>
                                    </img>


                                </div>
                                <div class="col-md-4">
                                    <div class="card" style="width: 18rem;">
                                        <img src="assets\gottaGO.png" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">gottaGO</h5>
                                                <p class="card-text">Application designed for finding, rating, and reviewing public restrooms.</p>
                                            </div>

                                            <div class="card-body">
                                                <a href="https://github.com/Bartok1945/gottaGO#link" class="card-link" target="_blank">Github Page</a>
                                                <a href="https://murmuring-dawn-63159.herokuapp.com/" class="card-link" target="_blank">Deploy Link</a>
                                            </div>
                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
};
export default portfolio;