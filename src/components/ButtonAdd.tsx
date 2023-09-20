import styles from './button.module.css';

export const ButtonAdd = ({ addTask, text }: any) => {
    return (
        <>
            <button
                className={styles.btn}
                onClick={addTask}
                onKeyDown={addTask}
            >
                Add Task
            </button>
        </>
    );
};
