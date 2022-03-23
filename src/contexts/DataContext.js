import { createContext, useContext, useState } from "react";
import { useLoading } from './LoadingContext';

const DataContext = createContext()

export const useData = () => useContext(DataContext)

export default function DataContextProvider({ children })
{
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [todos, setTodos] = useState([])

    const { setIsLoading } = useLoading()

    const dataCtx = {
        users,
        fetchUsers,
        posts,
        fetchPosts,
        todos,
        fetchTodos
    }

    async function fetchUsers()
    {
        if (users.length == 0)
        {
            setIsLoading(true)
            const response = await fetch('https://gorest.co.in/public/v1/users')
            const result = await response.json()
            setUsers(result.data)
            setIsLoading(false)
        }
    }

    async function fetchPosts()
    {
        if (posts.length == 0)
        {
            setIsLoading(true)
            const response = await fetch('https://gorest.co.in/public/v1/posts')
            const result = await response.json()
            setPosts(result.data)
            setIsLoading(false)
        }
    }

    async function fetchTodos()
    {
        if (todos.length == 0)
        {
            setIsLoading(true)
            const response = await fetch('https://gorest.co.in/public/v1/todos')
            const result = await response.json()
            setTodos(result.data)
            setIsLoading(false)
        }
    }

    return (
        <DataContext.Provider value={dataCtx}>
            {children}
        </DataContext.Provider>
    )
}