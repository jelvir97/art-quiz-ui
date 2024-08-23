import ArtImage from "./ArtImage"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Details = ()=>{

    const {state: { details }} = useLocation();
    return(
        <div className=" grid md:grid-cols-2 lg:grid-cols-2">
            <div className="h-full">
                <ArtImage image_id={details.image_id}/>
            </div>
            <div className=" text-left p-5 ">
                <h2 className="text-3xl font-semi-bold italic underline">{details.title}</h2>
                <span className=" text-sm">{details.date_display}</span>
                <Link to={"/search/"+details.artist_title}><h3 className=" text-lg font-bold my-5">{details.artist_title}</h3></Link>
                <div dangerouslySetInnerHTML={{__html:details.description}} />
                <Link to="/quiz"><button className="m-3">New Quiz</button></Link>
            </div>
        </div>
    )
}

export default Details;