export const UpdatingTask = ({
    cancelUpdateTask,
    changeExistingTask,
    updateExistingTask,
    updateTask,
    styles,
}: {
    cancelUpdateTask: any;
    changeExistingTask: any;
    updateExistingTask: any;
    updateTask: any;
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
