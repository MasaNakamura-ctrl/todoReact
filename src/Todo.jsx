import { useState } from 'react'
import './Todo.css'
import { InputToDo } from './components/InputToDo';
import { IncompleteToDo } from './components/IncompleteToDo';
import { CompleteToDo } from './components/CompleteToDo';

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
  const isMaxIncompleteLength = incompleteTodos.length >=5
  return (
    <>
      <h1>マダシキ</h1>
      <InputToDo
      todoText={todoText}
      onChange={onChangeTodoText}
      onClick={onClickAdd}
      disabled={isMaxIncompleteLength}/>
      {isMaxIncompleteLength && (
        <p style={{color:"red"}}>登録できる上限は5つです</p>
      )}
      <IncompleteToDo
      todos={incompleteTodos}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
      />
      <CompleteToDo
      todos={completeTodos}
      onClickBack={onClickBack}
      disabled={isMaxIncompleteLength}/>
    </>
  )
}