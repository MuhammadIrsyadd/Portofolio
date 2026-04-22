import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.contactContainer}`}>
        <h2 className={styles.title}>What's Next?</h2>
        <h3 className={styles.subtitle}>Get In Touch</h3>
        <p className={styles.description}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:[muhammadirsyad258@gmail.com]" className={styles.contactButton}>
          Say Hello
        </a>
      </div>
    </section>
  );
}
