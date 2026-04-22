import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p>Built with Next.js & Vanilla CSS.</p>
        <div className={styles.socials}>
          <a href="https://github.com/MuhammadIrsyadd" aria-label="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/muh-irsyad-dwi-kurniawan/" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://twitter.com/irsyaddwiii" aria-label="Twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
