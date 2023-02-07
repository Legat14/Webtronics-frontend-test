import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { selectQuestion } from '../store/slices/questionsSlice';
import styles from '../styles/components/question.module.scss';

export default function Question(
  props: { id: number, class: string, question: string, answer: string, isOpened: boolean }
): JSX.Element {

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(selectQuestion(props.id));
  }

  return (
    <div className={`${styles.wrapper} ${props.class} ${props.isOpened ? styles.wrapperOpened : styles.wrapperClosed}`}
      onClick={handleClick}
    >
      <div className={`${styles.border} ${props.isOpened ? styles.borderOpened : styles.borderClosed}`}>
      </div>
      <button
        className={`${styles.collapseBtn} ${props.isOpened ? styles.collapseBtnLeft : styles.collapseBtnRight}`}
      >
        {props.isOpened
          ?
          <Image src='./assets/svg/plus.svg' alt='plus' width='16' height='16' />
          :
          <Image src='./assets/svg/minus.svg' alt='minus' width='16' height='16' />
        }
      </button>
      <h4 className={styles.heading}>{props.question}</h4>
      <p className={`${styles.answer} p1`}>{props.answer}</p>
    </div>
  );
}
