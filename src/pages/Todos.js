import React, { useState, useEffect, useReducer, useLayoutEffect } from 'react'
import styled from 'styled-components';
import LoadingSpinner from './../LoadingSpinner';
import { useLoading } from './../contexts/LoadingContext';
import Todo from './../Todo';
import { useData } from './../contexts/DataContext';

const TodosList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 1fr;
    gap: 1rem;
    
    @media(max-width: 1700px)
    { 
        grid-template-columns: repeat(4, 1fr);
    }
    
    @media(max-width: 1300px)
    { 
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media(max-width: 950px)
    { 
        grid-template-columns: repeat(2, 1fr);
        font-size: 0.8rem;
    }

    @media(max-width: 700px)
    { 
        grid-template-columns: 1fr;
        font-size: 0.8rem;
    }
`

const TopPanel = styled.div`
    display: grid;
    grid-template-columns: min-content min-content min-content 1fr min-content;
    margin-bottom: 1rem;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    
    @media(max-width: 700px)
    { 
        font-size: 0.8rem;
        gap: 0.8rem;
        margin-bottom: 0.8rem;
    }
`

const SortingLabel = styled.p`
    white-space: nowrap;
    font-weight: bold;
`

const SortButton = styled.button`
    padding: 1em;
    font-size: 1em;
    border-radius: 5px;
    font-weight: 600; 
    transition: background-color 0.2s ease-in-out;

    @media(hover)
    {
        :hover
        {
            background-color: #d1d1d1;
        }
    }
`

const ToggleListButton = styled.button`
    grid-column: 5;
    padding: 1em;
    font-size: 1em;
    border-radius: 5px;
    font-weight: bold;
    background-color: ${({ isPending }) => isPending ? '#ffc219' : '#3ab800'};
    transition: background-color 0.2s ease-in-out;
    
    @media(hover)
    {
        :hover
        {
            background-color: ${({ isPending }) => isPending ? '#d4a011' : '#2f9400'};
        }
    }
`

const Sorting = {
    Property: {
        Date: 'Date',
        Title: 'Title',
    },
    Order: {
        Ascending: 'Ascending',
        Descending: 'Descdending'
    }
}

export default function Todos()
{
    const { isLoading } = useLoading()
    const { todos, fetchTodos } = useData()

    const [filteredTodos, setFilteredTodos] = useState([])
    const [sortProperty, setSortProperty] = useState(Sorting.Property.Date)
    const [sortOrder, setSortOrder] = useState(Sorting.Order.Ascending)

    const [isPendingList, toggleList] = useReducer((prev) =>
    {
        let newList
        console.log('aaaaaaa')
        if (prev) newList = todos.filter((todo) => todo.status === 'completed')
        else newList = todos.filter((todo) => todo.status === 'pending')

        newList = sortList(newList, sortProperty, sortOrder)
        setFilteredTodos(newList)

        return !prev
    }, true)

    useEffect(() =>
    {
        fetchTodos()
        console.log('dfsfsd')
    }, [])

    useEffect(() =>
    {
        let pending = todos.filter((todo) => todo.status === 'pending')
        console.log(sortOrder)
        pending = sortList(pending, sortProperty, sortOrder)
        console.log(pending)
        setFilteredTodos(pending)
    }, [todos])

    useLayoutEffect(() =>
    {
        let newList = [...sortList(filteredTodos, sortProperty, sortOrder)]
        setFilteredTodos(newList)
    }, [sortProperty, sortOrder])

    function sortList(array, property, order)
    {
        array.sort((a, b) =>
        {
            if (property === Sorting.Property.Date)
            {
                if (order === Sorting.Order.Ascending) return new Date(a.due_on) - new Date(b.due_on)
                else return new Date(b.due_on) - new Date(a.due_on)
            }
            else
            {
                if (order === Sorting.Order.Ascending) return a.title.localeCompare(b.title)
                else return b.title.localeCompare(a.title)
            }
        })
        return array
    }

    function toggleSortProperty()
    {
        if (sortProperty === Sorting.Property.Date) setSortProperty(Sorting.Property.Title)
        else setSortProperty(Sorting.Property.Date)
    }

    function toggleSortOrder()
    {
        console.log(sortOrder)
        if (sortOrder === Sorting.Order.Ascending) setSortOrder(Sorting.Order.Descending)
        else setSortOrder(Sorting.Order.Ascending)
    }

    return (
        <>
            <TopPanel>
                <SortingLabel>Sort by</SortingLabel>
                <SortButton onClick={toggleSortProperty}>{sortProperty}</SortButton>
                <SortButton onClick={toggleSortOrder}>{sortOrder}</SortButton>
                <ToggleListButton isPending={isPendingList} onClick={toggleList} >{isPendingList ? "Pending" : "Completed"}</ToggleListButton>
            </TopPanel>
            {isLoading ? <LoadingSpinner /> :
                <TodosList >
                    {
                        filteredTodos.map((todo) =>
                            <Todo key={todo.id} title={todo.title} dueOn={todo.due_on} status={todo.status} />
                        )
                    }
                </TodosList>}
        </>
    )
}
