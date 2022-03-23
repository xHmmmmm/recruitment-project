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
    transition: all 0.3s ease-in-out;
    transition-property: background-color, color;

    :hover
    {
        background-color: #082b61;
        color: white;
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
