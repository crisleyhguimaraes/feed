import styles from "./Header.module.css";

import forumLogo from "../assets/forum-ti.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={forumLogo} alt="Logo do Forum TI" />
        </header>
    );
}
