import { motion } from 'framer-motion';

const skillData = [
  {
    skill: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: `Replaced Zapier with a custom Node.js dispatch engine to cut recurring costs. 
    Architected a scalable backend system on a Linux server, saving over $500/month and increasing control.`,
  },
  {
    skill: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    description: `Built a lender eligibility assessment app using Django, enabling precise lender identification.
    Designed a backend to process complex financial inputs, streamlining deal evaluations.`,
  },
  {
    skill: "PostgreSQL & MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: `Managed dual-database systems with PostgreSQL for analytics and MySQL for daily ops. 
    Engineered optimized schemas and reporting layers, driving real-time dashboards and smarter decision-making.`,
  },
  {
    skill: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: `Developed a secure internal web app with React for a U.S. enterprise.
    Implemented component-driven UIs with JWT-based flows, improving internal workflows and user experience.`,
  },
  {
    skill: "Docker & AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: `Deployed containerized infrastructure for 20+ clients on AWS.
    Used Docker + Ansible, achieving scalable, zero-downtime environments.`,
  },
  {
    skill: "LLMs & Gmail API",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    description: `Needed to automate CRM data input from decline emails.
    Combined Gmail API with an LLM classifier, automating 75% of CRM workflows and improving accuracy.`,
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
    backgroundColor: 'rgba(15, 23, 42, 0.75)', // darker and cleaner
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '1000px',
    color: '#ffffff',
    backdropFilter: 'blur(10px)', // glassy effect
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
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '0.75rem',
  },
  icon: {
    width: '32px',
    height: '32px',
    objectFit: 'contain',
  },
};

const Skills = () => (
  <section style={styles.section}>
    <div style={styles.overlay}>
      <h2 style={styles.heading}>🛠️ Skills in Action</h2>
      <div style={styles.cardList}>
        {skillData.map((item, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div style={styles.cardHeader}>
              <img src={item.icon} alt={item.skill} style={styles.icon} />
              <h3 style={styles.cardTitle}>{item.skill}</h3>
            </div>
            <p style={styles.cardDesc}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
