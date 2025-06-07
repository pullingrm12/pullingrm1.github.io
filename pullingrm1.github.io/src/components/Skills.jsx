function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <p>
          I have a strong foundation in working with data and relaying my
          findings in an informative and engaging way. I am proficient in a
          variety of tools and technologies that allow me to analyze, visualize,
          and present data effectively. This includes technical tools like
          Python (pandas, NumPy, matplotlib), SQL, R, Excel, and JavaScript, as
          well as visualization tools like Tableau.
        </p>
        <div style={styles.grid}>
          <div style={styles.skill}>
            <h3>Data Analysis</h3>
            <p>
              I excel at uncovering insights through data analysis using tools
              like Python and SQL. Whether it’s cleaning messy datasets or
              performing statistical analysis, I enjoy identifying trends and
              translating them into actionable outcomes.
            </p>
          </div>

          <div style={styles.skill}>
            <h3>Data Storytelling</h3>
            <p>
              I believe that data becomes valuable when it's shared clearly. I
              use tools like Tableau, Power BI, and Jupyter Notebooks to create
              intuitive visual narratives that help stakeholders understand and
              act on complex information.
            </p>
          </div>

          <div style={styles.skill}>
            <h3>Frontend Development</h3>
            <p>
              I am able to build responsive, interactive interfaces using React,
              JavaScript, and CSS. I'm passionate about user experience and
              strive to make interfaces that are both elegant and functional. I
              also enjoy using modern tools like Vite and Tailwind CSS for fast,
              scalable frontends.
            </p>
          </div>

          <div style={styles.skill}>
            <h3>Problem Solving</h3>
            <p>
              I approach problems with a mindset of curiosity and persistence.
              Whether debugging a tricky frontend issue or designing a data
              pipeline, I’m motivated by finding clean, sustainable solutions
              that add long-term value.
            </p>
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

export default Skills;
