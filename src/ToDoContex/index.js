import React from "react";
import useLocalStorage from "./useLocalStorage";
const ToDoContex = React.createContext();

function TodoProvider({children}) {

    const {
        item: toDos,
        saveItem: saveToDOs,
        loading,
        error } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    console.log(searchValue);

    const [openModal, setOpenModal] = React.useState(false);

    const searchedTodos  = toDos.filter(toDo =>
        toDo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )

    const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
    const totalToDos = toDos.length;

    const addTodo = (text) => {
        const newTodos = [...toDos];
        newTodos.push({
            text,
            completed:false
        });
        saveToDOs(newTodos);
    }

    const completeToDo = (text) => {
        const newTodos = [...toDos];
        const toDoIndex = newTodos.findIndex((toDo) => toDo.text === text)
        newTodos[toDoIndex].completed = true
        saveToDOs(newTodos);
    }

    const deteToDo = (text) => {
        const newTodos = [...toDos];
        const toDoIndex = newTodos.findIndex((toDo) => toDo.text === text)
        newTodos.splice(toDoIndex, 1);
        saveToDOs(newTodos);
    }

    return (
        <ToDoContex.Provider value={{
            loading,
            error,
            completedToDos,
            addTodo,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeToDo,
            deteToDo,
            openModal,
            setOpenModal
        }}>
            {children}
        </ToDoContex.Provider>
    )
}

export { ToDoContex }
export {TodoProvider}

// localStorage.setItem('TODOS_V1', defaultTodos);
// renderizar arrays 
let defaultTodos = [
  {text: "Cortar cebolla",
   completed: true 
  },
  {text: "Tomar curso React.Js",
   completed: false
  },
  {text: "Estudiar",
   completed: false 
  },
  {text: "Cortar pepino",
   completed: false 
  },
  {text: "Ir a la casimiro",
  completed: true 
 }
]; 
