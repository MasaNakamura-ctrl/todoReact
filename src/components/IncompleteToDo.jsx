export const IncompleteToDo = (props) => {
    const { todos,  onClickComplete, onClickDelete} = props;
    return(
        <div className="incomplete-area">
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