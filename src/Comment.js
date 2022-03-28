import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';

const CommentWrapper = styled.li`
    display: grid;
    position: relative;

    ::before
    {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        top: -0.5rem;
        background-color: black;
    }
`

const Name = styled.p`
    
`

const Email = styled.p`

`

const Body = styled.p`

`

export default function Comment({ name, email, body })
{
    return (
        <CommentWrapper>
            <Name>{name}</Name>
            <Email>{email}</Email>
            <Body>{body}</Body>
        </CommentWrapper>
    )
}
