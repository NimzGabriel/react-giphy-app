import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

    return (
        <div className='card animate__animated animate__backInRight'>
            <p>{ title }</p>
            <a href={ url }>
                <img src={ url } alt={ title }></img>
            </a>
        </div>
    )
}