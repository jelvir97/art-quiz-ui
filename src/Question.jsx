const Question = ({ answers, formName, register }) => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    
  return (
    <>
      {shuffleArray(answers).map((a) => (
        <label key={a}>
          <div>
            <input type="radio" value={a} {...register(formName, {validate: value => value != null || 'error message'})} />
            {a}
          </div>
        </label>
      ))}
    </>
  );
};

export default Question;