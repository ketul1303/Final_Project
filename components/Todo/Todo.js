import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  resetTodo,
  deleteTodo,
  checkboxTodo,
  editingTodo,
  submitEditing,
  setInputValue,
  addTodo,
} from './TodoSlice'

export default function Todo() {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todo.list);
    const editing = useSelector((state) => state.todo.editing);
    const newvalue = useSelector((state) => state.todo.value);

    function handleSubmit() {
      if (editing !== null) {
        dispatch(submitEditing(newvalue));
      } else {
        dispatch(
          addTodo({
            data: newvalue,
          })
        );
      }
    }
    function handleReset() {
      dispatch(resetTodo());
    }

    function handleEdit(edit) {
      dispatch(editingTodo(edit.id));
    }

    function handleDelete(item) {
      dispatch(deleteTodo({ newid: item.id }));
    }

    function handleCheckbox(checkedTodo) {
      dispatch(checkboxTodo(checkedTodo));
    }

  return (
    <div className="todo">
            <h1>Todo App</h1>
            <input
              type="text"
              value={newvalue}
              onChange={(event) => {
                dispatch(setInputValue({ dataname: event.target.value }));
              }}
            ></input>
            <button variant="primary" onClick={handleSubmit}>
              {editing === null ? "Add" : "Update"}
            </button>
            <button variant="primary" onClick={handleReset}>
              Reset
            </button>
            {list.map((item) => {
              return (
                !item.ischecked && (
                  <>
                    <div
                      key={item.id}
                    >
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={item.ischecked}
                        onChange={() => handleCheckbox(item.id)}
                      />{" "}
                      {item.data}
                        <button
                          onClick={() => handleDelete(item)}
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                    </div>
                  </>
                )
              );
            })}
            <br />
            {list.map((item) => {
              return (
                item.ischecked && (
                  <>
                    <div
                      key={item.id}
                    >
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={item.ischecked}
                        onChange={() => handleCheckbox(item.id)}
                      />
                      {item.data}
                      <button
                        className="btn btn-sm   ms-5"
                        onClick={() => handleDelete(item)}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                    </div>
                  </>
                )
              );
            })}
    </div>
  );
}

