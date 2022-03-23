import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';

const UserElement = styled.li`
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr 0.5fr;
`

export default function User({ name, email, gender, status })
{
    return (
        <UserElement>
            <p>{name}</p>
            <p>{email}</p>
            <p>{gender}</p>
            <p>{status}</p>
        </UserElement>
    )
}
