import React from 'react';
import {ImgWrapper, Img, Button} from 'react';


export const PhotoCard = ({id, likes = 0, src}) => {
    return(
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src}/>
                </ImgWrapper>
            </a>
            <Button>
            {likes} likes!
            </Button>
        </article>

    )
}