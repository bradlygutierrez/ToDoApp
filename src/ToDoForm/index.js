import React from "react";
import { ToDoContex } from "../ToDoContex";
import { useContext } from 'react'
import "./ToDoForm.css";

function ToDoForm() {
    const { openModal,
        addTodo,
        setOpenModal } = useContext(ToDoContex)

    const [newToDoValue, setNewToDoVAlue] = React.useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(newToDoValue)
    }

    const onChange = (event) => {
        setNewToDoVAlue(event.target.value);
    }


    return (
        <form onSubmit={onSubmit}>
            <label>
                Escribe tu nuevo Tarea
            </label>
            <textarea placeholder="Hacer tareas"
                autoFocus
                maxLength={60}
                value={newToDoValue}
                onChange={onChange}
            >
            </textarea>
            <div className="ToDoForm-buttons-space">
                <button className="ToDoForm-Container-buttonClose"
                    onClick={() => {
                        setOpenModal(!openModal)
                    }}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="ToDoForm-Container-buttonAdd">
                    Agregar
                </button>
            </div>

        </form>
    )
}

export default ToDoForm