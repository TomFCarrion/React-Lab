import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles';
import { FaRegHeart } from 'react-icons/fa';

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <FaRegHeart size='32px' /> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}
