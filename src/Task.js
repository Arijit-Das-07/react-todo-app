import React, { useState } from "react";
import Form from "./Form";

function Task({ editTodo, todo, deleteTodo }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = text => {
    setIsEdit(false);
    editTodo(todo.id, text);
  };

  return (
    <div>
      {isEdit ? (
        <Form onSubmit={handleEdit} value={todo.task} buttonText="Update" />
      ) : (
        <p>
          {todo.task}&nbsp;
          <button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            edit
          </button>
          &nbsp;
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            delete
          </button>
        </p>
      )}
    </div>
  );
}

export default Task;
