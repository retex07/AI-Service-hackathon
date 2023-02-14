import React from 'react';

import Footer from '../../blocks/footer';
import Header from '../../blocks/header';
import Hero from './blocks/hero';
import './styles.scss';

export default function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
