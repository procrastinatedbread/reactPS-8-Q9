import { useState, createContext, useEffect } from "react";
import { fakeFetch } from "../constants";

export const AppContext = createContext({
  questionsList: [],
  setQuestionsList: (id) => {}
});
export const AppProvider = ({ children }) => {
  const [questionsList, setQuestionsList] = useState([]);
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch("https://example.com/api/questions");
      setQuestionsList(data.questions);
    };
    innerFunction();
  }, []);
  const appContext = { questionsList, setQuestionsList };
  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};
