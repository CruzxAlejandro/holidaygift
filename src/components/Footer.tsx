import RandomImage from "./RandomImage";
function Footer() {
  return (
    <>
      <div className="footer w-full">
        <div className="footerWrapper w-full grid grid-cols-4 grid-rows-4 md:grid-cols-8 md:grid-rows-2">
          <RandomImage />
          <RandomImage />
          <RandomImage />
          <RandomImage />
          <RandomImage />
          <RandomImage />
          <RandomImage />
          <RandomImage />
          <div className="footerRight w-full p-12 md:p-0 flex justify-center items-center col-start-1 row-start-2 md:col-start-5 md:row-start-1 col-span-4 row-span-2">
            <h2>
              <span className="text-[#0F2E24] text-4xl sm:text-6xl">
                With love,
              </span>
              <br />
              <span className="text-[#DEA7DF] text-4xl sm:text-6xl">
                <a
                  className="underline"
                  href="https://wearedh.com"
                  target="_blank"
                >
                  DH
                </a>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
