function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects/Experience</h2>
        <div style={styles.grid}>
          <div style={styles.skill}>
            <h3>CIROH</h3>
            <p>
              I am currently working as a research assistant under Dr. Andy Wood
              at the Colorado School of Mines, contributing to a project within
              the Cooperative Institute for Research to Operations in Hydrology
              (CIROH). The project aims to develop a differentiable routing
              component that integrates with LSTM models in the Next Generation
              Water Modeling Framework (NextGen). This work supports the
              Multi-Model Mosaic project, which seeks to improve the accuracy of
              hydrological modeling by combining process-based and machine
              learning approaches into an ensemble system.
            </p>
            <a href="https://docs.ciroh.org/" className="button">
              Learn more about CIROH
            </a>
          </div>
          <div style={styles.skill}>
            <h3>AI4S&R</h3>
            <p>
              During my undergraduate studies, I was part of a research team led
              by Dr. Franz Kurfess that focused on applying artificial
              intelligence to support the Search and Rescue (SAR) field. As a
              member of the probabilistic reasoning team, I helped research and
              implement a Bayesian Network designed to uncover relationships
              between individuals and the circumstances under which they were
              found or went missing. For my senior project, I also explored the
              integration of a fuzzy neural network to enhance decision-making
              within the SAR context.
            </p>
            <a
              href="https://www.eurekalert.org/news-releases/1082207"
              className="button"
            >
              Learn more about AI4S&R
            </a>
          </div>
          <div style={styles.skill}>
            <h3>NBA MVP Analysis</h3>
            <p></p>
          </div>
          <div style={styles.skill}>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "3rem 1rem",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  intro: {
    maxWidth: "800px",
    margin: "0 auto 2rem",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#f8f8f8",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

export default Projects;
