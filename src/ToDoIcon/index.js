import React from "react";
import {ReactComponent as CompleteIconSVG} from '../logos/tachado.svg'
import {ReactComponent as DeleteIconSVG} from '../logos/flecha.svg'
import "./ToDoIcon.css"

const iconTypes = {
    "check" : (color) => <CompleteIconSVG className="Icon-svg" fill = {color}/>,
    "delete" :(color) =>  <DeleteIconSVG className="Icon-svg" fill = {color}/>
}

function ToDoIcon({type,color, onClick}){
    return(
        <span
        className={`Icon-container  Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export {ToDoIcon}
