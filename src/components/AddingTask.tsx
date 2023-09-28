import { ButtonAdd } from './ButtonAdd';
import { InputText } from './InputText';

export const AddingTask = ({
    newTodo,
    setNewTodo,
    addTask,
}: {
    newTodo: string;
    setNewTodo: any;
    addTask: any;
}) => {
    return (
        <>
            <InputText newTodo={newTodo} setNewTodo={setNewTodo} />
            <ButtonAdd addTask={addTask} />
        </>
    );
};
