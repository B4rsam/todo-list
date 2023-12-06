import axios, {isCancel, AxiosError} from 'axios';

export function getTasks() {
    return axios('https://dummyjson.com/todos')
}

export function deleteTask(id) {
    return axios.delete(`https://dummyjson.com/todos/${id}`).then(console.log(`Task ID ${id} deleted`))
}

export function addTask() {
    console.log("add")
}

export default getTasks