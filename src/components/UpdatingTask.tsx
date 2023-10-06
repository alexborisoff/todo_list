import { ChangeEvent } from 'react';
import { ITask } from './Main/Main';

export const UpdatingTask = ({
    cancelUpdatingTask,
    changeExistingTask,
    updateExistingTask,
    updateTask,
    styles,
}: {
    cancelUpdatingTask: () => void;
    changeExistingTask: (event: ChangeEvent<HTMLInputElement>) => void;
    updateExistingTask: () => void;
    updateTask: ITask;
    styles: any;
}) => {
    return (
        <div>
            <input
                value={updateTask && updateTask.title}
                onChange={(event) => changeExistingTask(event)}
                className={styles.editingInput}
            />
            <button onClick={updateExistingTask} className={styles.btnUpd}>
                Update
            </button>
            <button onClick={cancelUpdatingTask} className={styles.btn}>
                Cancel
            </button>
        </div>
    );
};
