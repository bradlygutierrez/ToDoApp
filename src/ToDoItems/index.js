import './ToDoItem.css'
import {CompleteIcon} from '../CompleteIcon/index'
import {DeleteIcon} from '../DeleteIcon/index'



function ToDoItems({text, completed,onComplete,onDelete}){
    return (
      <li className="ToDoItem">
        <DeleteIcon
         onDelete={onDelete}

        />

        {/* <span 
        className="Icon Icon-delete"
        onClick={onDelete}
        >x</span> */}

        <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}> {text}</p>
        
        {/* <span><input type= "checkbox" className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
        ></input></span> */}

        <CompleteIcon
        completed={completed}
        onComplete={onComplete}
        />
        

      </li>
    );
  }

export {ToDoItems};