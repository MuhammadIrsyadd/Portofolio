import styles from './Experience.module.css';

const experiences = [
  {
    title: "Web Developer Intern",
    company: "PT INKA",
    date: "Internship",
    description: "Developed web-based applications using the Laravel framework, HTML, jQuery, and JavaScript as part of the Information Technology team.",
  },
  {
    title: "Android Development Cohort",
    company: "Bangkit Academy",
    date: "Study Independent",
    description: "Participated in an intensive program focused on mobile application development and modern Android technologies.",
  }
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    gpa: "3.93/4.00",
    institution: "Universitas Pembangunan Nasional “Veteran” Jawa Timur",
    date: "Graduated",
    description: "Focused on Machine Learning and visual computing. Thesis involved data processing, visual analysis, and algorithmic implementation for image-based problem solving.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={`container ${styles.experienceContainer}`}>

        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Experience & Education</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.content}>
          {/* Experience Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              Experience
            </h3>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.date}>{exp.date}</span>
                    <h4 className={styles.title}>{exp.title}</h4>
                    <span className={styles.company}>{exp.company}</span>
                    <p className={styles.description}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              Education
            </h3>
            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.date}>{edu.date}</span>
                    <h4 className={styles.title}>{edu.degree}</h4>
                    <h4 className={styles.title}>{edu.gpa}</h4>
                    <span className={styles.company}>{edu.institution}</span>
                    <p className={styles.description}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
