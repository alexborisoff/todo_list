import { Fragment } from 'react';
import { useState } from 'react';
import { ButtonAdd } from '../ButtonAdd';
import { InputText } from '../InputText';
import styles from './Main.module.css';
import done from '../../assets/images/done.png';
import edit from '../../assets/images/edit.png';
import trash from '../../assets/images/trash.png';

interface ITask {
    id: number;
    title: string;
    closed: boolean;
}

export const Main = () => {
    const [todo, setTodo] = useState<ITask[]>([
        { id: 1, title: 'Task 1', closed: true },
        { id: 2, title: 'Task 2', closed: false },
    ]);

    const [newTodo, setNewTodo] = useState<string>('');
    const [updateTask, setUpdateTask] = useState<string>('');

    const addTask = () => {
        if (newTodo) {
            let counter = todo.length + 1;
            let newEntry = { id: counter, title: newTodo, closed: false };
            setTodo([...todo, newEntry]);
        }
    };

    const deleteTask = (id: number) => {};

    const completedTask = (id: number) => {};

    const cancelUpdateTask = () => {};

    return (
        <div className={styles.main}>
            <InputText newTodo={newTodo} setNewTodo={setNewTodo} />
            <ButtonAdd addTask={addTask} />

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
                                <div className={styles.manipulationIcons}>
                                    <span title="Opened / Closed">
                                        <img src={done} alt="done_task" />
                                    </span>
                                    <span title="Edit">
                                        <img src={edit} alt="edit_task" />
                                    </span>
                                    <span title="Delete">
                                        <img src={trash} alt="delete_task" />
                                    </span>
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
        </div>
    );
};
