import "./App.css";
// import Hero from "./components/Hero.tsx";
import Links from "./components/Links.tsx";
import RandomImage from "./components/RandomImage.tsx";
function App() {
  return (
    <>
      {/* <Hero /> */}
      <Links />
      <div className="footer w-full">
        <div className="footerWrapper flex md:flex-row flex-col">
          <div className="footerLeft w-full md:w-1/2">
            <div className="footerTiles grid grid-cols-4 grid-rows-2">
              <RandomImage />
              <RandomImage />
              <RandomImage />
              <RandomImage />
              <RandomImage />
              <RandomImage />
              <RandomImage />
              <RandomImage />
            </div>
          </div>
          <div className="footerRight w-full md:w-1/2 p-12 md:p-0 flex justify-center items-center">
            <h2>
              <span className="text-[#0F2E24] text-6xl">With love,</span>
              <br />
              <span className="text-[#DEA7DF] text-6xl">DH</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
