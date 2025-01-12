import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Error from "./components/Error";
import HomePage from "./components/HomePage";

function App() {
  let routes = [
    {
      id: 1,
      link: "/",
      component: <HomePage />,
    },
    {
      id: 2,
      link: "*",
      component: <Error />,
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        {routes.map((el, id) => (
          <Route key={id} path={el.link} element={el.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
