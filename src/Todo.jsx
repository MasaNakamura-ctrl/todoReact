import { useState } from 'react'
import './Todo.css'

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["演奏予定の曲1","演奏予定の曲2"]);
  const [completeTodos, setCompleteToodos] = useState(["演奏した曲1","演奏した曲2"]);
  return (
    <>
      <h1>マダシキ</h1>
      <div class="input-area">
        <input id="addText" placeholder="演奏曲を入力"/>
        <button id="addButton">追加</button>
      </div>
      <div className="incomplete-area">
        <p className="Title">演奏予定</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo) => {
            return(
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button className="complete-button">終ふ</button>
                  <button className="delete-button">消つ</button>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
    <div className="incomplete-area complete-area">
      <p className="Title">演奏した曲</p>
      <ul id="complete-list">
        {completeTodos.map((todo) => {
          return(
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>直す</button>
              </div>
            </li>
            )
          })}
      </ul>
    </div>
    </>
  )
}