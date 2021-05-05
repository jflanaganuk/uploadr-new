import React, { useEffect, useRef, useState } from 'react';
import { ExtLink } from './extLink';

import './nav.scss';
import { Svg } from './svg';

export const Nav = () => {

    const [classname, setClassname] = useState("");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mainSection = document.querySelector('main');
        document.addEventListener('scroll', () => {
            if (!ref.current || !mainSection) return;
            console.log(window.pageYOffset, ref.current.offsetTop, mainSection.offsetTop)
            if (window.pageYOffset >= ref.current.offsetTop) setClassname("blue");
            if (window.pageYOffset >= mainSection.offsetTop) setClassname("blue darker");
            
            if (window.pageYOffset < ref.current.offsetTop) setClassname("");
            if (window.pageYOffset < mainSection.offsetTop && window.pageYOffset >= ref.current.offsetTop) setClassname("blue");
        })
    }, [])    

    function smoothScroll(selector: string) {
        const tempDomNode: HTMLDivElement | null = document.querySelector(selector);
        if (!tempDomNode) return;
        const rect = tempDomNode.getBoundingClientRect();
        window.scrollTo({
            top: rect.top + window.pageYOffset,
            behavior: 'smooth'
        })
    }

    return (
        <section ref={ref} className={`navContainer ${classname}`}>
            <nav className="navInner">
                <a onClick={() => smoothScroll('body')}>Home</a>
                <a onClick={() => smoothScroll('#about-me')}>About Me</a>
                <a onClick={() => smoothScroll('#projects')}>Projects</a>
                <a onClick={() => smoothScroll('#skills')}>Skills</a>
                <ExtLink href="https://twitter.com/jflagg93"><Svg variant="twitter"/></ExtLink>
                <ExtLink href="https://github.com/jflanaganuk"><Svg variant="github"/></ExtLink>
                <ExtLink href="https://linkedin.com"><Svg variant="linkedin"/></ExtLink>
            </nav>
        </section>
    );
}