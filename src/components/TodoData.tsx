
//[1, 2, 3] // number[]


interface iProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
    deleteTodo: (value: number) => void;
}



const TodoData = (props: iProps) => {
    const { todos, deleteTodo } = props;
    return (
        <div>
            {
                todos.map(item => {
                    return (
                        <div key={item.id}>
                            <div style={{ padding: "10px 0" }}>
                                {item.id} - {item.title}
                                &nbsp;
                                <button
                                    onClick={() => deleteTodo(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoData;