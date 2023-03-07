import styles from './Empty.module.css';
import clipboard from '../assets/clipboard.png';

export function Empty() {
    return (
        <div className={styles.box}>
            <img src={clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    );
}