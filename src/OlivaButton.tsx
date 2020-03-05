import React from 'react';

// @ts-ignore
export const OlivaButton = (props: any) => {
    const {title, className} = props;
    const styleClass = className + ' oliva-button';
    console.log(styleClass)
    return (
        <a className={styleClass}>
            <p>{title}</p>
        </a>
    );
};

