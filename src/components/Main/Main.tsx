import { Fragment } from 'react';
import { useState } from 'react';
import { ButtonAdd } from '../ButtonAdd';
import { InputText } from '../InputText';
import styles from './Main.module.css';

interface ITask {
    id: number;
    title: string;
    closed: boolean;
}

export const Main = () => {
    const [todo, setTodo] = useState<ITask[]>([
        { id: 1, title: 'Create project', closed: true },
        { id: 2, title: 'Turn Off TV', closed: false },
    ]);

    const [newTodo, setNewTodo] = useState<string>('');
    const [updateTask, setUpdateTask] = useState<string>('');

    const addTask = () => {};

    const deleteTask = (id: number) => {};

    const completedTask = (id: number) => {};

    const cancelUpdateTask = () => {};

    return (
        <div className={styles.main}>
            <InputText />
            <ButtonAdd />

            {todo && todo.length ? '' : 'List of tasks is empty'}

            {todo &&
                todo.map((task, indexTask) => {
                    return (
                        <Fragment key={task.id}>
                            <div className={styles.task}>
                                <div
                                    className={
                                        task.closed ? styles.completedTask : ''
                                    }
                                >
                                    <span className={styles.taskCount}>
                                        {++indexTask}
                                    </span>
                                    <span> {task.title} </span>
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
        </div>
    );
};
