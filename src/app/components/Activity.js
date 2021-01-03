import React from 'react'

import './Activity.css';

const NewActvity =(props)=>(
    <div className='input'>
        <input
            type='text'
            placeholder="Add An Activity" 
            className='addTodo'
            name="activity" 
            defaultValue={props.current}
            value={ props.addToDo } 
            onChange={ e => props.setAddTodo(e.target.value) }
        />
        <button type='button' 
            className="saveButton" 
            onClick={
                props.current ? 
                    ()=>{
                        props.editHandler(props.currentId, props.addTodo)
                        props.setSelected(false)
                    }
                : 
                        props.addTodoHandler
        }>
            Save
        </button>
    </div>
)

export default NewActvity