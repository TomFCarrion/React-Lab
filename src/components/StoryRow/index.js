import React, { useEffect, useState } from 'react'
import { Story } from '../Story/index';
import {List, Item } from './styles'
import { mockUsers} from '../../../api/db.json'

export const StoryRow = () => {

    const [hasError, setErrors] = useState(false);
    const [photos, setPhotos] = useState([]);

    const UsersFetch = () => {
        async function fetchData() {
          const res = await fetch('https://api.pexels.com/v1/search?query=people+query&per_page=15&page=1', { 
            method: 'GET', 
            headers: new Headers({
              'Authorization': '563492ad6f91700001000001b68f03e4b49c4fa19d3267e8a5dc7c15'
            })
          });
            res.json()
            .then(res => setPhotos(res.photos))
            .catch(err => setErrors(err))
        }

        useEffect(() => {
            fetchData();
        }, [])

        console.log(photos);

    
        return photos;
    }

    UsersFetch();

    return (
        <List>
            {
             photos.map(story => <Item key={story.id}><Story cover= { ((story||{}).src || {}).small} userName={(story||{}).photographer}/></Item>)
            }
        </List>
    )
} 