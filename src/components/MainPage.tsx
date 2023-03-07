import { TaskList } from './TaskList';
import { Task } from './Task';
import styles from './MainPage.module.css';
import plus from '../assets/plus.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

interface Task {
    id: string,
    title: string,
    isComplete: boolean
}

export function MainPage() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const [newTask, setNewTask] = useState('');

    function handleAddNewTask(event: FormEvent) {
        event?.preventDefault();
        setTasks([
            {
                id: uuidv4(),
                title: newTask,
                isComplete: false
            },
            ...tasks
        ]);
        setNewTask('');
    }

    function handleUpdateTaskList(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function updateTaskStatus(taskId: string) {
        const updatedTask = tasks.map(task => {
            if (taskId == task.id) {
                return {...task, isComplete: !task.isComplete};
            } else {
                return task;
            }
        });

        setTasks(updatedTask);
    }

    function deleteTask(taskId: string) {
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task.id !== taskId;
        });

        setTasks(tasksWithoutDeleteOne);
    }

    function handleNewTaskEmpty(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Digite uma descrição para essa tarefa!');
    }
    
    const totalConcludedTasks = tasks.reduce((acc, task) => {
        if (task.isComplete){
            acc = acc+1;
        }
        return acc;
    }, 0);

    return ( 
        <div className={styles.container}>
            <form onSubmit={handleAddNewTask} className={styles.form}>
                <input 
                    name='newTask'
                    placeholder='Adicione uma nova tarefa'
                    value={newTask}
                    onChange={handleUpdateTaskList}
                    onInvalid={handleNewTaskEmpty}
                    required
                />
                <button>
                    Criar
                    <img src={plus} />
                </button>
            </form>

            <header className={styles.header}>
                <div className={styles.created}>
                    <strong>Tarefas criadas</strong>
                    <span>{tasks.length}</span>
                </div>
                <div className={styles.done}>
                    <strong>Concluídas</strong>
                    <span>{totalConcludedTasks} de {tasks.length}</span>
                </div>
            </header>

            <div>
                <TaskList tasks={tasks}
                          onUpdateTaskStatus={updateTaskStatus}
                          onDeleteTask={deleteTask}
                />
            </div>
        </div>
    )
}