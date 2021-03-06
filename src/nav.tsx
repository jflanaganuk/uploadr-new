import React, { useEffect, useRef, useState } from 'react';
import { ExtLink } from './extLink';

if (process.env.BROWSER) {
    require('./nav.scss');
}
import { Svg } from './svg';

export const Nav = () => {

    const [classname, setClassname] = useState("");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mainSection = document.querySelector('main');
        document.addEventListener('scroll', () => {
            if (!ref.current || !mainSection) return;
            if (window.pageYOffset >= ref.current.offsetTop) setClassname("blue");
            if (window.pageYOffset >= mainSection.offsetTop) setClassname("blue darker");
            
            if (window.pageYOffset < ref.current.offsetTop) setClassname("");
            if (window.pageYOffset < mainSection.offsetTop && window.pageYOffset >= ref.current.offsetTop) setClassname("blue");
        })
    }, [])    

    return (
        <section ref={ref} className={`navContainer ${classname}`}>
            <nav className="navInner">
                <a onClick={() => smoothScroll('body')}>Home</a>
                <a onClick={() => smoothScroll('#about-me')}>About Me</a>
                <a onClick={() => smoothScroll('#projects')}>Projects</a>
                <a onClick={() => smoothScroll('#skills')}>Skills</a>
                <ExtLink href="https://twitter.com/jflagg93"><Svg variant="twitter"/></ExtLink>
                <ExtLink href="https://github.com/jflanaganuk"><Svg variant="github"/></ExtLink>
                <ExtLink href="https://www.linkedin.com/in/joshua-flanagan-172636213/"><Svg variant="linkedin"/></ExtLink>
            </nav>
        </section>
    );
}

export function smoothScroll(selector: string) {
    const tempDomNode: HTMLDivElement | null = document.querySelector(selector);
    if (!tempDomNode) return;
    const rect = tempDomNode.getBoundingClientRect();
    window.scrollTo({
        top: rect.top + window.pageYOffset,
        behavior: 'smooth'
    })
}
