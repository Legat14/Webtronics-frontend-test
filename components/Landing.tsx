import React from 'react';
import styles from '../styles/components/landing.module.scss';
import About from './About';
import Footer from './Footer';
import Gallery from './Gallery';
import GetInTouch from './GetInTouch';
import Header from './Header';
import Programs from './Programs';
import Questions from './Questions';
import Review from './Review';
import Showcase from './Sowcase';
import StarsBg from './StarsBg';
import Steps from './Steps';

export default function Landing(): JSX.Element {
  return (
    <main className={styles.landing}>
      <StarsBg />
      <Header />
      <Showcase />
      <About />
      <Programs />
      <Steps />
      <Questions />
      <Review />
      <Gallery />
      <GetInTouch />
      <Footer />
    </main>
  );
}
