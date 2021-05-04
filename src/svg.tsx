import React from 'react';

//@ts-ignore
import twitter from './svgs/twitter.svg';
//@ts-ignore
import github from './svgs/github.svg';
//@ts-ignore
import linkedin from './svgs/linkedin.svg';

interface SvgProps {
    variant: "twitter" | "github" | "linkedin";
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
            default:
                return null;
        }
    })();
    return <div className={`svgContainer ${props.className}`} dangerouslySetInnerHTML={{__html: svg}}/>
}