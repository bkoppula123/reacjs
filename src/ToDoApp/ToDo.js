import React, { useState } from 'react';
import './ToDoApp.css'
function TodoList() {

    let [inputText, UpdateInputtext] = useState("test");
    let [toDoInput, toDoInputUpate] = useState([
        {
            id: 1,
            fname: 'ram'
        },
        {
            id: 2,
            fname: 'koppula'
        }]
    );

    function addTodoListItems() {
        if (inputText === "") {
            alert("your input is empty");
        } else {
           let todo={
             id:toDoInput.length+1,
             fname:inputText
           }

            toDoInputUpate([...toDoInput,todo]);

        }
    }

    function deleteList(id){


       toDoInputUpate(toDoInput.filter((todo) => todo.id !== id));

    }

    return (
        <div className="container mt-5 w-50">
            <div className="input-group">
                <input className="form-control" onChange={(e) => {
                    UpdateInputtext(e.target.value)
                }} type="text" value={inputText}></input>
                <button className="btn btn-primary" id="addButton" onClick={() => {
                    addTodoListItems()
                }}> Add</button>
            </div>
            <ul className="list-group-item" >
                {toDoInput.map((item) => (
                    <li key={item.id} className='listGroupName' >
                        {item.fname}
                        <button className="btn btn-secondary btn-sm" onClick={()=>{
                              deleteList(item.id);
                        }}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;