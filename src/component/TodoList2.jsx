import { nanoid } from 'nanoid';
import React, { useState } from 'react'

const TodoList2 = () => {
    const [todoList, setTodoList] = useState([
        {id: nanoid(), content: "버-보기", likes: 0},
        {id: nanoid(), content: "유튜브 보기", likes: 0}
    ])

    const [newTodo, setNewTodo] = useState("")

  return (
    <>
      <input
        value={newTodo}
        onChange={(e)=>{
            setNewTodo(e.target.value)
        }}
      ></input>

      <button onClick={()=>{
        const newList = {id: nanoid(), content: newTodo, likes: 0}
        setTodoList([...todoList, newList])
        setNewTodo("")
      }}>등록</button>

      {todoList.map((todo)=>{
        return (
            <div key={todo.id}>
                <span>{todo.content}</span>
                <button onClick={()=>{
                    const newList = todoList.filter((list)=>{
                        return list.id !== todo.id
                    })
                    setTodoList(newList)
                }
                }>삭제</button>
                
                <button
                    onClick={()=>{
                        const newArr = todoList.map((item)=>{
                            if (item.id === todo.id) {
                                return {
                                    ...item,
                                    likes: item.likes+1
                                }
                            }
                            return item;
                        });
                        setTodoList(newArr)
                    }}
                >❤{todo.likes}</button>
            </div>
        )
      })}
    </>
  )
}

export default TodoList2
