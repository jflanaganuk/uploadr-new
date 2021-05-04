import React from 'react';
import { ExtLink } from './extLink';

import './project.scss';

interface ProjectProps {
    backgroundImage: string;
    title: string;
    description: string;
    href: string;
}

const overlay = `
    linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.45)
    )
`

export const Project = (props: ProjectProps) => {
    return (
        <div className="projectLinkContainer">
        <ExtLink href={props.href}>
            <div className="projectContainer" style={{backgroundImage: `${overlay}, url(${props.backgroundImage})`}}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </ExtLink>
        </div>
    )
}