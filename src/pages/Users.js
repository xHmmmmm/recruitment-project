import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';
import LoadingSpinner from './../LoadingSpinner';
import { useLoading } from './../contexts/LoadingContext';
import User from './../User';
import { useData } from './../contexts/DataContext';

const UsersList = styled.ul`
    display: grid;
    grid-template-columns: 100%;
    gap: 0.5rem;
`

export default function Users()
{
    const { isLoading } = useLoading()
    const { users, fetchUsers } = useData()

    useEffect(() =>
    {
        fetchUsers()
    }, [])

    return (
        <>
            {isLoading ? <LoadingSpinner /> :
                <UsersList >
                    {
                        users.map((user) =>
                            <User key={user.id} {...user} />
                        )
                    }
                </UsersList>}
        </>
    )
}
