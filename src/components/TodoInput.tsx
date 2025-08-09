import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface iprops {
    name?: string;
    addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: iprops) => {

    const { addNewTodo } = props;
    const [todo, setTodo] = useState<string>("");


    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        if (!todo) {
            alert("empty todo")
            return
        }
        addNewTodo({
            id: randomInteger(1, 1000),
            title: todo,
            isComplete: false,
        })

        setTodo("")
    }


    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
            <input type="text"
                value={todo}
                onChange={handleTextChange}
            />
            <button onClick={handleClick}>Add todo</button>
        </div>
    )
}

export default TodoInput;