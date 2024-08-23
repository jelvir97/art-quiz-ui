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
      const { data } = await axios.get("http://127.0.0.1:8000/quiz");

      setArtwork(data);
    };


    getArtWork();
  }, []);

  const newQuiz = async()=>{
    setArtwork(null)
    setSubmitted(null)
    const { data } = await axios.get("http://127.0.0.1:8000/quiz");
    setArtwork(data)
  }

  const onSubmit = (userAnswers) => {
        setSubmitted(userAnswers)
    };

  return !artwork ? (
    <h1>...loading...</h1>
  ) : ( <>
    <div className=" flex justify-center h-96">
      <ArtImage image_id={artwork.details.image_id} /> 
    </div>
    
    {submitted ? <Results details={artwork.details} submitted={submitted} newQuiz={newQuiz}/> 
                : <QuizForm handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} artwork={artwork} errors={errors}/>}
    </>
  );
};

export default Quiz;
