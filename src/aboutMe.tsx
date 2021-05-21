import React from 'react';

import './aboutMe.scss';
import { Wizard } from './wizard';

export const AboutMe = () => {
    return (
        <div className="aboutMeContainer">
            <ul>
                <li>Grew up in nottingham</li>
                <li>Avid gamer</li>
                <li>Enjoy guitar</li>
                <li>Dungeon Master by Day</li>
            </ul>
            <Wizard/>
        </div>
    )
}