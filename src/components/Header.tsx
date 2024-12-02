import styles from "./Header.module.css";

import forumTi from "../assets/forum-ti.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={forumTi} alt="Logotipo do forum ti" />
        </header>
    );
}
