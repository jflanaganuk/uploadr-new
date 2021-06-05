import React from 'react';

let twitter, github, linkedin, node, react, storybook;

if (process.env.BROWSER) {
    twitter = require('./svgs/twitter.svg');
    github = require('./svgs/github.svg');
    linkedin = require('./svgs/linkedin.svg');
    node = require('./svgs/node.svg');
    react = require('./svgs/react.svg');
    storybook = require('./svgs/storybook.svg');
} 

interface SvgProps {
    variant: string;
    className?: string;
}

export const Svg = (props: SvgProps) => {
    const svg = (function(){
        switch (props.variant) {
            case "twitter":
                return twitter;
            case "github":
                return github;
            case "linkedin":
                return linkedin;
            case "node":
                return node;
            case "react":
                return react;
            case "storybook":
                return storybook;
            default:
                return null;
        }
    })();
    if (!svg) return null;
    return <div className={`svgContainer ${props.className}`} dangerouslySetInnerHTML={{__html: svg.default}}/>
}