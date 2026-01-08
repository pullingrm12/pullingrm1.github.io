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
              Water Modeling Framework (NextGen). I am currently working on
              integrating ML emulators into production pipelines and modularized
              codebase to support evolving hydrological models for CIROH.
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
            <h3>Volleyball Motion Tracking</h3>
            <p>
              I designed a motion-tracking model for volleyball match videos to
              extract player movement data. I then applied ML techniques to
              analyze player patterns and support predictive modeling of plays.
            </p>
            <a
              href="https://github.com/pullingrm12/vball_motion_tracking"
              className="button"
            >
              Learn More about Volleyball Motion Tracking
            </a>
          </div>
          <div style={styles.skill}>
            <h3>Student Dropout Predicter</h3>
            <p>
              Built and evaluated multiple ML models (Random Forest, XGBoost,
              Logistic Regression) to predict dropout Risk with ~88% accuracy.
              The project exists as an experiment for various ML techniques.
            </p>
            <a
              href="https://github.com/pullingrm12/student_dropout_prediction"
              className="button"
            >
              Learn More about Studen Dropout Analysis
            </a>
          </div>
          <div style={styles.skill}>
            <h3>PID Neural Network Controller</h3>
            <p>
              Coded a neural network from scratch in C to optimize a PID
              controller, demonstrating cross-disciplinary control-system
              learning. This project was part of my autonomous robotics course.
              That being said, the code is not currently hosted on GitHub.
            </p>
          </div>
          <div style={styles.skill}>
            <h3>The Banalyst</h3>
            <p>
              Built a full-stack movie analytics web app using React, Node.js,
              Express, and MongoDB for browsing films, profiles, and reviews.
            </p>
            <a
              href="https://github.com/bbmcmann/307MovieProject"
              className="button"
            >
              Learn More about The Banalyst
            </a>
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
