import React from 'react';
import { Story } from '../Story/index';
import {List, Item } from './styles'
import { mockUsers} from '../../../api/db.json'

export const StoryRow = () => {
    return (
        <List>
            {
             mockUsers.map(story => <Item key={story.id}><Story {...story}/></Item>)
            }
        </List>
    )
} 