import styles from './NewTaskInput.module.css';
import plus from '../assets/plus.svg';

export function NewTaskInput() {
    return (
        <form className={styles.form}>
            <input placeholder="Adicione uma nova tarefa"></input>
            <button>
                Criar
                <img src={plus} />
            </button>
        </form>
    );
}