import React from 'react';
import AboutUsBottom from './HomePageComponents/AboutUsBottom';
import AboutUsTop from './HomePageComponents/AboutUsTop';
import Events from './HomePageComponents/Events';
import Hero from './HomePageComponents/Hero';
import Plans from './HomePageComponents/Plans';
import News from './HomePageComponents/News';
import ContactUs from './HomePageComponents/ContactUs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUsTop />
      <AboutUsBottom />
      <Plans />
      <Events />
      <News />
      <ContactUs />
    </>
  );
}
