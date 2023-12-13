import apiInstance from './apiInstance';

const getTasks = async () => {
    const response = apiInstance.get()
    return response
}

function deleteTask(id) {
    return apiInstance.delete(`/${id}`)
}

function addTask(task) {
    return apiInstance.post("/add", {
        todo: task.todo,
        completed: task.completed,
        userId: 1,
    })
}

export {getTasks,deleteTask,addTask}