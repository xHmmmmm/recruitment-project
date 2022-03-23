import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';

const PostElement = styled.li`
    display: grid;
    grid-template-columns: 1fr 2fr;
`

export default function Post({ title, body })
{
    return (
        <PostElement>
            <p>{title}</p>
            <p>{body}</p>
        </PostElement>
    )
}
