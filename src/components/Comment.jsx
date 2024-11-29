import styles from "./Comment.module.css";

import { Handshake, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2020/09/20200915124507.jpg"
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mandalorian</strong>
                            <time
                                title="11 de Maio às 08:13h"
                                dateTime="2022-05-11 08:13:00"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>
                        Tela azul, hein? Aposto que você apertou mais botões do
                        que devia. Não mexa em nada, estou a caminho. -Mando
                    </p>
                </div>

                <footer>
                    <button>
                        <Handshake />
                        This is the way!<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
