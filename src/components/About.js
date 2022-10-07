import React from "react";

function About() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>📝 About Me 📝</h2>
            </header>
            <div className="About-body">
                <div className="who">
                    <h1>Who am I?</h1>
                    <p className="about">Hey there. My name is Jonathan Derek McArthur and I am an aspiring coder and hardworking student at the FlatIron School of coding!</p>
                </div>
                <div className="plans">
                    <h1>Plans for this project?</h1>
                    <p className="about">
                        The goal for this cookbook project would be a fully flesh out app that would allow the user to create, store, and share homemade recipes.
                    </p>
                    <p className="about">
                        There would be an option to submit your own photo for the recipe image along with the samples to choose from.
                    </p>
                </div>
            </div>
        </div>
    );
};
                        


export default About;