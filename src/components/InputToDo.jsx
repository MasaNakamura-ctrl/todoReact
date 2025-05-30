export const InputToDo = (props) => {
    const { todoText, onChange, onClick } = props;
    return (
        <div class="input-area">
            <input id="addText" placeholder="演奏曲を入力" value={todoText} onChange={onChange}/>
            <button id="addButton" onClick={onClick}>追加</button>
        </div>
    )
}