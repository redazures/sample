import React,{ useState } from 'react'
import { Create, Delete } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import Activity from './Activity.js'
import './TodoCard.css';

const TodoCard = (props) => {
    const { currentId, el, editHandler, deleteHandler, addTodo, setAddTodo, addTodoHandler } = props
    const [ selected, setSelected ] = useState(false)

    return(
        <>
        {selected ? 
            <Activity 
                currentId={currentId}
                current={el}
                addTodo={addTodo} 
                editHandler={editHandler} 
                addTodoHandler={addTodoHandler}
                setAddTodo={setAddTodo}
                setSelected={setSelected}
            />
            : 
            <div className='card'>
                <div className='activity'>{el}</div>
                <div className='icons'>
                    <IconButton
                        onClick={()=>setSelected(true)}
                    >
                        <Create/>
                    </IconButton>
                    <IconButton
                        onClick={()=>deleteHandler(currentId)}
                    >
                        <Delete/>
                    </IconButton>
                </div>
            </div>
        }
        </>
    )
}

export default TodoCard