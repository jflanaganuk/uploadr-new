import React from 'react';

//@ts-ignore
import WizardSvg from './svgs/wizard.svg';

import './wizard.scss'

export const Wizard = () => {
    return <div className="wizardContainer" dangerouslySetInnerHTML={{__html: WizardSvg}}/>
}