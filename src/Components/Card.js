import React from 'react'
import './Card.css';
function Card({title,imageUrl,body}) {
    return (
            <img src={imageUrl}/>
    )
}

export default Card
