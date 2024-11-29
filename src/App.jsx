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
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            { type: "link", content: "jane.design/doctorcare" },
        ],
        publishedAt: new Date("2022-05-03 20:00:00"),
    },
    {
        id: 2,
        author: {
            avatarUrl:
                "https://ew.com/thmb/9I_8yGnmGaPQa4JXeI3oNTrsy-c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Screen-Shot-2020-11-27-at-2.19.27-AM-50df3ae8a81b4632b9b4ea4b80fc8bd8.png",
            name: "Ahsoka",
            role: "Jedi",
        },
        content: [
            { type: "paragraph", content: "Fala galera 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            { type: "link", content: "jane.design/doctorcare" },
        ],
        publishedAt: new Date("2022-05-10 20:00:00"),
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
