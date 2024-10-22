import './ToDosLoading.css';
import React, { useState, useEffect } from 'react';



function ToDosLoading (){
    const storedItems = JSON.parse(localStorage.getItem('TODOS_V1'))
    return(
      <ul className='todosLoading'>
        {storedItems.map(x => (
          <li key={x.text} className='itemCarga'></li>

        ))}
      </ul>
    ) 
      
}

export {ToDosLoading}
