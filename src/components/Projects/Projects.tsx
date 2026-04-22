import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Stripe, and a custom CMS. Includes cart functionality, checkout, and an admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An application that leverages OpenAI's API to help creators generate engaging social media content, blog posts, and marketing copy.",
    tech: ["React", "Express", "OpenAI", "MongoDB"],
    link: "#"
  },
  {
    id: 3,
    title: "Real-time Crypto Dashboard",
    description: "A dashboard displaying cryptocurrency prices using WebSockets for real-time updates and interactive charts for historical data analysis.",
    tech: ["Vue.js", "Chart.js", "Tailwind CSS", "Node.js"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={`container ${styles.projectsContainer}`}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className={styles.links}>
                  <a href={project.link} aria-label="External Link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
              
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <ul className={styles.projectTechList}>
                {project.tech.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
