import styles from "./ListHeader.module.css"

export function ListHeader(){
    return (
        <header className={styles.container}>
            <aside>
                <p>Tarefas Criadas</p>
                <span>0</span>
            </aside>

            <aside>
                <p>Concluidas</p>
                <span>0</span>
            </aside>
        </header>
    )
}