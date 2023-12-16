import {useQuery } from "react-query"
import { useAppContext } from "../context/GalleryContext";
import { publicApi } from "../api/apiConfig";



const Gallery = () => {
  const {searchTerm } = useAppContext() ;

  const { isLoading, data ,isError} = useQuery({
    queryKey: ['images',searchTerm] ,
    queryFn: async () =>{
       const response = await publicApi.get(`${searchTerm}`) ;
       return response.data ;
    }
  })
  if(isLoading){
    return (
      <section className="image-container">
          <h2>Loading ...</h2>
      </section>
    )
  }
  if(isError){
    return (
      <section className="image-container">
          <h2>there was error ...</h2>
      </section>
    )
  }
  if(data.results.length < 1){
    return (
      <section className="image-container">
          <h2>Currently Empty ...</h2>
      </section>
    )
  }
  const results = data.results ;
  
  return (
    <section className="image-container">
      {
        results.map( item => {
          const imageUrl = item?.urls?.regular ;
          return <img src={imageUrl} alt="" key={item.id} className="img"/>
        })
      }
    </section>
  )
}
export default Gallery