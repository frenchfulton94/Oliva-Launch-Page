import React from 'react';

// @ts-ignore
export const OlivaButton = (props: any) => {
    const {title, className} = props;
    const styleClass = className + ' oliva-button';
    console.log(styleClass)
    return (
        <div className={styleClass}>
            <p>{title}</p>
        </div>
    );
};

