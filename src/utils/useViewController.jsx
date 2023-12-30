import { useState, useEffect, useMemo, useRef } from 'react'
import { getTasks, deleteTask, editTask} from '../service/apiRequest'
import Task from '../components/Task/Task'

const useViewController = () => {
    const firstRun = useRef(true)
    const [task, setTasks] = useState([])
    const [isLoading, setLoading] = useState(false)

    const handleUpdate = () => {
        setLoading(true)
        getTasks().catch().then((data) => {
            setLoading(false)
            setTasks(data.data.todos)})
    }

    const getTaskData = (id) => {
        const tasks = new Map()
        task.forEach((item) => {
            tasks.set(item.id, item)
        })
        return tasks.get(id)
    }

    const handleDeletion = (id) => {
        deleteTask(id).then(() => {
            const filteredItem = task.filter((task) => task.id !== id)
            setTasks(filteredItem)
        })
    }

    const dummyUpdate = (inTask) => {
        inTask = {
            ...inTask,
            id: 100
        }
        setTasks(task.concat(inTask))
    }

    const dummyEdit = (id, text) => {
        setTasks((task) => {
            task[id-1].todo = text
            return task
        })
    }

    const details = useMemo(() => ({getTaskData, handleDeletion, dummyEdit}), [task])
    const taskIds = useMemo(() => task.map(({id}) => id), [task])
    const taskList = useMemo(() => taskIds.map((id) => <Task key={id} id={id}/>), [taskIds])

    useEffect(() => {
        if (firstRun.current)
        {
            handleUpdate()
            firstRun.current = false
        }
    },[])

    return {
        taskList,
        details,
        dummyUpdate,
        //dummyEdit,
        isLoading,
    }
}

export default useViewController