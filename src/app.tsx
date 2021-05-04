import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import './app.scss'
import { Copyright } from "./copyright";
import { ExtLink } from "./extLink";
import { Header } from "./header";
import { Project } from "./project";
import { Svg } from "./svg";
import { Skills } from "./skills";

function MovingSphere(props: JSX.IntrinsicElements['mesh'] & {direction: 'up' | 'down' | 'left' | 'right'; movementSpeed: number}) {
    const mesh = useRef<THREE.Mesh>(null);
    useFrame((state) => { 
        if (!mesh.current) return null;
        switch (props.direction) {
            case 'left':
                return mesh.current.position.x -= Math.sin(state.clock.elapsedTime) / (1 / props.movementSpeed * 1000)
            case 'right':
                return mesh.current.position.x += Math.sin(state.clock.elapsedTime) / (1 / props.movementSpeed * 1000)
            case 'down':
                return mesh.current.position.y -= Math.sin(state.clock.elapsedTime) / (1 / props.movementSpeed * 1000)
            case 'up':
                return mesh.current.position.y += Math.sin(state.clock.elapsedTime) / (1 / props.movementSpeed * 1000)
            default:
                break;
        }
    })
    return (
        <mesh
            {...props}
            ref={mesh}
        >
            {props.children}
        </mesh>
    )
}

const App = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, []);

    return (
        <div className="container">
            <Canvas className="threeCanvas" style={{position: 'fixed', height: '100vh', pointerEvents: 'none'}}>
                <PerspectiveCamera makeDefault position={[0, 0, 0]}/>
                <ambientLight/>
                <pointLight intensity={1} color={'blue'} position={[0, -10, -10]}/>
                <pointLight intensity={2} color={'white'} position={[0, 0, 10]}/>
                <pointLight intensity={2} color={'green'} position={[0, 10, -10]}/>
                <MovingSphere direction="up" movementSpeed={1} position={[5, 1.5, -7]}>
                    <sphereGeometry args={[1, 100, 100]} />
                    <meshStandardMaterial color={0x636e72}/>
                </MovingSphere>
                <MovingSphere direction="left" movementSpeed={0.4} position={[-5, -2, -7]}>
                    <sphereGeometry args={[0.8, 100, 100]} />
                    <meshStandardMaterial color={0x0984e3}/>
                </MovingSphere>
                <MovingSphere direction="right" movementSpeed={1} position={[7, -4, -7]}>
                    <sphereGeometry args={[3, 100, 100]} />
                    <meshStandardMaterial color={0x6c5ce7}/>
                </MovingSphere>
            </Canvas>
            <Header/>
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
                    <Skills/>
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

ReactDOM.render(<App/>, document.getElementById("root"));
