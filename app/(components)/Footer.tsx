import Image from 'next/image';
import FooterEarthImage from '@/public/assets/images/footer-earth-image.png';

const Footer = (): JSX.Element => (
  <footer className="bg-deep-purple text-white pt-16 px-6 mt-24">
    <div className="relative flex gap-14 w-full">
      <ul className="flex flex-col gap-4">
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Find store</li>
      </ul>

      <ul className="flex flex-col gap-4">
        <li>FAQ</li>
      </ul>

      <Image src={FooterEarthImage} alt="" className="self-end" />
    </div>
  </footer>
);

export default Footer;
