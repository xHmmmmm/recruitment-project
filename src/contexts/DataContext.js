import { createContext, useContext, useState } from "react";
import { useLoading } from './LoadingContext';

const DataContext = createContext()

export const useData = () => useContext(DataContext)

export default function DataContextProvider({ children })
{
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [todos, setTodos] = useState([])

    const { setIsLoading } = useLoading()

    const dataCtx = {
        users,
        fetchUsers,
        posts,
        fetchPosts,
        todos,
        fetchTodos,
        comments,
        fetchComments,
        fetchPost,
        getComments
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

    async function fetchComments()
    {
        if (comments.length == 0)
        {
            setIsLoading(true)
            const response = await fetch('https://gorest.co.in/public/v1/comments')
            const result = await response.json()
            setComments(result.data)
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

    async function fetchPost(postId)
    {
        let post = posts.find((post) => post.id == postId)
        if (!post)
        {
            setIsLoading(true)
            const response = await fetch(`https://gorest.co.in/public/v1/posts?id=${postId}`)
            const result = await response.json()
            post = result.data[0]
            setIsLoading(false)
        }
        return post;
    }

    function getComments(postId)
    {
        const postComments = comments.filter((comment) => comment.post_id == postId)
        return postComments;
    }

    return (
        <DataContext.Provider value={dataCtx}>
            {children}
        </DataContext.Provider>
    )
}