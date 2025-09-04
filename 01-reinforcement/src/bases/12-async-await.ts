import type { Giphy } from "../data/giphy-response";

const API_KEY = 'cLYr1Mz2wbKvn6ACURUInhf9fcSQHNko';


const createImageElementDOM = (url : string) => {
 const imgElement = document.createElement('img')
    imgElement.src = url
    document.body.append(imgElement)
}

const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

    const {data } : Giphy = await response.json()

    return data.images.original.url
}

getRandomGifUrl().then(createImageElementDOM)