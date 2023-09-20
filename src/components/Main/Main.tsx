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
        { id: 10, title: 'Create Project 100%', closed: false },
        { id: 9, title: 'Create Project 90%', closed: false },
        { id: 8, title: 'Create Project 80%', closed: false },
        { id: 7, title: 'Create Project 70%', closed: false },
        { id: 6, title: 'Create Project 60%', closed: true },
        { id: 5, title: 'Create Project 50%', closed: true },
        { id: 4, title: 'Create Project 40%', closed: true },
        { id: 3, title: 'Create Project 30%', closed: true },
        { id: 2, title: 'Create Project 20%', closed: true },
        { id: 1, title: 'Create Project 10%', closed: true },
    ]);

    const [newTodo, setNewTodo] = useState<string>('');
    const [updateTask, setUpdateTask] = useState<ITask>({
        id: 0,
        title: '',
        closed: false,
    });

    const addTask = () => {
        if (newTodo) {
            let counter = todo.length + 1;
            let newEntry = { id: counter, title: newTodo, closed: false };
            setTodo([...todo, newEntry]);
            setNewTodo('');
        }
    };

    const deleteTask = (id: number) => {
        let newTasks = todo.filter((task) => task.id !== id);
        setTodo(newTasks);
    };

    const completedTask = (id: number) => {
        let newTask = todo.map((task) => {
            if (task.id === id) {
                return { ...task, closed: !task.closed };
            }
            return task;
        });
        setTodo(newTask);
    };

    const cancelUpdateTask = () => {
        setUpdateTask({ id: 0, title: '', closed: true });
    };

    const changeExistingTask = (e: any) => {
        let newEntry = {
            id: updateTask.id,
            title: e.target.value,
            closed: updateTask.closed ? true : false,
        };
        setUpdateTask(newEntry);
    };
    const updateExistingTask = () => {
        let filterRecords = [...todo].filter(
            (task) => task.id !== updateTask.id
        );
        let updatedObject = [...filterRecords, updateTask];
        setTodo(updatedObject);
    };

    return (
        <div className={styles.main}>
            <>
                <InputText newTodo={newTodo} setNewTodo={setNewTodo} />
                <ButtonAdd addTask={addTask} />
            </>

            <>
                <input
                    className={styles.editingInput}
                    onChange={(e) => changeExistingTask(e)}
                    value={updateTask.title}
                />
                <button onClick={updateExistingTask} className={styles.btnUpd}>
                    Update
                </button>
                <button onClick={cancelUpdateTask} className={styles.btn}>
                    Cancel
                </button>
            </>

            {todo && todo.length ? '' : 'List of tasks is empty'}

            {todo &&
                todo
                    .sort((a, b) => (a.id > b.id ? -1 : 1))
                    .map((task, indexTask) => {
                        return (
                            <Fragment key={task.id}>
                                <div className={styles.task}>
                                    <div
                                        className={
                                            task.closed
                                                ? styles.completedTask
                                                : ''
                                        }
                                    >
                                        <span className={styles.taskCount}>
                                            {++indexTask}
                                        </span>
                                        <span> {task.title} </span>
                                    </div>
                                    <div className={styles.manipulationIcons}>
                                        <span
                                            onClick={(e) =>
                                                completedTask(task.id)
                                            }
                                            title="Opened / Closed"
                                        >
                                            <img src={done} alt="done_task" />
                                        </span>

                                        {task.closed ? null : (
                                            <span
                                                onClick={() =>
                                                    setUpdateTask({
                                                        id: task.id,
                                                        title: task.title,
                                                        closed: task.closed
                                                            ? true
                                                            : false,
                                                    })
                                                }
                                                title="Edit"
                                            >
                                                <img
                                                    src={edit}
                                                    alt="edit_task"
                                                />
                                            </span>
                                        )}

                                        <span
                                            title="Delete"
                                            onClick={() => deleteTask(task.id)}
                                        >
                                            <img
                                                src={trash}
                                                alt="delete_task"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </Fragment>
                        );
                    })}
        </div>
    );
};
