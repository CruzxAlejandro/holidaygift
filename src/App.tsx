import "./App.css";
// import Hero from "./components/Hero.tsx";
import Links from "./components/Links.tsx";
// import Loader from "./components/Loader.tsx";
// import Card from "./components/Card.tsx";
function App() {
  return (
    <>
      {/* <Card /> */}
      <Links />
      <div className="footer w-full">
        <div className="footerWrapper flex md:flex-row flex-col">
          <div className="footerLeft w-full md:w-1/2">
            <div className="footerTiles grid grid-cols-4 grid-rows-2">
              <img
                src="/holidaygift/images/Chill_tile_16.png"
                alt=""
                className="object-fill"
              />
              <img
                src="/holidaygift/images/Chill_tile_7.png"
                alt=""
                className="object-fill"
              />
              <img
                src="/holidaygift/images/Chill_tile_6.png"
                alt=""
                className="object-fill"
              />
              <img
                src="/holidaygift/images/Chill_tile_10.png"
                alt=""
                className="object-fill"
              />
              <img
                src="/holidaygift/images/Chill_tile_9.png"
                alt=""
                className="object-fill"
              />
              <img
                src="/holidaygift/images/Chill_tile_2.png"
                alt=""
                className="object-fill"
              />
              <img
                src="/holidaygift/images/Chill_tile_4.png"
                alt=""
                className="object-fill"
              />
              <img
                src="/holidaygift/images/Chill_tile_9.png"
                alt=""
                className="object-fill"
              />
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
