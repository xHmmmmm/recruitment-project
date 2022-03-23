import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';

const TodoElement = styled.li`
    display: grid;
    grid-template-columns: 2fr 1fr 0.5fr;
`

export default function Todo({ title, dueOn, status })
{
    return (
        <TodoElement>
            <p>{title}</p>
            <p>{dueOn}</p>
            <p>{status}</p>
        </TodoElement>
    )
}
