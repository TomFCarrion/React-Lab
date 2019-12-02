import React from 'react';
import { ImgWrapper, Img, Button } from './styles';
import { FaRegHeart } from 'react-icons/fa';

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>

      <Button>
        <FaRegHeart size='32px' /> {likes}
      </Button> 
    </article>
  )
}