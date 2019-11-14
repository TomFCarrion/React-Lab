import React from 'react';
import { PhotoCard } from '../photoCard/index';

export const PhotoCardList = () => {
    return (
        <ul>
            {[1,2,3,4,5].map(id => <PhotoCard key={id}/> )}
        </ul>
    )
}