const style = {
    border: "1px solid #40403E",
    width:"400px",
    minHeight: "200px",
    margin:"8px",
    padding:"8px",
    borderRadius:"8px",
    backgroundColor: "#D0D8DA"
}

export const CompleteToDo = (props) => {
    const {todos, onClickBack, disabled} = props;
    return (
        <div style={style}>
            <p className="Title">演奏した曲</p>
            <ul id="complete-list">
            {todos.map((todo, index) => {
                return(
                <li key={todo}>
                    <div className="list-row">
                    <p className="todo-item">{todo}</p>
                    <button disabled={disabled} onClick={() => onClickBack(index)}>直す</button>
                    </div>
                </li>
                )
                })}
            </ul>
        </div>
    )
}