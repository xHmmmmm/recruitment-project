import React, { useState, useEffect, useReducer } from 'react'
import { useParams } from "react-router-dom"
import { useData } from './../contexts/DataContext';
import LoadingSpinner from './../LoadingSpinner';
import { useLoading } from './../contexts/LoadingContext';

export default function PostPage()
{
    const params = useParams()
    const { isLoading } = useLoading()
    const { comments, getComments, fetchPost, fetchComments } = useData()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [postComments, setPostComments] = useState([])

    useEffect(() =>
    {
        async function loadPost()
        {
            const currentPost = await fetchPost(params.id)
            setTitle(currentPost.title)
            setContent(currentPost.body)
            await fetchComments()
        }

        loadPost()
    }, [])

    useEffect(() =>
    {
        setPostComments(getComments(params.id))
    }, [comments])

    return (
        <>
            {isLoading ? <LoadingSpinner /> : <div>{postComments.map((comment) => <p>{comment.id}</p>)}</div>}
        </>
    )
}