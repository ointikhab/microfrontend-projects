import React from "react";

export default () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #ccc",
    borderTop: "5px solid #1976d2",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  },
  text: {
    marginTop: "10px",
    fontSize: "16px"
  }
};
