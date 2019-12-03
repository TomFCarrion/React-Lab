import React from 'react';
import { Anchor, Image, UserName } from './styles' 

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'

export const Story = ({cover = DEFAULT_IMAGE, path, userName = 'userName'}) => (
    <Anchor href= {path}>
        <Image src={cover}/>    
        <UserName>{userName}</UserName>
    </Anchor>
)