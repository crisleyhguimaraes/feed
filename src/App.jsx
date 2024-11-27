import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    <Post author="Crisley Guimarães" content="Primeiro post" />
                    <Post author="Pedro Horta" content="Segundo post" />
                </main>
            </div>
        </div>
    );
}

export default App;
