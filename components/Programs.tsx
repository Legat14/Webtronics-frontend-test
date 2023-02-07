import React from 'react';
import { programsData } from '../data/programsData';
import styles from '../styles/components/programs.module.scss';
import Program from './Program';

export default function Programs(): JSX.Element {
  return (
    <section id='programs' className={styles.programs}>
      <h2 className={styles.heading}>Programming technologies</h2>
      <p className={`${styles.description} p1`}>
        By the end, you’ll have the portfolio and interview skills you need to start your new career.
      </p>
      <div className={styles.wrapper}>
        {programsData.map((program) => <Program
          key={program.id}
          class={program.class}
          src={program.src}
          heading={program.heading}
        />)}
      </div>
    </section>
  );
}
