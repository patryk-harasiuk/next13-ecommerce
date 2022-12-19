import Image from 'next/image';
import ElementOneIcon from '@/public/assets/icons/element-one.svg';
import ElementTwoIcon from '@/public/assets/icons/element-two.svg';
import ElementThreeIcon from '@/public/assets/icons/element-three.svg';

const AboutUs = (): JSX.Element => (
  <div className="relative pt-[140px] lg:pt-0 lg:w-full">
    <div
      className="prose pt-[80px] text-lg lg:text-2xl isolate
        flex flex-col gap-11 max-w-[350px] text-center mx-auto px-4"
    >
      <Image src={ElementOneIcon} alt="" className="absolute top-4 -left-5 z-10" />
      <Image src={ElementTwoIcon} alt="" className="absolute  top-4 -right-5 z-10" />

      <p className="m-0 font-bold">
        We are YeeShirts. We love this planet. That&apos;s why our garments is made using zero waste
        pattern cutting from natural and re-purposed fabrics{' '}
      </p>

      <p className="text-center m-0">For you and for our planet</p>

      <Image src={ElementThreeIcon} alt="" className="absolute  -bottom-[125px] -right-5 z-10" />
    </div>
  </div>
);

export default AboutUs;
