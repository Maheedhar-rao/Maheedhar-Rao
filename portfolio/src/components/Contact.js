import { motion } from 'framer-motion';

const Contact = () => (
  <section style={styles.section}>
    <motion.div
      style={styles.overlay}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 style={styles.heading}>📬 Get in Touch</h2>

      <div style={styles.card}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          alt="Email"
          style={styles.icon}
        />
        <p style={styles.text}>
          <strong>Email:</strong>{' '}
          <a href="mailto:govadamaheedhar@gmail.com" style={styles.link}>
            govadamaheedhar@gmail.com
          </a>
        </p>
      </div>

      <div style={styles.card}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          style={styles.icon}
        />
        <p style={styles.text}>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/maheedhar-rao-govada-349986127/"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            Visit Profile
          </a>
        </p>
      </div>

      {/* Resume Download Button */}
      <a
        href="/Maheedhar_Rao_Resume.pdf"
        download
        style={styles.button}
      >
        📄 Click Me
      </a>
    </motion.div>
  </section>
);

const styles = {
  section: {
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Verdana, sans-serif',
  },
  overlay: {
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '600px',
    color: '#ffffff',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '1.5rem',
    justifyContent: 'center',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
  text: {
    fontSize: '1rem',
  },
  link: {
    color: '#38bdf8',
    textDecoration: 'none',
  },
  button: {
    marginTop: '20px',
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    borderRadius: '6px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
};

export default Contact;
