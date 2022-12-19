import ElementOneIcon from 'public/assets/icons/element-one.svg';
import ElementTwoIcon from 'public/assets/icons/element-two.svg';
import ElementThreeIcon from 'public/assets/icons/element-three.svg';
import FooterEarthImage from 'public/assets/images/footer-earth-image.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="relative lg:flex lg:w-full">
        <div className="bg-hero-first lg:w-1/2 lg:h-[700px] h-[300px] bg-no-repeat bg-cover bg-center"></div>
        <div className="bg-hero-second lg:w-1/2 lg:h-[700px] h-[300px] bg-no-repeat bg-cover bg-top"></div>
        <button className="border border-[#00B495] bg-[#00B495] text-white text-lg rounded-2xl px-8 py-3 transition duration-500 ease select-none absolute top-3/4 lg:top-2/4 left-1/2 -translate-x-2/4">
          Shop now
        </button>
      </div>

      <div className="relative pt-[140px] lg:pt-0 lg:w-full">
        <div
          className="prose pt-[80px] text-lg lg:text-2xl isolate
        flex flex-col gap-11 max-w-[350px] text-center mx-auto px-4"
        >
          <Image src={ElementOneIcon} alt="" className="absolute top-4 -left-5 z-10" />
          <Image src={ElementTwoIcon} alt="" className="absolute  top-4 -right-5 z-10" />

          <p className="m-0 font-sans">
            We are YeeShirts. We love this planet. That&apos;s why our garments is made using zero
            waste pattern cutting from natural and re-purposed fabrics{' '}
          </p>

          <p className="text-center m-0">For you and for our planet</p>

          <Image
            src={ElementThreeIcon}
            alt=""
            className="absolute  -bottom-[125px] -right-5 z-10"
          />
        </div>
      </div>

      <footer className="bg-[#16193A] text-white pt-16 px-6 mt-24">
        <div className="relative flex gap-14 w-full">
          <ul className="flex flex-col gap-4">
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Find store</li>
          </ul>

          <ul className="flex flex-col gap-4">
            <li>FAQ</li>
          </ul>

          <Image src={FooterEarthImage} alt="" className=" self-end" />
        </div>
      </footer>
    </div>
  );
}
