import React from "react";
import {ToDoIcon} from  '../ToDoIcon';

function CompleteIcon({completed, onComplete}){
    return(
        <ToDoIcon
        type="check"
        color={completed ? "#00ab41" : "gray"}
        onClick={onComplete}
        />

    )  
}
export {CompleteIcon}