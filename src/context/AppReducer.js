export default (state, action) => {
    switch (action.type) {
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case "ADD_TASK":
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        default:
            return state
    }
}