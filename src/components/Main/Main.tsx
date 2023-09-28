import { useState, ChangeEvent } from 'react';
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
    const [todo, setTodo] = useState<ITask[]>([
        { id: 10, title: 'Create Project 100%', closed: false },
        { id: 9, title: 'Create Project 90%', closed: false },
        { id: 8, title: 'Create Project 80%', closed: true },
        { id: 7, title: 'Create Project 70%', closed: true },
        { id: 6, title: 'Create Project 60%', closed: true },
        { id: 5, title: 'Create Project 50%', closed: true },
        { id: 4, title: 'Create Project 40%', closed: true },
        { id: 3, title: 'Create Project 30%', closed: true },
        { id: 2, title: 'Create Project 20%', closed: true },
        { id: 1, title: 'Create Project 10%', closed: true },
    ]);

    const [newTodo, setNewTodo] = useState<string>('');
    const [updateTask, setUpdateTask] = useState<ITask>({
        id: 1,
        title: 'test',
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

    const changeExistingTask = (event: ChangeEvent<HTMLInputElement>) => {
        let newEntry = {
            id: updateTask.id,
            title: event.target.value,
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
            {updateTask && updateTask ? (
                <AddingTask
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    addTask={addTask}
                />
            ) : (
                <UpdatingTask
                    cancelUpdateTask={cancelUpdateTask}
                    changeExistingTask={changeExistingTask}
                    updateExistingTask={updateExistingTask}
                    updateTask={updateTask}
                    styles={styles}
                />
            )}

            {todo && todo.length ? '' : 'List of tasks is empty'}
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
