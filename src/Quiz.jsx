import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Question from "./Question";
import ArtImage from "./ArtImage";
import Results from "./Results";
import QuizForm from "./QuizForm";

const Quiz = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit" });
  const [artwork, setArtwork] = useState(null);
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    const getArtWork = async () => {
      console.log(import.meta.env.VITE_BASE_URL+"/quiz")
      const resp = await axios.get(import.meta.env.VITE_BASE_URL+"/quiz");
      setArtwork(resp.data);
    };


    getArtWork();
  }, []);
  
  const newQuiz = async()=>{
    setArtwork(null)
    setSubmitted(null)
    const { data } = await axios.get(import.meta.env.VITE_BASE_URL+"/quiz");
    console.log(data)
    setArtwork(data)
  }

  const onSubmit = (userAnswers) => {
        setSubmitted(userAnswers)
    };

  return !artwork ? (
    <h1>...loading...</h1>
  ) : ( <> {console.log(artwork,submitted)}
    <div className=" flex justify-center h-96">
      <ArtImage image_id={artwork.details.image_id} /> 
    </div>
    
    {submitted ? <Results details={artwork.details} submitted={submitted} newQuiz={newQuiz}/> 
                : <QuizForm handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} artwork={artwork} errors={errors}/>}
    </>
  );
};

export default Quiz;
