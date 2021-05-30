import React from 'react';

//@ts-ignore
import twitter from './svgs/twitter.svg';
//@ts-ignore
import github from './svgs/github.svg';
//@ts-ignore
import linkedin from './svgs/linkedin.svg';
//@ts-ignore
import node from './svgs/node.svg';
//@ts-ignore
import react from './svgs/react.svg';
//@ts-ignore
import storybook from './svgs/storybook.svg';

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
    return <div className={`svgContainer ${props.className}`} dangerouslySetInnerHTML={{__html: svg}}/>
}