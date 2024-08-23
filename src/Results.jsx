import { Link } from "react-router-dom";
const Results = ({submitted, details, newQuiz})=>{
    return (
        <>
            <p className=" text-xl  mt-5">Place of origin: {submitted.place_of_origin} {details.place_of_origin === submitted.place_of_origin ?"✅" : "❌"}</p>
            {details.place_of_origin !== submitted.place_of_origin ? <span className=" italic">Correct Answer: {details.place_of_origin}</span> : ""}
            
            <p className=" text-xl  mt-5">Date: {submitted.date_display} {details.date_display === submitted.date_display ?"✅" : "❌"}</p>
            {details.date_display !== submitted.date_display ? <span className=" italic">Correct Answer: {details.date_display}</span> : ""}

            <p className=" text-xl  mt-5">Artist: {submitted.artist_title} {details.artist_title === submitted.artist_title ?"✅" : "❌"}</p>
            {details.artist_title !== submitted.artist_title ? <span className=" italic">Correct Answer: {details.artist_title}</span> : ""}

            <p className=" text-xl  mt-5">Title: {submitted.title} {details.title === submitted.title ?"✅" : "❌"}</p>
            {details.title !== submitted.title ? <span className=" italic">Correct Answer: {details.title}</span> : ""}
            <br/>
            <Link to="/details" state={{details}}><button className="m-3">View Details</button></Link>
            <button className="m-3" onClick={newQuiz}>New Quiz</button>
        </>
    )
};

export default Results;