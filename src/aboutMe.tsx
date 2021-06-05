import React from 'react';

if (process.env.BROWSER) {
    require('./aboutMe.scss');
}
import { Wizard } from './wizard';

export const AboutMe = () => {
    return (
        <div className="aboutMeContainer">
            <section className="aboutMeSection">
                <div>
                    <h1><i>Hi!</i> I'm Joshua Flanagan<span className="aboutMeWave">👋</span></h1>
                    <p>I am a front end web developer currently located in the Nottingham area of the UK</p>
                    <p>I am an avid gamer and enjoy Rocket League and Minecraft to name a few</p>
                    <p>I also like to play guitar and create music</p>
                </div>
                <img className="imageOfMe" src="./assets/me-transparent.png" alt="Picture of Me" />
            </section>
            <section className="aboutMeSection">
                <div>
                    <h2>Dungeon Master since 2020</h2>
                    <p>I have been running a successful dungeon's and dragons fifth edition campaign for over a year, and we only go completely off plan all the time!</p>
                </div>
                <Wizard/>
            </section>
        </div>
    )
}