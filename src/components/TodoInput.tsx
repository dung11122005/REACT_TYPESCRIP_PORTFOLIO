


interface iprops {
    name?: string;
}

const TodoInput = (props: iprops) => {

    const { name } = props;
    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
            <input value={name} type="text" />
            <button>Add todo</button>
        </div>
    )
}

export default TodoInput;