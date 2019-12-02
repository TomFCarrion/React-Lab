import React from 'react';
import { StoryRow } from './components/StoryRow/index'
import { GlobalStyles } from './styles/globalStyles';
import { PhotoCardList } from './components/PhotoCardList/index';
import { Logo } from './components/Logo/index'


export const App = () => (
    <div>
        <GlobalStyles />
        <Logo />
        <StoryRow />
        <PhotoCardList />
    </div>
    
);
