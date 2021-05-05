import React from 'react';
import { ExtLink } from './extLink';

import './nav.scss';
import { Svg } from './svg';

export const Nav = () => {

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
        <section className={`navContainer`}>
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