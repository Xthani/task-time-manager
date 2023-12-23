import { useState, ChangeEvent } from "react";
import { addTask, selectTasks } from "store/task";
import { useAppDispatch, useAppSelector } from "hooks";

export const TaskInput = () => {
  const [input, setInput] = useState("");
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    if (input && !tasks.includes(input)) {
      dispatch(addTask(input));
    }
    setInput("");
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleAdd}>Добавить</button>
      {tasks.includes(input) && <div>Выберите задачу: {input}</div>}
    </div>
  );
};
