import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post(props) {
    console.log(props);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://www.tabletowo.pl/wp-content/uploads/2020/10/Baby-Yoda-w-Star-Wars-Squadrons-1.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Baby Yoda</strong>
                        <span>Tridactyls</span>
                    </div>
                </div>

                <time
                    title="11 de Maio às 08:13h"
                    dateTime="2022-05-11 08:13:00"
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    A tela do meu PC ficou toda azul... acho que fiz algo
                    errado! Só tava tentando apertar os botões certos. Alguém
                    sabe como arrumar isso? 🆘
                </p>
                <p>
                    <a href="">Gogu - The Mandalorian</a>
                </p>
                <p>
                    <a href="">#força</a> <a href="">#starwars</a>{" "}
                    <a href="">#mandalorian</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    );
}
