import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/program.module.scss';

export default function Program(
  props: { class: string, src: string, heading: string }
): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${props.class}`}>
      <div className={styles.border}>
      </div>
      <div className={styles.imgWrapper}>
        <Image src={props.src} alt='program' width='162' height='136' />
      </div>
      <h4 className={styles.heading}>{props.heading}</h4>
    </div>
  );
}
