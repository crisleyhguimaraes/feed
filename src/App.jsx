import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl:
                "https://www.tabletowo.pl/wp-content/uploads/2020/10/Baby-Yoda-w-Star-Wars-Squadrons-1.jpg",
            name: "Baby Yoda",
            role: "Tridactyls @Star Wars",
        },
        content: [
            { type: "paragraph", content: "Fala galera 👋" },
            {
                type: "paragraph",
                content:
                    "A tela do meu PC ficou toda azul... acho que fiz algo errado! Só tava tentando apertar os botões certos. Alguém sabe como arrumar isso? 🆘",
            },
            { type: "link", content: "Gogu - The Mandalorian" },
        ],
        publishedAt: new Date("2022-05-03 20:00:00"),
    },
];

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => {
                        return (
                            <Post
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        );
                    })}
                </main>
            </div>
        </div>
    );
}
