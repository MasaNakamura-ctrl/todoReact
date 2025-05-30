export const CompleteToDo = (props) => {
    const {todos, onClickBack} = props;
    return (
        <div className="incomplete-area complete-area">
            <p className="Title">演奏した曲</p>
            <ul id="complete-list">
            {todos.map((todo, index) => {
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
    )
}