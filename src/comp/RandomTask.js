import React, { useContext, useState } from 'react'
import { GlobalContext } from "../context/GlobalState"
import { Task } from "./Task"
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';


export const RandomTasks = () => {

    const { tasks } = useContext(GlobalContext)

    const init = tasks[Math.floor(Math.random() * tasks.length)]
    const [random, setRandom] = useState(init)
    const randomiser = () => {
        setRandom(tasks[Math.floor(Math.random() * tasks.length)])
    }

    return (
        <div id="random-container">
            <Button className="randomButton" onClick={randomiser}>Randomise</Button>
            {tasks.map(task => {
                return task.id === random.id ? <Task key={task.id} task={task} /> : null
            })}
        </div>
    )
}
