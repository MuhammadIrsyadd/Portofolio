import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <div className={`${styles.imageWrapper} animate-fade-in`}>
            <Image
              src="/IMG_9642a.JPG"
              alt="Muh. Irsyad Dwi Kurniawan"
              width={160}
              height={160}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={`${styles.badge} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
            Web Development | Frontend & Backend Developer
          </div>
          <h1 className={`${styles.title} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
            Hi, I'm <span className="text-gradient">Muh. Irsyad Dwi Kurniawan</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
            A passionate developer focused on building modern web applications. Let's craft elegant and performant digital experiences.
          </p>
          <div className={`${styles.actions} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
            <Link href="#projects" className={styles.primaryBtn}>
              View My Work
            </Link>
            <Link href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
