import React, { useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import pageIsScrolled from '../functions/pageIsScrolled';
import { hideHeadersBg, showHeadersBg } from '../store/slices/headersBgToggleSlice';
import { RootState } from '../store/store';
import styles from '../styles/components/header.module.scss';

export default function Header(): JSX.Element {
  const dispatch = useDispatch();

  const isShown = useSelector((state: RootState) => state.headerShow.isShown);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (pageIsScrolled(100)) {
        dispatch(showHeadersBg());
      } else {
        dispatch(hideHeadersBg());
      }
    });
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${!isShown ? styles.bg_hidden : null} ${styles.bg}`}></div>
      <a className={styles.linkLogo} href='#'>
        <Image className={styles.logo} src='./assets/svg/logo-webtronics.svg' alt='Webtronics' width='169' height='33' />
      </a>
      <nav className={styles.nav}>
        <a className={styles.link + ' p1'} href='#about'>About</a>
        <a className={styles.link + ' p1'} href='#programs'>Programs</a>
        <a className={styles.link + ' p1'} href='#steps'>Steps</a>
        <a className={styles.link + ' p1'} href='#questions'>Questions</a>
        <a className={styles.link + ' p1'} href='#get-in-touch'>Get in touch</a>
      </nav>
    </header>
  );
}
