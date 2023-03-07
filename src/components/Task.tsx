import { Trash } from "phosphor-react";
import { ChangeEvent } from "react";
import styles from './Task.module.css';

interface TaskProps {
    id: string,
    title: string,
    isComplete: boolean,
    onUpdateTaskStatus: (taskId: string) => void,
    onDeleteTask: (taskId: string) => void
}

export function Task({ id, title, isComplete, onUpdateTaskStatus, onDeleteTask }: TaskProps) {
    function handleUpdateTaskStatus(event: ChangeEvent<HTMLInputElement>) {
        onUpdateTaskStatus(id);
    }

    function handleDeleteTask() {
        onDeleteTask(id);
    }

    return (
        <div>
            <article className={styles.task}>
                <input type='checkbox' checked={isComplete} onChange={handleUpdateTaskStatus}/>
                {
                    isComplete ? 
                    <span><s>{title}</s></span> :
                    <span>{title}</span> 
                }
                <button onClick={handleDeleteTask}>
                    <Trash size={16}/>
                </button>
            </article>
        </div>
    );
}