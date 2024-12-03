import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <section style={styles.section}>
        <h1 style={styles.heading}>Welcome to Our Website!</h1>
        <p style={styles.text}>
          Discover amazing features, content, and services tailored just for you.
        </p>
        <button style={styles.button} onClick={() => alert("Button Clicked!")}>
          Learn More
        </button>
      </section>

      <section style={styles.cards}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Feature 1</h2>
          <p style={styles.cardText}>Description of feature 1.</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Feature 2</h2>
          <p style={styles.cardText}>Description of feature 2.</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Feature 3</h2>
          <p style={styles.cardText}>Description of feature 3.</p>
        </div>
      </section>
    </main>
  );
};

const styles = {
  body: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    minHeight: "calc(100vh - 140px)", // Adjust based on header/footer height
  },
  section: {
    textAlign: "center",
    marginBottom: "40px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#343a40",
  },
  text: {
    fontSize: "1rem",
    color: "#6c757d",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
  cards: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    flex: "1 1 calc(30% - 20px)",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#343a40",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "1rem",
    color: "#6c757d",
  },
};

export default Body;
