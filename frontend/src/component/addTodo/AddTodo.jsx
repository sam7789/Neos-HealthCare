import "./AddTodo.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoData/action";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({});
  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo({});
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add Todo"
          onChange={handleChange}
          name="title"
          id="title"
        />
        <select name="status" id="status" onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="expired">Expired</option>
        </select>
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
};
