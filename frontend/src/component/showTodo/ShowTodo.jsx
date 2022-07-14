import "./ShowTodo.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/todoData/action";
import Timer from "../global/Timer";

export const ShowTodo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todoData);
  console.log(todo);

  return (
    <div className="todo_show_container">
      <h1>Todo List</h1>
      <div>
        {todo?.map((item) => (
          <div className="todo_item">
            <p className="todo_item_title">{item.title}</p>
            <div className="todo_item_status">
              <Timer status={item.status} />
            </div>
            <button
              className="delete"
              onClick={() => dispatch(deleteTodo(item.id))}
            >
              ✗
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
