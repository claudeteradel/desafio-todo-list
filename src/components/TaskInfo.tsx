import styles from './TaskInfo.module.css';

export function TaskInfo() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.created}>
                    <strong>Tarefas criadas</strong>
                    <span>5</span>
                </div>
                <div className={styles.done}>
                    <strong>Concluídas</strong>
                    <span>2 de 5</span>
                </div>
            </header>
        </div>
    )
}