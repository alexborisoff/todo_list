import { Fragment } from 'react';
import done from '../assets/images/done.png';
import edit from '../assets/images/edit.png';
import trash from '../assets/images/trash.png';

export const TodoPart = ({
    todo,
    styles,
    completedTask,
    setUpdateTask,
    deleteTask,
}: {
    todo: any;
    styles: any;
    completedTask: any;
    setUpdateTask: any;
    deleteTask: any;
}) => {
    return (
        <>
            {todo &&
                todo
                    .sort((a: any, b: any) => (a.id > b.id ? -1 : 1))
                    .map((task: any, indexTask: any) => {
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
        </>
    );
};
