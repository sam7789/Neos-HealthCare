import { actionType } from "./actionType";

const todoLoading = () => {
  return {
    type: actionType.TODO_LOADING,
  };
};
const todoSuccess = (todoData) => {
  return {
    type: actionType.TODO_SUCCESS,
    payload: todoData,
  };
};
const todoFailure = (error) => {
  return {
    type: actionType.TODO_FAILURE,
    payload: error,
  };
};
const todoReset = () => {
  return {
    type: actionType.TODO_RESET,
  };
};
const todoAdd = (todoData) => {
  return {
    type: actionType.TODO_ADD,
    payload: todoData,
  };
};
const todoDelete = (todoData) => {
  return {
    type: actionType.TODO_DELETE,
    payload: todoData,
  };
};
const todoUpdate = (todoData) => {
  return {
    type: actionType.TODO_UPDATE,
    payload: todoData,
  };
};
const todoComplete = (todoData) => {
  return {
    type: actionType.TODO_COMPLETE,
    payload: todoData,
  };
};

const getTodoList = (id) => {
  return (dispatch) => {
    dispatch(todoLoading());
    fetch("http://localhost:3001/usertodos/" + id)
      .then((response) => response.json())
      .then((data) => {
        dispatch(todoSuccess(data));
      })
      .catch((error) => {
        dispatch(todoFailure(error));
      });
  };
};

const addTodo = (todoData) => {
  return (dispatch) => {
    dispatch(todoAdd(todoData));
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(todoSuccess(data));
      })
      .catch((error) => {
        dispatch(todoFailure(error));
      });
  };
};

const deleteTodo = (todoData) => {
  return (dispatch) => {
    dispatch(todoDelete(todoData));
    fetch("http://localhost:3001/todos/" + todoData.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(todoSuccess(data));
      })
      .catch((error) => {
        dispatch(todoFailure(error));
      });
  };
};

const updateTodo = (todoData) => {
  return (dispatch) => {
    dispatch(todoUpdate(todoData));
    fetch("http://localhost:3001/todos/" + todoData.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(todoSuccess(data));
      })
      .catch((error) => {
        dispatch(todoFailure(error));
      });
  };
};

const completeTodo = (todoData) => {
  return (dispatch) => {
    dispatch(todoComplete(todoData));
    fetch("http://localhost:3001/todos/" + todoData.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(todoSuccess(data));
      })
      .catch((error) => {
        dispatch(todoFailure(error));
      });
  };
};

export {
  todoLoading,
  todoSuccess,
  todoFailure,
  todoReset,
  todoAdd,
  todoDelete,
  todoUpdate,
  todoComplete,
  getTodoList,
  addTodo,
  deleteTodo,
  updateTodo,
  completeTodo,
};
