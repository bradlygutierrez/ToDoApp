import React from 'react';
import { ToDoContex } from '../ToDoContex';
import './ToDoCounter.css';


function ToDoCounter(){
    const{ completedToDos,
      totalToDos} = React.useContext(ToDoContex)

    return(
    <header> 
      <span className="foto"></span>
      <h1 className={` ${totalToDos == completedToDos ? "completadas" : 'proceso'}`}>
       Has completado <span className="props">{completedToDos} </span> de <span className="props">{totalToDos}</span> tareas
     </h1>
      
      <h1 className={`${totalToDos == completedToDos ? 'completed__all__message' : 'notCompleted'}`}>¡¡¡FELICIDADES, COMPLETASTE TODAS LAS TAREAS!!!</h1>


    </header>
     
    );
 }

 export {ToDoCounter}; 