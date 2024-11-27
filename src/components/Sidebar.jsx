import { FileArrowUp } from "phosphor-react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.pexels.com/photos/8866719/pexels-photo-8866719.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https://github.com/crisleyhguimaraes.png"
                    alt="imagem de perfil do usuario"
                />

                <strong>Crisley Guimarães</strong>
                <span>Analista de Suporte</span>
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
