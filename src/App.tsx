import "./App.css";
import Hero from "./components/Hero.tsx";
import Links from "./components/Links.tsx";
import Footer from "./components/Footer.tsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <>
      <Hero />
      <Links />
      <Footer />
    </>
  );
}

export default App;
