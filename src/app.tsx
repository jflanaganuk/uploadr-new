import React from "react";
import ReactDOM from "react-dom";

import './app.scss'
import { Copyright } from "./copyright";
import { ExtLink } from "./extLink";
import { Project } from "./project";
import { Svg } from "./svg";

const App = () => {
    return (
        <div className="container">
            <header>
                <h1>Joshua Flanagan</h1>
                <h2>Web Developer - Nottingham 🇬🇧</h2>
                <h3>React | Typescript | Threejs | Rust</h3>
            </header>
            <main>
                <section>
                    <h1 className="centeredTitle">About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis assumenda corrupti laborum beatae nobis iusto amet! Voluptatem provident esse illum quibusdam dolore tempore. Ex doloremque adipisci officiis. Explicabo, sunt.</p>
                </section>
                <section>
                    <h1 className="centeredTitle">Projects</h1>
                    <Project
                        backgroundImage={'./assets/lofat.png'}
                        title="Lofat"
                        description="List of Films and TV - a PWA written using React/TS and The Movie Database API"
                        href="https://www.uploadr.co.uk/imdbfetch"
                    />
                    <Project
                        backgroundImage={'./assets/trainer.png'}
                        title="Trainer - Three JS"
                        description="Example of Three JS with raycasted informaion bubbles, material of the trainer can be changed - using Shopify's Trainer model"
                        href="https://www.uploadr.co.uk/trainer"
                    />
                    <Project
                        backgroundImage={'./assets/phaseronline.png'}
                        title="Phaser Online"
                        description="A proof of concept for using the framework 'Phaser' on a server with JSDom, this allows for creating multiplayer games much easier (open the link in multiple tabs to see)"
                        href="http://www.uploadr.co.uk:9090"
                    />
                    <Project
                        backgroundImage={'./assets/storybook.png'}
                        title="Documentation with Storybook"
                        description="Playing DND with a program called Foundry VTT, we found it useful to have a place for documentation on how to use the software. This was built with Storybook"
                        href="https://www.uploadr.co.uk/foundryhelp"
                    />
                </section>
                <section>
                    <h1 className="centeredTitle">Skills</h1>
                    <ul>
                        <li>This</li>
                        <li>This</li>
                        <li>This</li>
                        <li>This</li>
                    </ul>
                </section>
            </main>
            <footer>
                <h1>Social Links</h1>
                <div>
                    <ExtLink href="https://twitter.com/jflagg93"><Svg variant="twitter"/></ExtLink>
                    <ExtLink href="https://github.com/jflanaganuk"><Svg variant="github"/></ExtLink>
                    <ExtLink href="https://linkedin.com"><Svg variant="linkedin"/></ExtLink>
                </div>
                <Copyright/>
            </footer>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));
