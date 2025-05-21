import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import BabySteps from '../components/BabySteps';
import Stats from '../components/Stats';
import Modaah from '../components/Modaah';

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <Modaah />
      <Services />
      <Testimonials />
      <BabySteps />
      <Stats />
    </main>
  );
};

export default Home;
