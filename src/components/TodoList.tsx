
import TodoData from "./TodoData";
import TodoInput from "./TodoInput";


const TodoList = () => {

    const todos = [
        {
            id: 1,
            title: "Hoang Tan Dung 1",
            isComplete: false
        },
        {
            id: 2,
            title: "Hoang Tan Dung 2",
            isComplete: false
        },
        {
            id: 3,
            title: "Hoang Tan Dung 3",
            isComplete: false
        },
        {
            id: 4,
            title: "Hoang Tan Dung 4",
            isComplete: false
        },
        {
            id: 5,
            title: "Hoang Tan Dung 5",
            isComplete: false
        },
    ]

    return (
        <div style={{
            width: "600px",
            margin: "50px auto",
            border: "1px solid #ccc",
            borderRadius: 10,
            padding: 10
        }}>
            <div style={{
                padding: "10px 0",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                borderBottomStyle: "solid"
            }}
            >My todo list:</div>
            <br />
            <TodoInput name="your todo" />
            <TodoData
                todos={todos}
            // owner={"Hoang Tan Dung"}
            // age={20}
            // isDeveloper={true}
            />
        </div>
    )
}

export default TodoList;