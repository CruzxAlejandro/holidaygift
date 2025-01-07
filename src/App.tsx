import "./App.css";
import { useEffect } from "react";
import Hero from "./components/Hero.tsx";
import Links from "./components/Links.tsx";
import Loader from "./components/Loader.tsx";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Loader />
      <Hero />
      <Links />
    </>
  );
}

export default App;
