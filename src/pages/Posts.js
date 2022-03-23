import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';
import { useLoading } from './../contexts/LoadingContext';
import LoadingSpinner from './../LoadingSpinner';
import { useData } from './../contexts/DataContext';
import Post from "../Post";

const PostsList = styled.ul`
        display: grid;
        grid-template-columns: 100%;
    `

export default function Posts()
{
    const { setIsLoading, isLoading } = useLoading()
    const { posts, fetchPosts } = useData()

    useEffect(() =>
    {
        fetchPosts()
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
