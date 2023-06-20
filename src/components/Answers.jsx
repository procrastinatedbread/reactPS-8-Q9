import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

const Answers = () => {
  const { questionsList } = useContext(AppContext);

  const { ansId } = useParams();
  const selectedQuestion = questionsList?.find(({ id }) => id === +ansId);
  console.log(selectedQuestion);
  return (
    <>
      <div>
        <h1>Answer:</h1>
        <p>{selectedQuestion.answer}</p>
      </div>
    </>
  );
};
export default Answers;
