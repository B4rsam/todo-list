import axios, {isCancel, AxiosError} from 'axios';

export function getTasks() {
    return axios('https://dummyjson.com/todos')
}

export function deleteTask(id) {
    return axios.delete(`https://dummyjson.com/todos/${id}`).then(console.log(`Task ID ${id} deleted`))
}

export function addTask(task) {
    axios.post("https://dummyjson.com/todos/add", {
        todo: task.todo,
        completed: task.completed,
        userId: 1,
    }).then(console.log("Task Added"))
}

export default getTasks