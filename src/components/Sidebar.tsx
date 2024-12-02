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
                <Avatar src="https://sm.ign.com/ign_br/screenshot/default/mandalorian-rosario-darwson-ahsoka-tano_cxcn.jpg" />

                <strong>Ahsoka</strong>
                <span>Jedi</span>
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
