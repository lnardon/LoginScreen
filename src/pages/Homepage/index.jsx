import React from "react";

import styles from "./styles.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.bgImg} />
      <div className={styles.contentContainer}>
        <div className={styles.form}>
          <h2 className={styles.formTitle}>LOGIN</h2>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
