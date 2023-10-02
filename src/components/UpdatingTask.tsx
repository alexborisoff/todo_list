interface ITask {
    id: number;
    title: string;
    closed: boolean;
}

export const UpdatingTask = ({
    cancelUpdateTask,
    changeExistingTask,
    updateExistingTask,
    updateTask,
    styles,
}: {
    cancelUpdateTask: () => void;
    changeExistingTask: (e: any) => void;
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
            <button onClick={cancelUpdateTask} className={styles.btn}>
                Cancel
            </button>
        </div>
    );
};
