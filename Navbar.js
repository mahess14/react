import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <a href="/" style={styles.logoLink}>
          MyLogo
        </a>
      </div>
      <div style={styles.menuIcon} onClick={toggleMenu}>
        <span style={styles.hamburger}></span>
        <span style={styles.hamburger}></span>
        <span style={styles.hamburger}></span>
      </div>
      <ul style={{ ...styles.navLinks, ...(isMenuOpen ? styles.navLinksOpen : {}) }}>
        <li style={styles.navItem}>
          <a href="/" style={styles.navLink}>Home</a>
        </li>
        <li style={styles.navItem}>
          <a href="/about" style={styles.navLink}>About</a>
        </li>
        <li style={styles.navItem}>
          <a href="/services" style={styles.navLink}>Services</a>
        </li>
        <li style={styles.navItem}>
          <a href="/contact" style={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
  },
  logoLink: {
    color: "#61dafb",
    textDecoration: "none",
  },
  menuIcon: {
    display: "none",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "25px",
    height: "20px",
    cursor: "pointer",
  },
  hamburger: {
    backgroundColor: "#fff",
    height: "3px",
    width: "100%",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: "0",
    padding: "0",
    transition: "all 0.3s ease-in-out",
  },
  navLinksOpen: {
    display: "block",
    position: "absolute",
    top: "60px",
    right: "10px",
    backgroundColor: "#333",
    padding: "10px",
    borderRadius: "8px",
  },
  navItem: {
    margin: "0",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
  },
  "@media screen and (maxWidth: 768px)": {
    menuIcon: {
      display: "flex",
    },
    navLinks: {
      display: "none",
    },
  },
};

export default Navbar;
