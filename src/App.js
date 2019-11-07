import React from 'react';
import { StoryRow } from './components/StoryRow/index'
import { GlobalStyles } from './globalStyles';
import { PhotoCard } from './components/photoCard/index';


export const App = () => (
    <div>
        <GlobalStyles/>
        <StoryRow/>
        <PhotoCard/>
    </div>
    
);
