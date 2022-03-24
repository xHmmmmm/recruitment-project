import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';
import { useLoading } from './../contexts/LoadingContext';
import LoadingSpinner from './../LoadingSpinner';
import { useData } from './../contexts/DataContext';
import Post from "../Post";

const PostsList = styled.ul`
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 1fr;
    gap: 1rem;
`

export default function Posts()
{
    const { isLoading } = useLoading()
    const { posts, fetchPosts, fetchComments } = useData()

    useEffect(() =>
    {
        fetchPosts()
        fetchComments()
    }, [])

    return (
        <>
            {isLoading ? <LoadingSpinner /> :
                <PostsList>
                    {
                        posts.map((post) =>
                            <Post key={post.id} {...post} />
                        )
                    }
                </PostsList>}
        </>
    )
}
