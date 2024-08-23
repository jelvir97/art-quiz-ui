import { useLoaderData, useParams, Link } from "react-router-dom";
import ArtCard from "./ArtCard";

const Search = ()=>{
    const searchResults = useLoaderData()
    const {query} =  useParams()
    return (
       <div>
            <h3 className="text-xl">Results for: "{query}"</h3>
            <Link to="/quiz"><button className="m-3">New Quiz</button></Link>
            {searchResults.map((art)=> <ArtCard artwork={art} key={art.title}/>)}
       </div>
    )
}

export default Search;