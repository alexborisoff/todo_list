import styles from './input.module.css';

export const InputText = ({
    newTodo,
    setNewTodo,
}: {
    newTodo?: string;
    setNewTodo?: any;
}) => {
    return (
        <>
            <input
                className={styles.addingInput}
                placeholder="Type new task..."
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
            />
        </>
    );
};
