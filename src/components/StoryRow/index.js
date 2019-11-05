import React from 'react';
import { Story } from '../Story/index';
import {List, Item } from './styles'

export const StoryRow = () => {
    return (
        <List>
            {
                [1,2,3,4,5].map(story => <Item><Story/></Item>)
            }
        </List>
    )
} 