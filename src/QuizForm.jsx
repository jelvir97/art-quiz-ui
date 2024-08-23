import Question from "./Question"

const QuizForm = ({handleSubmit, onSubmit, register, artwork, errors})=>{
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(errors).length > 0 ? <span className=" text-red-500 mt-10">Please answer each question to submit.</span> : ''}
        <p className=" text-2xl underline mt-5">Place of origin?</p>
        <Question
          formName={"place_of_origin"}
          answers={artwork.answers.place_of_origin}
          register={register}
          key={"place_of_origin"}
        />
        <p className=" text-2xl underline mt-5">Artist?</p>
        <Question
          formName={"artist_title"}
          answers={artwork.answers.artist_title}
          register={register}
          key={"artist_title"}
        />
        <p className=" text-2xl underline mt-5">Date?</p>
        <Question
          formName={"date_display"}
          answers={artwork.answers.date_display}
          register={register}
          key={"date_display"}
        />
        <p className=" text-2xl underline mt-5">Title?</p>
        <Question
          formName={"title"}
          answers={artwork.answers.title}
          register={register}
          key={"title"}
        />
        <button type="submit" className="m-3">Submit</button>
      </form>
    )
}

export default QuizForm;