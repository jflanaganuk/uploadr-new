import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import * as THREE from 'three';

import './app.scss'
import { Copyright } from "./copyright";
import { ExtLink } from "./extLink";
import { Header } from "./header";
import { Project } from "./project";
import { Svg } from "./svg";
import { Skills } from "./skills";
import { AboutMe } from "./aboutMe";

const pop = new Audio('./sounds/pop.mp3');
const inflate = new Audio('./sounds/inflate.mp3');

interface CustomSphereProps {
    direction: 'up' | 'down' | 'left' | 'right';
    movementSpeed: number;
    color?: number;
    hoverColor?: number;
}

function MovingSphere(props: JSX.IntrinsicElements['mesh'] & CustomSphereProps) {
    const { scene } = useThree()
    const mesh = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    useFrame((state) => { 
        if (!mesh.current) return null;
        if (clicked) {
            if (mesh.current.scale.x < 2) {
                mesh.current.scale.x += 0.003;
                mesh.current.scale.y += 0.003;
                mesh.current.scale.z += 0.003;
            } else {
                scene.remove(mesh.current)
                pop.play();
                setClicked(false)
            }
        } else {
            if (mesh.current.scale.x > 1) {
                mesh.current.scale.x -= 0.05;
                mesh.current.scale.y -= 0.05;
                mesh.current.scale.z -= 0.05;
            } else {
                mesh.current.scale.x = 1
                mesh.current.scale.y = 1
                mesh.current.scale.z = 1
            }
        }
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
    useEffect(() => {
        if (clicked) {
            inflate.play()
        } else {
            inflate.pause()
            inflate.currentTime = 0
        }
    }, [clicked])
    const color = props.color || 0x000000;
    const hoverColor = props.hoverColor || 0xFFFFFF;
    return (
        <mesh
            {...props}
            ref={mesh}
            onPointerDown={() => setClicked(true)}
            onPointerUp={() => setClicked(false)}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => {setHovered(false); setClicked(false)}}
        >
            {props.children}
            <meshStandardMaterial color={hovered ? hoverColor : color}/>
        </mesh>
    )
}

function MovingCamera (_props: JSX.IntrinsicElements['camera']) {
    const cameraRef = useRef<THREE.Camera>(null);
    useFrame((state) => {
        if (!cameraRef.current) return null;
        cameraRef.current.position.z += Math.cos(state.clock.elapsedTime) / 400;
        cameraRef.current.rotateZ(-0.0002)
    })
    return (
        <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 1]}/>
    )
}

const App = () => {

    return (
        <div className="container">
            <Canvas className="threeCanvas" style={{position: 'absolute', height: '100vh'}}>
                <MovingCamera/>
                <ambientLight/>
                <pointLight intensity={1} color={'blue'} position={[0, -10, -10]}/>
                <pointLight intensity={2} color={'white'} position={[0, 0, 10]}/>
                <pointLight intensity={2} color={'green'} position={[0, 10, -10]}/>
                <MovingSphere direction="up" movementSpeed={1} position={[5, 1.5, -8]} color={0x636e72} hoverColor={0x747f83}>
                    <sphereGeometry args={[1, 100, 100]} />
                </MovingSphere>
                <MovingSphere direction="left" movementSpeed={0.4} position={[-5, -2, -7]} color={0x0984e3} hoverColor={0x1a95f4}>
                    <sphereGeometry args={[0.8, 100, 100]} />
                </MovingSphere>
                <MovingSphere direction="right" movementSpeed={1} position={[7, -4, -6]} color={0x6c5ce7} hoverColor={0x7d6df8}>
                    <sphereGeometry args={[3, 100, 100]} />
                </MovingSphere>
            </Canvas>
            <Header/>
            <main>
                <section>
                    <div className="centeredTitle" id="about-me">
                        <h1>About Me</h1>
                    </div>
                    <AboutMe/>
                </section>
                <section>
                    <div className="centeredTitle" id="projects">
                        <h1>Projects</h1>
                    </div>
                    <Project
                        backgroundImage={'./assets/lofat.png'}
                        title="Lofat"
                        description="A PWA written using React/TS and The Movie Database API, uses custom built caching on the backend as well as the service worker to try and achieve maximum performance in lighthouse"
                        href="https://www.uploadr.co.uk/lofat"
                        images={[
                            {
                                src: "react",
                                alt: "React Logo",
                                type: "svg"
                            },
                            {
                                src: "./assets/typescript.jpg",
                                alt: "Typescript Logo",
                                type: "img"
                            },
                            {
                                src: "node",
                                alt: "Node Logo",
                                type: "svg"
                            },
                            {
                                src: "./assets/express.png",
                                alt: "Express Logo",
                                type: "img",
                                inverted: true
                            },
                            {
                                src: "./assets/htmlcssjs.png",
                                alt: "Html CSS & JS Logo",
                                type: "img"
                            },
                        ]}
                    />
                    <Project
                        backgroundImage={'./assets/trainer.png'}
                        title="Trainer - Three JS"
                        description="Example of using Three JS to render a product. The numbered circles can be hovered to reveal extra information and the model can be rotated completely around its axis. Material of the trainer can be changed - using Shopify's Trainer model"
                        href="https://www.uploadr.co.uk/trainer"
                        images={[
                            {
                                src: "./assets/threejs.png",
                                alt: "ThreeJS Logo",
                                type: "img",
                                inverted: true
                            }
                        ]}
                    />
                    <Project
                        backgroundImage={'./assets/phaseronline.png'}
                        title="Phaser Online"
                        description="A proof of concept for using the framework 'Phaser' on a server with JSDom, this allows for creating multiplayer games much easier (open the link in multiple tabs to see). Client controls movement commands and rendering, server handles actual movement and collisions"
                        href="http://www.uploadr.co.uk:9090"
                        images={[
                            {
                                src: "./assets/phaser.png",
                                alt: "Phaser Logo",
                                type: "img"
                            },
                            {
                                src: "react",
                                alt: "React Logo",
                                type: "svg"
                            },
                            {
                                src: "./assets/typescript.jpg",
                                alt: "Typescript Logo",
                                type: "img"
                            },
                            {
                                src: "node",
                                alt: "Node Logo",
                                type: "svg"
                            },
                        ]}
                    />
                    <Project
                        backgroundImage={'./assets/storybook.png'}
                        title="Documentation with Storybook"
                        description="Playing DND with a program called Foundry VTT, we found it useful to have a place for documentation on how to use the software. This was built with Storybook and the theme customised per their spec."
                        href="https://www.uploadr.co.uk/foundryhelp"
                        images={[
                            {
                                src: "storybook",
                                alt: "Storybook Logo",
                                type: "svg"
                            }
                        ]}
                    />
                    <Project
                        backgroundImage={'./assets/blog.png'}
                        title="Blog"
                        description="A blog created with express and markdown to write down thoughts I have and post (hopefully) useful tutorials"
                        href="https://www.uploadr.co.uk/blog"
                        images={[
                            {
                                src: "node",
                                alt: "Node Logo",
                                type: "svg"
                            },
                            {
                                src: "./assets/express.png",
                                alt: "Express Logo",
                                type: "img",
                                inverted: true
                            },
                            {
                                src: "./assets/markdown.jpg",
                                alt: "Markdown Logo",
                                type: "img"
                            },
                            {
                                src: "./assets/htmlcssjs.png",
                                alt: "Html CSS & JS Logo",
                                type: "img"
                            },
                        ]}
                    />
                </section>
                <section>
                    <div className="centeredTitle" id="skills">
                        <h1>Skills</h1>
                    </div>
                    <Skills/>
                </section>
            </main>
            <footer>
                <h1>Social Links</h1>
                <div>
                    <ExtLink href="https://twitter.com/jflagg93"><Svg variant="twitter"/></ExtLink>
                    <ExtLink href="https://github.com/jflanaganuk"><Svg variant="github"/></ExtLink>
                    <ExtLink href="https://www.linkedin.com/in/joshua-flanagan-172636213/"><Svg variant="linkedin"/></ExtLink>
                </div>
                <Copyright/>
            </footer>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById("root"));
