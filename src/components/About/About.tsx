import styles from './About.module.css';

const skills = [
  "JavaScript", "TypeScript", "Laravel", "Next.js",
  "PHP", "HTML/CSS", "jQuery", "Python",
  "Machine Learning", "Android"
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.textColumn}>
            <p className={styles.paragraph}>
              I am a fresh graduate from Universitas Pembangunan Nasional “Veteran” Jawa Timur with a background in Computer Science.
              My academic focus was on Machine Learning, particularly in the field of visual computing, which became the main topic of my thesis.
              Through this experience, I developed a strong foundation in data processing, visual analysis, and the implementation of algorithms to solve image-based problems.
            </p>
            <p className={styles.paragraph}>
              I also gained experience by participating in the Android Development program at Bangkit Academy, where I learned mobile application development.
              In addition, I completed an internship at PT INKA as part of the Information Technology team, working as a Web Developer.
              In this role, I was responsible for developing web-based applications using the Laravel framework in PHP, along with HTML, jQuery, and JavaScript.
            </p>
          </div>

          <div className={styles.skillsColumn}>
            <h3 className={styles.skillsTitle}>Technologies I work with:</h3>
            <ul className={styles.skillsList}>
              {skills.map((skill) => (
                <li key={skill} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
