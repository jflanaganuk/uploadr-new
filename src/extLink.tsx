import React, { ReactNode } from 'react';

interface ExtLinkProps {
    href: string;
}

export const ExtLink = (props: ExtLinkProps & { children: ReactNode }) => {
    return <a target="_blank" rel="noopener" href={props.href}>{props.children}</a>
}
