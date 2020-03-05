// @ts-ignore
import React from 'react';
import {Image} from 'react-bootstrap';

export const ShortBlock = (props:any) => {
    const {title, image} = props;
    return(
        <div className={'short-block'}>
            <div className={'content'}>
            <Image src={image} fluid />
            <p>{title}</p>
            </div>
        </div>
    );
};

