import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <ul style={styles.links}>
          <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
          <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
          <li><a href="/contact" style={styles.link}>Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "blue",
    padding: "20px 0",
    color: "#ffffff",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  text: {
    margin: "0",
    fontSize: "14px",
  },
  links: {
    listStyleType: "none",
    padding: "0",
    margin: "10px 0 0 0",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    color: "#61dafb",
    textDecoration: "none",
  },
};

export default Footer;
