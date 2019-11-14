import React from 'react';
import { StoryRow } from './components/StoryRow/index'
import { GlobalStyles } from './globalStyles';
import { PhotoCardList } from './components/PhotoCardList/index';


export const App = () => (
    <div>
        <GlobalStyles/>
        <StoryRow/>
        <PhotoCardList/>
    </div>
    
);
