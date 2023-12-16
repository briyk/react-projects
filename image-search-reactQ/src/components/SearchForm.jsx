import { useAppContext } from "../context/GalleryContext";

const SearchForm = () => {
  const {setSearchTerm } = useAppContext() ;

  const handleSubmit = (e) =>{
    e.preventDefault() ;
    const elementValue = e.target.search.value ;
    setSearchTerm(elementValue)
    if(!elementValue) return ;
    console.log(elementValue)
  }
  return (
    <div>
      <h1 className="title">Image Search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
        type="text"
        className="form-input search-input"
        name="search"
        placeholder="search for your favorite image"
        autoComplete='off'
        />
        <button className="btn" >Search</button>
      </form>
    </div>
  )
}
export default SearchForm