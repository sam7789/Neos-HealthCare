import { actionType } from "./actionType";

const init = {
  todoData: [
    {
      id: "db9d05af313832ee5a41",
      title: "Learning C++",
      status: "pending",
      userId: "c8222f70d11fc1b658dc",
      createdAt: "2022-07-14T04:11:22.497Z",
    },
    {
      id: "db9d05af313832ee5a41",
      title: "Learning C#",
      status: "completed",
      userId: "c8222f70d11fc1b658dc",
      createdAt: "2022-07-14T04:11:22.497Z",
    },
  ],
  isError: false,
  isLoading: false,
};

export const todoReducer = (state = init, { type, payload }) => {
  switch (type) {
    case actionType.TODO_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.TODO_SUCCESS:
      return {
        ...state,
        todoData: payload,
        isError: false,
        isLoading: false,
      };
    case actionType.TODO_FAILURE:
      return {
        ...state,
        isError: payload,
        isLoading: false,
      };
    case actionType.TODO_RESET:
      return {
        ...state,
        todoData: [],
        isError: false,
        isLoading: false,
      };
    case actionType.TODO_ADD:
      return {
        ...state,
        todoData: [...state.todoData, payload],
        isError: false,
        isLoading: false,
      };
    case actionType.TODO_DELETE:
      return {
        ...state,
        todoData: state.todoData.filter((todo) => todo.id !== payload.id),
        isError: false,
        isLoading: false,
      };
    case actionType.TODO_UPDATE:
      return {
        ...state,
        todoData: state.todoData.map((todo) =>
          todo.id === payload.id ? payload : todo
        ),
        isError: false,
        isLoading: false,
      };
    case actionType.TODO_COMPLETE:
      return {
        ...state,
        todoData: state.todoData.map((todo) =>
          todo.id === payload.id ? payload : todo
        ),
        isError: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
