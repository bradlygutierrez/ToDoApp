import React, { useContext } from 'react';
import { ToDoCounter } from '../ToDoCounter/index.js';
import { TodoSearch } from '../ToDoSearch/index.js';
import { TodoList } from '../ToDoList/index.js';
import { CreateToDoButton } from '../CreateToDoButtom/index.js';
import { ToDoItems } from '../ToDoItems/index.js';
import { ToDosLoading } from '../ToDosLoading/ToDosLoading.js';
import { ToDosError } from '../ToDosError/ToDosError.js';
import { ToDoContex } from '../ToDoContex/index.js';
import Modal from '../Modal/index.js';
import ToDoForm from '../ToDoForm/index.js';


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeToDo,
    deteToDo,
    openModal, 
    setOpenModal
  } = useContext(ToDoContex);
  return (
    <div className='main-body'>
      <div className='circle-ornament'></div>
      <ToDoCounter />

      <TodoSearch />
      <TodoList>
        {loading && <ToDosLoading />}
        {error && <ToDosError />}
        {(!loading && searchedTodos.length === 0) && <p> Please, create your first to do</p>}

        {searchedTodos.map(i =>
          <ToDoItems
            key={i.text} text={i.text}
            completed={i.completed}
            onComplete={() => completeToDo(i.text)}
            onDelete={() => deteToDo(i.text)}
          />)}
      </TodoList>
      <CreateToDoButton />
      {openModal && (
        < Modal >
          <ToDoForm/>
        </Modal>
      )}

    </div >
  );

}

export default AppUI;