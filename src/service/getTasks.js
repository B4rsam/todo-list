import axios, {isCancel, AxiosError} from 'axios';

export function getTasks() {
    return axios('https://dummyjson.com/todos')
}

export default getTasks