import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import { Task } from "./Task"

export const Tasks = () => {
    const { tasks } = useContext(GlobalContext)

    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}
