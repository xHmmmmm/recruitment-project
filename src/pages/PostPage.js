import React, { useState, useEffect, useReducer } from 'react'
import { useParams } from "react-router-dom"
import { useData } from './../contexts/DataContext';
import LoadingSpinner from './../LoadingSpinner';
import { useLoading } from './../contexts/LoadingContext';
import styled from 'styled-components';
import Comment from '../Comment';

const PostWrapper = styled.div`
    display: grid;
    padding: 1rem;
    gap: 1rem;
`

const Title = styled.h1`

`

const Content = styled.p`

`

const CommentsSectionLabel = styled.p`

`

const CommentsList = styled.ul`
    display: grid;
    grid-auto-rows: fit-content;
    gap: 1rem;
`

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
            {isLoading ? <LoadingSpinner /> :
                <PostWrapper>
                    <Title>{title}</Title>
                    <Content>{content}</Content>
                    <CommentsSectionLabel>{postComments.length === 0 ? "No comments to show" : "Comments"}</CommentsSectionLabel>
                    <CommentsList>
                        {postComments.map((comment) => (
                            <Comment key={comment.id} {...comment} />
                        ))}
                    </CommentsList>
                </PostWrapper>}
        </>
    )
}