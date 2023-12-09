import axios, {isCancel, AxiosError} from 'axios';

export function getTasks() {
    return axios('https://dummyjson.com/todos')
}

export function deleteTask(id) {
    return axios.delete(`https://dummyjson.com/todos/${id}`).then(console.log(`Task ID ${id} deleted`))
}

export function addTask(taskBody,taskStatus) {
    axios.post("https://dummyjson.com/todos/add", {
        todo: taskBody,
        completed: taskStatus,
        userId: 100,
    }).then(console.log("Task Added"))
}

export default getTasks