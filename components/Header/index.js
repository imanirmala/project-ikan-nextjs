import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header>
        <nav className={styles.navbar}>
          <div className={styles["navbar-left"]}>
            <div className={styles.logo}></div>
          </div>
          <div className={styles["navbar-right"]}>
            <ul>
              <li>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="../Contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>More &nabla;</a>
                </Link>
                <ul class="dropdown-list">
                  <li>
                    <Link href="#">
                      <a>Table</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Data">
                      <a>Users</a>
                    </Link>
                  </li>
                </ul>
              </li>
              
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
