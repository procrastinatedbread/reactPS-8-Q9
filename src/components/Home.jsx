import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome John</h1>
      <NavLink to="/questions">Show Questions list</NavLink>
    </>
  );
};
export default Home;
