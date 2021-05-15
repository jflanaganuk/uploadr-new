import React from 'react';
import { Nav } from './nav';

import './header.scss'

export const Header = () => {

    return (
        <header>
            <h1>Joshua Flanagan</h1>
            <h2>Web Developer - Nottingham 🇬🇧</h2>
            <h3><span className="autoTyper"></span></h3>
            <Nav/>
            <div className="arrowDown"/>
        </header>
    )
}