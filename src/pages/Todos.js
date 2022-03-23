import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';
import LoadingSpinner from './../LoadingSpinner';
import { useLoading } from './../contexts/LoadingContext';
import Todo from './../Todo';
import { useData } from './../contexts/DataContext';

const TodosList = styled.ul`
    display: grid;
    grid-template-columns: 100%;
`

export default function Todos()
{
    const { isLoading } = useLoading()
    const { todos, fetchTodos } = useData()

    useEffect(() =>
    {
        fetchTodos()
    }, [])

    return (
        <>
            {isLoading ? <LoadingSpinner /> :
                <TodosList >
                    {
                        todos.map((todo) =>
                            <Todo key={todo.id} title={todo.title} dueOn={todo.due_on} status={todo.status} />
                        )
                    }
                </TodosList>}
        </>
    )
}
