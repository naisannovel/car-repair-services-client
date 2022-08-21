import React from 'react';
import { useState } from 'react';
import Shimmer from './Shimmer';
import Skeleton from './Skeleton';
import './skeleton.css';

const ServiceSkeleton = () => {

    const [windowWidth, setWindowWdith] = useState(window.innerWidth);
    window.addEventListener('resize', () => setWindowWdith(window.innerWidth) )

    const ServiceSk = ()=>(
        <div className='service__skeleton__wrapper'>
            <div className="service__skeleton">
                <Skeleton type='title' />
                <Skeleton type='img' />
                <Skeleton type='text' />
                <Skeleton type='text' />
            </div>
            <Shimmer/>
        </div>)

    return (
        <div className='service__loading_container'>
            {
                [1,2,3].slice(0,windowWidth > 640 ? 3:1).map(num => <ServiceSk key={num} /> )
            }
        </div>
    );
};

export default ServiceSkeleton;