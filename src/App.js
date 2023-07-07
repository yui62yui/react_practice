import './App.css';
import { useState } from 'react';
import { nanoid } from "nanoid";

function App() {
  const [todoList, setTodoList] = useState([
    {id: nanoid(), content: "리액트 공부하기"},
    {id: nanoid(), content: "아침 운동하기"},
  ]);

  const [newTodo, setNewTodo] = useState("")

  return (
    <>
      <input
        value={newTodo}
        onChange={(e)=>{
          setNewTodo(e.target.value)
        }}
      />
      <button onClick={()=>{
        const newList = [...todoList, {id: nanoid(), content: newTodo}]
        setTodoList(newList)
        setNewTodo("")
      }}>등록</button>

      {/* nanoid 적용한 걸로 다시 고치기 */}

      {todoList.map((todo)=>{
        return (
          <>
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
          </>
        )
      })}

    </>
 )
}

export default App;
