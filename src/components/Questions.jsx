import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";

const Questions = () => {
  const { questionsList } = useContext(AppContext);
  return (
    <>
      <h1>Questions</h1>
      {questionsList.map(({ id, question }) => {
        return (
          <div key={id}>
            <p>{question}</p>
            <Link>Downvote</Link>
            <span> </span>
            <Link>Upvote</Link>
            <span> </span>
            <Link to={`/answers/${id}`}>Answer</Link>
          </div>
        );
      })}
    </>
  );
};
export default Questions;
