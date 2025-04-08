const Hero = () => (
  <section style={styles.section}>
    <img src="/me.jpeg" alt="Maheedhar Rao" style={styles.image} />
    <h1 style={styles.name}>Maheedhar Rao Govada</h1>
    <p style={styles.title}>Software Engineer | Backend Specialist | Automation Enthusiast</p>
  </section>
);

const styles = {
  section: {
    height: '100vh',
    backgroundColor: '#0f172a',
    backgroundImage: `
      radial-gradient(circle at 50% 40%, rgba(0,255,255,0.1), transparent 60%),
      radial-gradient(circle at 30% 70%, rgba(0,255,255,0.1), transparent 70%),
      radial-gradient(circle at 70% 80%, rgba(255,0,255,0.1), transparent 80%)
    `,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    textAlign: 'center',
    fontFamily: 'Verdana, sans-serif',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '3px solid white',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.4)', // Neon glow
  },
  quote: {
    fontStyle: 'italic',
    color: '#94a3b8',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textShadow: '0 0 10px #0ff', // Neon text effect
  },
  title: {
    fontSize: '1.5rem',
    marginTop: '1rem',
    color: '#b0e0e6',
  },
};
export default Hero;