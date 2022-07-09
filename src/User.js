import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components';
import { RiCloseCircleFill, RiCheckboxCircleFill } from 'react-icons/ri'

const UserElement = styled.li`
    display: grid;
    grid-template-columns: 1.5fr 2fr 0.5fr min-content;
    padding: 0.5rem 1rem;
    gap: 1rem;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    align-items: center;

    > p
    {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
    }

    @media(max-width: 900px)
    {
        grid-template-columns: min-content 1fr;
    }
`

const Label = styled.p`
    display: none;

    @media(max-width: 900px)
    {
        display: flex;
    }
`

const IconElement = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    
    > svg
    {
        color: ${({ isActive }) => isActive ? 'green' : 'red'};
        font-size: 1.5rem;
    }
    
    > p
    {
        font-size: 0.8rem;
        position: absolute;
        opacity: 0;
        transform: translateX(-105%);
        top: 50%;
        transition: opacity 0.3s ease-in-out;
        pointer-events: none;
        padding: 0.3rem;
        background-color: #eeeeee;
        border-radius: 3px;
        box-shadow: rgba(149, 157, 165, 0.1) 0px 0px 15px 5px;
    }
    
    @media(hover)
    {
        :hover
        {
            > p
            {
                user-select: none;
                opacity: 1;
                visibility: visible;
            }
        }
    }
`

export default function User({ name, email, gender, status })
{
    const [isActive, setIsActive] = useState(true)

    useEffect(() =>
    {
        status === 'active' ? setIsActive(true) : setIsActive(false)
    }, [status])

    return (
        <UserElement>
            <Label>Name</Label>
            <p>{name}</p>
            <Label>Email</Label>

            <p>{email}</p>
            <Label>Gender</Label>
            <p>{gender}</p>
            <Label>Status</Label>
            <IconElement isActive={isActive}>
                {isActive ? <RiCheckboxCircleFill /> : < RiCloseCircleFill />}
                <p>{status}</p>
            </IconElement>
        </UserElement>
    )
}
