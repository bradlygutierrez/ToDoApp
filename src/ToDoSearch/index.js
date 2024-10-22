import React from 'react'
import './ToDoSearch.css'
import { ToDoContex } from '../ToDoContex'

function TodoSearch(){
    const{ searchValue,
        setSearchValue
        } = React.useContext(ToDoContex)
    return(
        <input placeholder="Estudiar React" className="searchbar" 
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}>
        </input>
    )
}

export {TodoSearch};