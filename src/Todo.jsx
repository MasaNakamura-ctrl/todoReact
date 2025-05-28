import { useState } from 'react'
import './Todo.css'

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteToodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText==="") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteToodos(newCompleteTodos);
  }
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteToodos(newCompleteTodos);
  }
  return (
    <>
      <h1>マダシキ</h1>
      <div class="input-area">
        <input id="addText" placeholder="演奏曲を入力" value={todoText} onChange={onChangeTodoText}/>
        <button id="addButton" onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="Title">演奏予定</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo, index) => {
            return(
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button className="complete-button" onClick={() => onClickComplete(index)}>終ふ</button>
                  <button className="delete-button" onClick={() => onClickDelete(index)}>消つ</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="incomplete-area complete-area">
        <p className="Title">演奏した曲</p>
        <ul id="complete-list">
          {completeTodos.map((todo, index) => {
            return(
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickBack(index)}>直す</button>
                </div>
              </li>
              )
            })}
        </ul>
      </div>
    </>
  )
}