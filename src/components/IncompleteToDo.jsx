const style = {
    border: "1px solid #40403E",
    width:"400px",
    minHeight: "200px",
    margin:"8px",
    padding:"8px",
    borderRadius:"8px"
}

export const IncompleteToDo = (props) => {
    const { todos,  onClickComplete, onClickDelete} = props;
    return(
        <div style={style}>
            <p className="Title">演奏予定</p>
            <ul id="incomplete-list">
                {todos.map((todo, index) => {
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
    );
}