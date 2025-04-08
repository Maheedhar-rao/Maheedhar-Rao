import { motion } from 'framer-motion';

const projectData = [
  {
    title: "Credit Sure",
    description:
      "Designed and built a hybrid underwriting engine using Java and Node.js to simulate portfolio-level risk. Ingested merchant data via Plaid APIs, calculated exposure, and boosted lender transparency.",
  },
  {
    title: "CRM Automator",
    description:
      "Built an email classifier using LLMs and Gmail API to automate parsing and update deal status in Streak CRM. Reduced 75% of manual CRM work.",
  },
  {
    title: "Zapier Replacement System",
    description:
      "Replaced expensive Zapier workflows with a custom Node.js dispatch engine on Linux, saving $500+/mo while boosting resilience and control.",
  },
  {
    title: "Containerized Web Portal",
    description:
      "Developed and deployed a secure React + Express internal tool with Oracle DB, Dockerized it, and automated AWS deployments with Ansible.",
  },
];

const styles = {
  section: {
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Verdana, sans-serif',
  },
  overlay: {
    backgroundColor: 'rgba(15, 23, 42, 0.75)', // deeper for better contrast
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '1000px',
    color: '#ffffff',
    backdropFilter: 'blur(10px)', // frosted glass effect
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  cardList: {
    display: 'grid',
    gap: '24px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
  },
  cardTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
};

const Projects = () => (
  <section style={styles.section}>
    <div style={styles.overlay}>
      <h2 style={styles.heading}>🚀 Projects</h2>
      <div style={styles.cardList}>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDesc}>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
