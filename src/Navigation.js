import React, { useState, useEffect, useReducer } from 'react';
import { Link, Router } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const NavLink = styled(Link)`
    background-color: #073985;
    display: grid;
    place-items: center;
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    transition: background-color 0.2s ease-in-out;

    @media(hover)
    {
        :hover
        {
            background-color: #082b61;
            color: white;
        }
    }

    
    @media(max-width: 700px)
    { 
        font-size: 1.1rem;
    }
`

export default function Navigation()
{
    return (
        <Nav>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/todos'>Todos</NavLink>
        </Nav>
    )
}
