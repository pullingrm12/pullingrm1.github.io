import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header style={styles.header}>
      <div style={styles.title}>Rhys Pulling</div>
      <button onClick={toggleMenu} style={styles.menuButton}>
        ☰
      </button>
      {isOpen && (
        <nav style={styles.dropdown}>
          <a href="#about" style={styles.link}>
            About
          </a>
          <a href="#skills" style={styles.link}>
            Skills
          </a>
          <a href="#projects" style={styles.link}>
            Projects
          </a>
          <a href="#contact" style={styles.link}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#333",
    color: "white",
    padding: "1rem",
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  menuButton: {
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    top: "60px",
    right: "1rem",
    backgroundColor: "#444",
    borderRadius: "6px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem 0",
  },
  link: {
    padding: "0.75rem 1.5rem",
    textDecoration: "none",
    color: "white",
    textAlign: "right",
    whiteSpace: "nowrap",
  },
};

export default NavBar;
