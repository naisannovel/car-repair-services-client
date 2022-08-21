import React from 'react';
import './skeleton.css';

const Skeleton = ({ type, className }) => {

    const classes = `skeleton ${type} ${className}`

    return (
        <div className={classes}></div>
    );
};

export default Skeleton;