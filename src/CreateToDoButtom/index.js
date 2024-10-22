import './AgregarToDoButoom.css'
import { ToDoContex } from '../ToDoContex'
import React, { useContext } from 'react'
function CreateToDoButton() {
    const {openModal,
        setOpenModal} = useContext(ToDoContex)
    return (
        <button className='CreateToDoButton' 
        onClick={() => {
            if(openModal){
                setOpenModal(false)
            }else{
                setOpenModal(true)
            }
        }}>
            Add
        </button>
    )
}

export {CreateToDoButton};