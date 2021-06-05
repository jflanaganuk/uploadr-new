import React from 'react';

let WizardSvg;
if (process.env.BROWSER) {
    require('./wizard.scss');
    WizardSvg = require('./svgs/wizard.svg');
}

export const Wizard = () => {
    if (!WizardSvg) return null;
    return <div className="wizardContainer" dangerouslySetInnerHTML={{__html: WizardSvg ? WizardSvg.default : ""}}/>
}