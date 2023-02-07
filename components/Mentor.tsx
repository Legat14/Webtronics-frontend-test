import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/mentor.module.scss';

export default function Mentor(
  props: { class: string, src: string, heading: string, text: string }
): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${props.class}`}>
      <div className={styles.border}>
        <div className={styles.imgWrapper}>
          <Image src={props.src} alt='mentor' width='184' height='184' />
        </div>
      </div>
      <div className={styles.descrioption}>
        <h4>{props.heading}</h4>
        <p className='p2'>{props.text}</p>
      </div>
    </div>
  );
}
