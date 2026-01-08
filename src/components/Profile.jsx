import React from "react";
import profileImage from "../images/me.JPG"; // adjust filename if different

function Profile() {
  return (
    <section id="Profile" style={styles.Profile}>
      <img src={profileImage} alt="Profile" style={styles.image} />
      <h1 style={styles.name}>Rhys Pulling</h1>
      <p style={styles.subtitle}>
        Data Scientist | M.S. Data Science | Machine Learning, Python, SQL
      </p>
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

export default Profile;
