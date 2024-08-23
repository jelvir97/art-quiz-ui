import ArtImage from "./ArtImage";
import { Link } from "react-router-dom";
const ArtCard = ({artwork})=>{
    return (
        <div className=" grid md:grid-cols-2 lg:grid-cols-2 border-b-4 mt-5">
            <div className="h-full">
                <ArtImage image_id={artwork.image_id}/>
            </div>
            <div className=" text-left p-5 ">
                <h2 className="text-3xl font-semi-bold italic underline">{artwork.title}</h2>
                <span className=" text-sm">{artwork.date_display}</span>
                <Link to={"/search/"+artwork.artist_title}><h3 className=" text-lg font-bold my-5">{artwork.artist_title}</h3></Link>
            </div>
        </div>
    )
}

export default ArtCard;