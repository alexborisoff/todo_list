import { useState, ChangeEvent, useEffect } from 'react';
import styles from './Main.module.css';
import { AddingTask } from '../AddingTask';
import { UpdatingTask } from '../UpdatingTask';
import { TodoPart } from '../TodoPart';

interface ITask {
    id: number;
    title: string;
    closed: boolean;
}

export const Main = () => {
    const [todo, setTodo] = useState<ITask[]>([]);

    useEffect(() => {
        if (localStorage.getItem('UpdatingListOfTasks')) {
            const taskList = JSON.parse(
                String(localStorage.getItem('UpdatingListOfTasks'))
            );
            setTodo(taskList);
        }
    }, []);

    const [newTodo, setNewTodo] = useState<string>('');
    const [updateTask, setUpdateTask] = useState<ITask>({
        id: 0,
        title: '',
        closed: false,
    });

    const addTask = (): void => {
        if (newTodo) {
            let newId = todo.length + 1;
            const newAddedValue = { id: newId, title: newTodo, closed: false };
            setTodo([...todo, newAddedValue]);
            setNewTodo('');
            localStorage.setItem(
                'UpdatingListOfTasks',
                JSON.stringify([...todo, newAddedValue])
            );
        }
    };

    const deleteTask = (id: number): void => {
        let newTasks = todo.filter((task) => task.id !== id);
        setTodo(newTasks);
        localStorage.setItem('UpdatingListOfTasks', JSON.stringify(newTasks));
    };

    const completedTask = (id: number): void => {
        const newTask = todo.map((task) => {
            if (task.id === id) {
                return { ...task, closed: !task.closed };
            }
            return task;
        });
        setTodo(newTask);
    };

    const cancelUpdateTask = (): void => {
        setUpdateTask({ id: 0, title: '', closed: true });
    };

    const changeExistingTask = (event: ChangeEvent<HTMLInputElement>) => {
        const newChangedValue = {
            id: updateTask.id,
            title: event.target.value,
            closed: updateTask.closed ? true : false,
        };
        setUpdateTask(newChangedValue);
    };

    const updateExistingTask = () => {
        const filterRecords = [...todo].filter(
            (task) => task.id !== updateTask.id
        );
        const updatedObject = [...filterRecords, updateTask];
        setTodo(updatedObject);
        setUpdateTask({ id: 0, title: '', closed: false });
    };

    return (
        <div className={styles.main}>
            {updateTask.title && updateTask.title ? (
                <UpdatingTask
                    cancelUpdateTask={cancelUpdateTask}
                    changeExistingTask={changeExistingTask}
                    updateExistingTask={updateExistingTask}
                    updateTask={updateTask}
                    styles={styles}
                />
            ) : (
                <AddingTask
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    addTask={addTask}
                />
            )}

            {todo && todo.length ? (
                ''
            ) : (
                <p className={styles.empty}> List of tasks is empty... </p>
            )}
            <TodoPart
                todo={todo}
                completedTask={completedTask}
                setUpdateTask={setUpdateTask}
                deleteTask={deleteTask}
                styles={styles}
            />
        </div>
    );
};
