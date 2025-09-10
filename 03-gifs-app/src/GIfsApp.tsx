
import { GifList } from "./gifs/components/GifList"
import { useGifs } from "./gifs/hooks/useGifs"
import { PreviousSearches } from "./gifs/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"


export const GifsApp = () => {
    const {previousTerms, gifs, handleTermClicked, handlerSearch} = useGifs()
  
 
  return (
   <>
    <CustomHeader title="Buscador de gif" />

    <SearchBar placeholder="Busca lo que quieras" onQuery={handlerSearch}/>
   
    <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

    <GifList gifs={gifs}/>
   </>
  )
}
