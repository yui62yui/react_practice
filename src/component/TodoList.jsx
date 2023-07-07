import React, { useState } from 'react';
import { nanoid } from 'nanoid';


const TodoList = () => {
    const [todoList, setTodoList] = useState([
        {id: nanoid(), content: "리액트 공부하기", liked: 0 },
        {id: nanoid(), content: "아침 운동하기", liked: 0},
      ]);
    
      const [newTodo, setNewTodo] = useState("");
    
      return (
        <>
          <input
            value={newTodo}
            onChange={(e)=>{
              setNewTodo(e.target.value)
            }}
          />
          <button onClick={()=>{
            const newList = [...todoList, {id: nanoid(), content: newTodo, liked: 0}]
            setTodoList(newList)
            setNewTodo("")
          }}>등록</button>
    
          {todoList.map((todo)=>{
            return (
              <div key={todo.id}>
                <br/>
                <span>{todo.content}</span>
                <button onClick={()=>{
                  const newArr = todoList.filter((a) => {
                    return a.id !== todo.id;
                  })
                  setTodoList(newArr)
                }}>
                  삭제
                </button>
                <button onClick={() => {
                  // const newLiked = todo.liked + 1;
                  // // setTodoList([...todoList])
                  // // 1. setTodoList(todoList)는 안 되는데 왜지요?... 이때는 굳이 안 풀어써도 todoList가 바껴서 적용돼야 되지 않나요?...
                  // setTodoList({...todoList, like: newLiked})
    
                  // 1. todo 중 todo id와 같은 배열만 꺼낸다
                  // 2. todo.liked를 +1 늘려 준다
                  // 3. settodolist를 할때 todolist의 배열을 풀고, liked(key)를 수정해 준다.
    
                  const newArr = todoList.map((item)=>{
                    if (item.id === todo.id) {
                      return {
                        ...item,
                        liked: item.liked +1
                      }
                    }
                    return item;
                  });
                  setTodoList(newArr)
                }}>
                    ♥ {todo.liked}
                </button>
              </div>
            )
          })}
        </>
     )
}

export default TodoList
