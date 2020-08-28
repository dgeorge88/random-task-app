import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import { Card, Button } from "react-bootstrap"

export const Task = ({ task }) => {
    const { deleteTask } = useContext(GlobalContext)

    const priorityBackground = () => {
        switch (task.taskLvl) {
            case "High":
                return { color: "Red" }
            case "Medium":
                return { color: "Orange" }
            case "Low":
                return { color: "Green" }
            default:
                return { color: "White" }
        }
    }

    return (
        <Card className="taskDiv">
            <Card.Body>
                <Card.Title style={priorityBackground()}>{task.taskName}</Card.Title>
                <Card.Text>
                    {task.taskDesc}
                </Card.Text>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete Task</Button>
            </Card.Body>
        </Card >

    )
}
