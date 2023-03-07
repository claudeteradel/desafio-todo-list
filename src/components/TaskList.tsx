import { Empty } from "./Empty";
import { Task } from "./Task";

import styles from './TaskList.module.css';

interface Task {
    id: string,
    title: string,
    isComplete: boolean
}

interface TaskListProps {
    tasks: Task[],
    onUpdateTaskStatus: (taskId: string) => void,
    onDeleteTask: (taskId: string) => void
}

export function TaskList({ tasks, onUpdateTaskStatus, onDeleteTask}: TaskListProps) {
    if (tasks.length == 0) {
        return <Empty />
    } else {
        return (
            <div className={styles.wrapper}>
            {tasks.map(task => {
                return (
                    <Task 
                        key={task.id}
                        id={task.id} 
                        title={task.title}
                        isComplete={task.isComplete}
                        onUpdateTaskStatus={onUpdateTaskStatus}
                        onDeleteTask={onDeleteTask}
                    />
                )
            })}
        </div>
        )
    }
}