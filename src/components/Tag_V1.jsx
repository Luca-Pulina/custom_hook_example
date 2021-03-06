import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const Random = () => {
    const [tag, setTag] = useState('dogs')
    const [gif, setGif] = useState('')

    const fetchGIF = async (tag) => {

        const url = `https://api.giphy.com/v1/random?api_key=${API_KEY}&tag=${tag}`
        const { data } = await axios.get(url)
        
        const imageSrc = data.data.images.downsized_large.url
        console.log(imageSrc)

        setGif(imageSrc)
    }

    useEffect(() => {
        fetchGIF(tag)
    }, [tag])

    const handleClick = () => {
        fetchGIF(tag)
    }


    return (
        <div className="container">
            <h1> Random {tag} GIF </h1>
            <img width="500" src={gif} alt="random Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleClick}> Click for NEW !</button>
        </div>
    )
}

export default Random