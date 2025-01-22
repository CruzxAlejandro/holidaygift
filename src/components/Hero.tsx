import RandomImage from "./RandomImage.tsx";

function Hero() {
  return (
    <>
      <div className="hero w-full h-screen relative">
        <div className="gridWrapper grid grid-cols-8 grid-rows-6 overflow-hidden absolute">
          {Array.from({ length: 48 }, (_, index) => (
            <div key={index}>
              <RandomImage />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
