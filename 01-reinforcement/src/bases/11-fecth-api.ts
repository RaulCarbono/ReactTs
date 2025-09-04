import type { Giphy } from "../data/giphy-response";

const API_KEY = 'cLYr1Mz2wbKvn6ACURUInhf9fcSQHNko';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
)

const createImageElementDOM = (url : string) => {
 const imgElement = document.createElement('img')
    imgElement.src = url

    document.body.append(imgElement)
}

myRequest.then((response) => response.json())
.then(({data} : Giphy) => {
    const imageUrl = data.images.original.url
    createImageElementDOM(imageUrl)

   
})
.catch((err) => {
    console.error(err)
})