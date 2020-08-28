import React, { createContext, useReducer } from 'react'
import AppReducer from "./AppReducer"

const initialState = {
    tasks: [
        { id: 1, taskName: "Shopping", taskDesc: "Go to the shops and buy some bread and milk.", taskLvl: "High" },
        { id: 2, taskName: "Disertation", taskDesc: "Remember to hand in disertation.", taskLvl: "Medium" },
        { id: 3, taskName: "MOT", taskDesc: "Drop car off at Garage for MOT.", taskLvl: "Low" }
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addTask = task => {
        dispatch({ type: "ADD_TASK", payload: task })
    }

    const deleteTask = (id) => {
        dispatch({ type: "DELETE_TASK", payload: id })
    }

    return (
        <GlobalContext.Provider
            value={{
                tasks: state.tasks,
                deleteTask,
                addTask
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
