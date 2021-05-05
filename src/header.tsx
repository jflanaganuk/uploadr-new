import React from 'react';
import { ExtLink } from './extLink';
import { Svg } from './svg';

export const Header = () => {

    return (
        <header>
            <h1>Joshua Flanagan</h1>
            <h2>Web Developer - Nottingham 🇬🇧</h2>
            <h3>React | Typescript | Threejs | Node</h3>
                <div>
                    <ExtLink href="https://twitter.com/jflagg93"><Svg variant="twitter"/></ExtLink>
                    <ExtLink href="https://github.com/jflanaganuk"><Svg variant="github"/></ExtLink>
                    <ExtLink href="https://linkedin.com"><Svg variant="linkedin"/></ExtLink>
                </div>
        </header>
    )
}