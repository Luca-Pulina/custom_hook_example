import React from 'react'
import useGif from '../hooks/useGif'

const Random = () => {

    const {gif, fetchGIF} = useGif(tag)

    const handleClick = () => fetchGIF()

    return (
        <div className="container">
            <h1> Random  GIF </h1>
            <img width="500" src={gif} alt="random Gif" />
            <button onClick={handleClick}> Click for NEW !</button>
        </div>
    )
}

export default Random