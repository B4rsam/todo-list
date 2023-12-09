import axios, {isCancel, AxiosError} from 'axios';
import Task from '../components/Task';

export function getTasks() {
    return axios('https://dummyjson.com/todos')
}

export function deleteTask(id) {
    return axios.delete(`https://dummyjson.com/todos/${id}`).then(console.log(`Task ID ${id} deleted`))
}

export function addTask(taskBody,taskStatus) {
    axios.put("https://dummyjson.com/todos/add", {
        body: taskBody,
        completed: taskStatus,
    }).then(console.log("Task Added"))
}

export default getTasks