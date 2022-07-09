import React, { useState, useEffect, useReducer, useLayoutEffect } from 'react'
import styled from 'styled-components';
import { RiDiscussFill, RiArrowRightCircleLine } from 'react-icons/ri'
import { useData } from './contexts/DataContext';
import { Link } from 'react-router-dom';

const PostElement = styled.li`
    display: grid;
    grid-template-columns: fit-content 1fr fit-content;
    grid-template-rows: min-content 1fr min-content;
    grid-template-areas: 
    'title title title'
    'content content content'
    'comments x open';
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 3px;
    box-shadow: rgba(149, 157, 165, 0.15) 0px 0px 20px 5px;

    @media(max-width: 1200px)
    {
        padding: 0.8rem 1rem;
    }
`

const Title = styled.p`
    grid-area: title;
    font-size: 1.5rem;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media(max-width: 1200px)
    {
        font-size: 1.3rem;
    }
`

const Content = styled.p`
    grid-area: content;
    line-height: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3.6rem;

    @media(max-width: 1200px)
    {
        font-size: 1rem;
    }
`

const Comments = styled.div`
    grid-area: comments;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    color: #444444;

    > svg
    {
        font-size: 1.5rem;
    }

    @media(max-width: 1200px)
    {
        font-size: 0.9rem;
        > svg
        {
            font-size: 1.3rem;
        }
    }
`

const OpenBtn = styled(Link)`
    grid-area: open;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-left: auto;
    background-color: transparent;
    font-size: 1rem;
    font-weight: bold;
    color: #444444;

    > svg
    {
        font-size: 1.5rem;
    }

    @media(max-width: 1200px)
    {
        font-size: 0.9rem;
    }
`

export default function Post({ id, title, body })
{
    const { getComments, comments } = useData()
    const [postComments, setPostComments] = useState([])

    useLayoutEffect(() =>
    {
        setPostComments(getComments(id))
    }, [comments])

    return (
        <PostElement>
            <Title>{title}</Title>
            <Content>{body}</Content>
            <Comments>
                <RiDiscussFill />
                Comments: {postComments.length}
            </Comments>
            <OpenBtn to={`/posts/${id}`} >
                Open
                <RiArrowRightCircleLine />
            </OpenBtn>
        </PostElement >
    )
}