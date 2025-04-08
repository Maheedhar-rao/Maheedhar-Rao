const About = () => (
  <section style={styles.section}>
    <div style={styles.overlay}>
      <h2 style={styles.heading}>👨‍💻 Who's Maheedhar Rao?</h2>
      <p style={styles.paragraph}>
        Ever built something so efficient it replaced Zapier and saved money every month? I have.
      </p>
      <p style={styles.paragraph}>
        I'm a software engineer obsessed with automation, clean architecture, and making legacy systems jealous. Whether it’s
        streamlining workflows or building scalable APIs, I thrive on efficiency and clean engineering.
      </p>
      <p style={styles.paragraph}>
        Currently, I'm building resilient backend systems and classification bots that automate 75% of CRM workflows —
        accelerating operations while reducing human error.
      </p>
      <p style={styles.paragraph}>
        Curious? Let’s connect. I might just automate your next bottleneck.
      </p>
    </div>
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
    backgroundColor: 'rgba(15, 23, 42, 0.75)', // Deeper blue-gray for better contrast
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '800px',
    color: '#ffffff',
    backdropFilter: 'blur(10px)', // optional glass effect
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    marginBottom: '1rem',
  },
};

export default About;
