const style = {
    backgroundColor: "#D0D8DA",
    border: "1px solid #40403E",
    width:"400px",
    height:"30px",
    margin:"8px",
    padding:"8px",
    borderRadius:"8px"
}

export const InputToDo = (props) => {
    const { todoText, onChange, onClick } = props;
    return (
        <div style={style}>
            <input id="addText" placeholder="演奏曲を入力" value={todoText} onChange={onChange}/>
            <button id="addButton" onClick={onClick}>追加</button>
        </div>
    )
}