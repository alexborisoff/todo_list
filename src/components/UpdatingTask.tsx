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
        <>
            <input
                className={styles.editingInput}
                onChange={(e) => changeExistingTask(e)}
                value={updateTask && updateTask.title}
            />
            <button onClick={updateExistingTask} className={styles.btnUpd}>
                Update
            </button>
            <button onClick={cancelUpdateTask} className={styles.btn}>
                Cancel Updating
            </button>
        </>
    );
};
