function Hero() {
  return (
    <>
      {/* Wrapper */}
      {/* <div className="w-full lg:w-4/5 lg:m-auto border-8 border-[#ef3c22]"> */}
      <div className="">
        <div className="w-full bg-[#ef3c22] xxl:w-4/5 lg:m-auto max-w-screen-xxl">
          {/* Top row */}
          <div className="grid grid-cols-5 gap-0">
            <div className="drawbox">
              <img
                src="images//Chill_tile_16.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className="drawbox">
              <img
                src="images//Chill_tile_15.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className="drawbox">
              <img
                src="images//Chill_tile_14.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className="drawbox">
              <img
                src="images//Chill_tile_13.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className="drawbox">
              <img
                src="images//Chill_tile_12.png"
                alt=""
                className="object-fill"
              />
            </div>
          </div>
          {/* Middle row */}
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Col */}
            <div className="col-span-5 lg:col-span-1 grid grid-cols-5 lg:grid-rows-3 lg:grid-cols-none gap-0">
              <div className="drawbox order-3">
                <img
                  src="images//Chill_tile_10.png"
                  alt=""
                  className="object-fill"
                />
              </div>
              <div className="drawbox">
                <img
                  src="images//Chill_tile_9.png"
                  alt=""
                  className="object-fill"
                />
              </div>
              <div className="drawbox">
                <img
                  src="images//Chill_tile_8.png"
                  alt=""
                  className="object-fill"
                />
              </div>
            </div>
            {/* Middle Col */}
            <div className="col-span-5 lg:col-span-3 p-6 flex items-center">
              <div>
                <h1>Welcome to this box</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              {/* <img
                src="images//Center_tile.jpg"
                alt=""
                className="object-fill h-full"
              /> */}
            </div>
            {/* Right Col */}
            <div className="col-span-5 lg:col-span-1 grid grid-cols-5 lg:grid-rows-3 lg:grid-cols-none gap-0">
              <div className="drawbox">
                <img
                  src="images//Chill_tile_11.png"
                  alt=""
                  className="object-fill"
                />
              </div>
              <div className="drawbox">
                <img
                  src="images//Chill_tile_1.png"
                  alt=""
                  className="object-fill"
                />
              </div>
              <div className="drawbox">
                <img
                  src="images//Chill_tile_2.png"
                  alt=""
                  className="object-fill"
                />
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-5 gap-0">
            <div className="drawbox">
              <img
                src="images//Chill_tile_7.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className="drawbox">
              <img
                src="images//Chill_tile_6.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className="drawbox">
              <img
                src="images//Chill_tile_5.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className="drawbox">
              <img
                src="images//Chill_tile_4.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className="drawbox">
              <img
                src="images//Chill_tile_3.png"
                alt=""
                className="object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
