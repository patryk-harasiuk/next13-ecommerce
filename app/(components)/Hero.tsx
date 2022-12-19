const Hero = (): JSX.Element => (
  <div className="relative lg:flex lg:w-full">
    <div className="bg-hero-first lg:w-1/2 lg:h-[700px] h-[300px] bg-no-repeat bg-cover bg-center"></div>
    <div className="bg-hero-second lg:w-1/2 lg:h-[700px] h-[300px] bg-no-repeat bg-cover bg-top"></div>
    <button className="border border-light-green bg-light-green text-white text-lg rounded-2xl px-8 py-3 transition duration-500 ease select-none absolute top-3/4 lg:top-2/4 left-1/2 -translate-x-2/4">
      Shop now
    </button>
  </div>
);
export default Hero;
