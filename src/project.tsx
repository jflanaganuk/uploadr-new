import React from 'react';
import { ExtLink } from './extLink';

if (process.env.BROWSER) {
    require('./project.scss');
}
import { Svg } from './svg';

interface ProjectProps {
    backgroundImage: string;
    title: string;
    description: string;
    href: string;
    images: {
        type: 'img' | 'svg';
        src: string;
        alt: string;
        inverted?: boolean;
    }[];
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
            <div 
                className="projectContainer" 
                style={
                    {
                        backgroundImage: `${overlay}, url(${props.backgroundImage})`
                    }
                }
            >
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="projectImageContainer">
                {props.images.map((image, index) => {
                    if (image.type === "img" ) return <img key={`${image.alt}${index}`} className={`projectImage ${image.inverted && "projectImageInvert"}`} src={image.src} alt={image.alt}/>
                    return <Svg key={`${image.alt}${index}`} className="projectImageSvg" variant={image.src}/>
                })}
                </div>
            </div>
        </ExtLink>
        </div>
    )
}