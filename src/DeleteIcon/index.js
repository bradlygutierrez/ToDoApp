import React from "react";
import {ToDoIcon} from  '../ToDoIcon/index.js';

function DeleteIcon({onDelete}){
    return (
        <ToDoIcon
        type="delete"
        color="gray"
        onClick={onDelete}
        />
    );
}

export {DeleteIcon}