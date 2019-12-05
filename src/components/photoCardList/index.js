import React, { useEffect, useState } from 'react'
import { PhotoCard } from '../photoCard/index';

export const PhotoCardList = () => {

    const [hasError, setErrors] = useState(false);
    const [photos, setPhotos] = useState([]);

        async function fetchData() {
          const res = await fetch('https://api.pexels.com/v1/search?query=friends+query&per_page=35&page=1', { 
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

    return (
        <ul>
            {photos.map(photo => <PhotoCard src={((photo||{}).src || {}).medium} key={photo.id}/> )}
        </ul>
    )
}