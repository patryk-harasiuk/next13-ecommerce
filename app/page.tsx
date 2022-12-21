import Hero from './(components)/Hero';
import AboutUs from './(components)/AboutUs';
import Bestsellers from './(components)/Bestsellers';

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Bestsellers />
    </>
  );
};

export default Home;
