import { useState, useEffect, useMemo, useRef } from 'react'
import { getTasks, deleteTask, addTask} from '../service/apiRequest'
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
        if (confirm("Are you sure you wish to delete this task?"))
        {
            deleteTask(id).then(() => {
                const filteredItem = task.filter((task) => task.id !== id)
                setTasks(filteredItem)
                }) 
        }
        
    }

    const dummyUpdate = (inTask) => {
        inTask = {
            ...inTask,
            id: 100
        }
        setTasks(task.concat(inTask))
    }

    const dummyEdit = (id, text) => {
        const temp = {
            ...task[id],
            todo: text
        }
        //this code is a warcrime probably
        deleteTask(id).then(() => {
            handleDeletion(id)
        }).then(() => {
            addTask(temp).then(() => {
                dummyUpdate(temp)
            })
        })
    }

    const details = useMemo(() => ({getTaskData, handleDeletion}), [task])
    const taskIds = useMemo(() => task.map(({id}) => id), [task])
    const taskList = useMemo(() => taskIds.map((id) => <Task key={id} id={id} onEdit={dummyEdit} />), [taskIds])

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
        isLoading,
    }
}

export default useViewController