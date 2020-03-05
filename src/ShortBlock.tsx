// @ts-ignore
import React from 'react';
import {Image} from 'react-bootstrap';

export const ShortBlock = (props:any) => {
    const {title, image, className} = props;
    const styleClass = className + ' short-block';
    return(
        <div className={styleClass}>
            <div className={'content'}>
            <Image src={image} fluid />
            <p>{title}</p>
            </div>
        </div>
    );
};

