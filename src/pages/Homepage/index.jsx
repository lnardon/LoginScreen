import React from "react";

import styles from "./styles.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.bgImg} />
      <div className={styles.contentContainer}>
        <div className={styles.form}>
          <h2 className={styles.formTitle}>LOGIN</h2>
          <div className={styles.inputDiv}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
          </div>
          <button className={styles.signinBtn}>SIGN IN</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
