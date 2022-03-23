import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    display: grid;
    place-content: center;
    height: 100%;
`

const Spinner = styled.div`
    display: grid;

    :after
    {
        content: "";
        display: grid;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        border: 7px solid black;
        border-color: black transparent;
        animation: spin 1.5s linear infinite;
    }

    @keyframes spin
    {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export default function LoadingSpinner()
{
    return (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    )
}
