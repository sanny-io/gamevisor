import React from 'react';
import Hero from '../Hero';
import Features from '../Features';
import TopServers from '../TopServers';
import Statistics from '../Statistics';
import Footer from '../Footer';

export default function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <Statistics />
      <TopServers />
      <Footer />
    </>
  );
};