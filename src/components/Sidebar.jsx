import { FileArrowUp } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFYuVKP_8UvQlCOp0loYouFG2_DCYFbFzog&s"
            />

            <div className={styles.profile}>
                <Avatar src="https://www.tabletowo.pl/wp-content/uploads/2020/10/Baby-Yoda-w-Star-Wars-Squadrons-1.jpg" />

                <strong>Nome do usuario</strong>
                <span>Cargo do usuario</span>
            </div>

            <footer>
                <a href="#">
                    <FileArrowUp size={20} />
                    Visitar Perfil
                </a>
            </footer>
        </aside>
    );
}
