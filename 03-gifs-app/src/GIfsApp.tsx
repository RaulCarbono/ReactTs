import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeadeer"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"


export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    const [gifs, setGifs] = useState<Gif[]>([])

    const handleTermClicked = (term : string) => {
        console.log({term})
    }

    const handlerSearch = async (query : string = '') => {
        query = query.trim().toLowerCase()

        if(query.length === 0) return

        if(previousTerms.includes(query)) return
        
        setPreviousTerms([query, ...previousTerms].slice(0,7))

       const gifs_response = await getGifsByQuery(query)

       setGifs(gifs_response)
    }
 
  return (
   <>
    <CustomHeader title="Buscador de gifs" description="Descubre y comparte el Gif perfecto" />

    <SearchBar placeholder="Busca lo que quieras" onQuery={handlerSearch}/>
   
    <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

    <GifList gifs={gifs}/>
   </>
  )
}
