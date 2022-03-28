import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';

const TodoElement = styled.li`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;
    grid-template-areas: 
    'title'
    'dueOn';
    padding: 1.5rem;
    box-shadow: rgba(149, 157, 165, 0.15) 0px 0px 20px 5px;
    gap: 0.7rem;
`

const Title = styled.h1`
    grid-area: title;
`

const DueOn = styled.p`
    grid-area: dueOn;
    white-space: nowrap;
    margin-block: 0.7rem 0.3rem;
`

export default function Todo({ title, dueOn, status })
{
    const [dateString, setDateString] = useState('')

    useEffect(() =>
    {
        const d = new Date(dueOn)

        const day = d.getDate()
        const year = d.getFullYear()
        const weekday = d.toLocaleString('en-us', { weekday: 'short' })
        const month = d.toLocaleString('en-us', { month: 'long' })
        setDateString(`${weekday}, ${day} ${month} ${year}`)
    }, [])

    return (
        <TodoElement>
            <Title>{title}</Title>
            <DueOn>{dateString}</DueOn>
        </TodoElement>
    )
}
