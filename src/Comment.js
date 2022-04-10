import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';

const CommentWrapper = styled.li`
    display: grid;
    grid-template-columns: min-content 1fr minmax(1rem, min-content);
    grid-template-rows: min-content min-content;
    grid-template-areas:
    'name x email'
    'content content content';
    gap: 1rem;
    font-size: clamp(0.75rem, 2vw, 2rem);
    padding: 1em;
    border: 1px solid #777777;
    border-radius: 3px;
`

const Name = styled.p`
    grid-area: name;
    white-space: nowrap;
    font-weight: bolder;
`

const Email = styled.p`
    grid-area: email;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666666;
`

const Body = styled.p`
    grid-area: content;
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
