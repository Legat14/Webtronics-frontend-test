import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/steps.module.scss';
import Step from './Step';
import { stepsData } from '../data/stepsData';

export default function Steps(): JSX.Element {

  const stepDataOdd = stepsData.filter((step) => step.stepNumber % 2 !== 0);
  const stepDataEven = stepsData.filter((step) => step.stepNumber % 2 === 0);

  return (
    <section id='steps' className={styles.steps}>
      <h2 className={styles.heading}>Steps</h2>
      <div className={styles.wrapper}>

        <div className={styles.side}>
          { stepDataOdd.map((step) => <Step
            key={step.id}
            class={step.class}
            stepNumber={step.stepNumber}
            heading={step.heading}
            text={step.text}
            isLeft={step.isLeft}
          />) }
        </div>

        <div className={styles.center}>
          <Image src='./assets/svg/axis.svg' alt='axis' width='175' height='892' />
        </div>

        <div className={`${styles.side} ${styles.sideRight}`}>
          { stepDataEven.map((step) => <Step
            key={step.id}
            class={step.class}
            stepNumber={step.stepNumber}
            heading={step.heading}
            text={step.text}
            isLeft={step.isLeft}
          />) }
        </div>

        <div className={styles.stepsAdaptive}>
          { stepsData.map((step) => <div className={styles.stepAdaptiveWrapper}>
            {!step.isLeft ? <div className={styles.filler}></div> : null}
            <Step
              key={step.id}
              class={step.class}
              stepNumber={step.stepNumber}
              heading={step.heading}
              text={step.text}
              isLeft={step.isLeft}
            />
            {step.isLeft ? <div className={styles.filler}></div> : null}
          </div>
          ) }
        </div>

      </div>
    </section>
  );
}
