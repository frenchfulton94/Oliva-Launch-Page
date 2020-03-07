import React from 'react';

// @ts-ignore
export const OlivaButton = (props: any) => {
    const {title} = props;
    const styleClass = 'oliva-button';
    return (
        <a href="#sign-up" className={styleClass}>
            <p>{title}</p>
        </a>
    );
};

