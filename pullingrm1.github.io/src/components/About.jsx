import profileImage from "../images/me.JPG";

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>
        <img src={profileImage} alt="Profile" style={styles.image} />
        <p>
          I'm a passionate data scientist with a strong background in machine
          learning and data analysis. I enjoy transforming complex data into
          actionable insights and building predictive models that drive business
          decisions. My expertise includes Python, R, SQL, and various data
          visualization tools. I thrive in collaborative environments and am
          always eager to learn new technologies and methodologies. While I grew
          up in Colorado, my undergraduare studies took me to San Luis Obispo,
          California where I got a bachelor's in Computer Science with a minor
          in Statistics at California Polytechnic State University. I then
          returned home and I am currently pursuing a Master's in Data Science
          at the Colorado School of Mines in Golden, Colorado.
        </p>
        <p>
          Outside of programming, I enjoy movies and TV shows (and I love
          discussing them), reading, and spending time outdoors. I try to remain
          very active and play a lot of sports, including basketball,
          volleyball, and pickleball. I play beach volleyball competitively and
          have played in various tournaments both here and in California. I also
          enjoy hiking and exploring the beautiful Colorado mountains.
        </p>
      </div>
    </section>
  );
}

const styles = {
  Profile: {
    textAlign: "center",
    padding: "4rem 1rem",
    background: "#f5f5f5",
  },
  image: {
    textAlign: "center",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  name: {
    margin: "0",
    fontSize: "2.5rem",
  },
  subtitle: {
    marginTop: "0.5rem",
    fontSize: "1.25rem",
    color: "#555",
  },
};

export default About;
