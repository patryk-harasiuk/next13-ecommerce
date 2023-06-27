import Image from 'next/image';
import FooterEarthImage from 'public/assets/images/footer-earth-image.png';

const SiteFooter = (): JSX.Element => (
  <footer className="bg-deep-purple mt-24 px-6 pt-16 text-white">
    <div className="relative flex w-full gap-14">
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

export default SiteFooter;
