import React from 'react';
import Shimmer from './Shimmer';
import Skeleton from './Skeleton';
import './skeleton.css';

const ServiceSkeleton = () => {
    return (
        <div className='service__skeleton__wrapper'>
            <div className="service__skeleton">
                <Skeleton type='title' />
                <Skeleton type='img' />
                <Skeleton type='text' />
                <Skeleton type='text' />
            </div>
            <Shimmer/>
        </div>
    );
};

export default ServiceSkeleton;