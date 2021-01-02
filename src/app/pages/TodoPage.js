import React, {useState} from 'react'

import Header from '../components/Header.js'
import SearchBar from '../components/SearchBar.js'
import TodoCard from '../components/TodoCard.js'
import NewActvity from '../components/NewActivity.js'

import './TodoPage.css'
const data = [
    {
        key:1,
        activity:"workout"
    },
    {
        key:2,
        activity:"run"
    },
    {
        key:3,
        activity:"burn"
    }

]

const TodoList = () => {
    const [ todo, setTodo ]=useState(data)
    const [ search, setSearch ] = useState("")
    const [ addTodo, setAddTodo ] = useState("")
    const [ showAdd, setShowAdd ] = useState(false)

    const displayTodo = () =>{
        const filteredTodo = todo.filter(el=>el.activity.toLowerCase().includes(search.toLowerCase()))
        return filteredTodo.map((el)=>
            <TodoCard 
                key={el.key} 
                currentId={el.key}
                el={el.activity} 
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                addTodo={addTodo} 
                setAddTodo={setAddTodo} 
                addTodoHandler={addTodoHandler}
            />
        )
    }

    const addTodoHandler = () =>{
        const newArr =[...todo,{key:todo.length+1, activity:addTodo}]
        setTodo(newArr)
        setShowAdd(false)
    }

    const editHandler = (key,newEl) =>{
        const el = todo.find(el=>el.key===key)
        el.activity=newEl
        const newArray=[...todo]
        setTodo(newArray)
    }

    const deleteHandler = obj =>{
        const newArr=todo.filter(el=>el!==obj)
        setTodo(newArr)
    }
    return(
        <>
            <Header>My To-Do List</Header>
            <div className='todoContainer'>
                <SearchBar search={search} setSearch={setSearch} setShowAdd={setShowAdd}/>
                {showAdd ? 
                    <NewActvity addTodo={addTodo} 
                        setAddTodo={setAddTodo} 
                        addTodoHandler={addTodoHandler}
                    />
                    :
                    null
                }
                    <div className="list">
                        {displayTodo()}
                    </div>
            </div>
        </>
    )
}

export default TodoList