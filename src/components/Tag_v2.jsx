import React, {useState} from 'react'
import useGif from '../hooks/useGif'

const Tag = () => {
    const [tag, setTag] = useState('dogs')
    const {gif, fetchGIF} = useGif(tag)

    const handleClick = () => fetchGIF(tag)

    return (
        <div className="container">
            <h1> Random {tag} GIF </h1>
            <img width="500" src={gif} alt="random Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleClick}> Click for NEW !</button>
        </div>
    )
}

export default Tag