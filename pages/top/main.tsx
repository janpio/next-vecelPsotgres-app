import styles from "style/styles.module.css";

export default function TopPage() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerParent}>
          <div className={styles.textTitle}>
            <h1 className={styles.textGradient}>Github Auth</h1>
          </div>
          <div className={styles.row}>
            <nav className={styles.headerNav}>
              <ul>
                <li className={styles.current}>
                  <a className={styles.link} href="">
                    Home
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="">
                    Profile
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="">
                    About me
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="">
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={styles.BackgroundPaper}></main>
    </div>
  );
}
