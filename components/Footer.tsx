import React from 'react';
import styles from '../styles/components/footer.module.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.copyright}>
          <img className={styles.logo} src='./assets/svg/logo-webtronics.svg' alt='Webtronics' />
          <p className='p1'>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
        </div>

        <div className={styles.company}>
          <h5>Company</h5>
          <ul className={styles.links}>
            <li>
              <a className={`${styles.link} p2`} href='#'>About Us</a>
            </li>
            <li>
              <a className={`${styles.link} p2`} href='#'>Steps</a>
            </li>
            <li>
              <a className={`${styles.link} p2`} href='#'>FAQs</a>
            </li>
            <li>
              <a className={`${styles.link} p2`} href='#'>Review</a>
            </li>
            <li>
              <a className={`${styles.link} p2`} href='#'>Gallery</a>
            </li>
          </ul>
        </div>

        <div className={styles.social}>
          <h5>Social media</h5>
          <div className={styles.socialContainer}>
            <a href='https://www.facebook.com/' target='_blank'>
              <img src='./assets/svg/social-01.svg' alt='Face book icon' />
            </a>
            <a href='https://about.gitlab.com/' target='_blank'>
              <img src='./assets/svg/social-02.svg' alt='GitLab icon' />
            </a>
            <a href='https://twitter.com/' target='_blank'>
              <img src='./assets/svg/social-03.svg' alt='Tweeter icon' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank'>
              <img src='./assets/svg/social-04.svg' alt='LinkedIn icon' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
