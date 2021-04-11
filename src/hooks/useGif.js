import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const url = `https://api.giphy.com/v1/random?api_key=${API_KEY}`

const useGif = (tag) => {

    const [gif, setGif] = useState('')

    const fetchGIF = async (tag) => {

        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url)

        const imageSrc = data.data.images.downsized_large.url
        console.log(imageSrc)

        setGif(imageSrc)
    }

    useEffect(() => {
        fetchGIF(tag)
    }, [tag])

    return { gif, fetchGIF }

}

export default useGif