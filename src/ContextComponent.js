import React, { useState, useEffect, useReducer } from 'react'
import LoadingContextProvider from "./contexts/LoadingContext"

export default function ContextComponent({ component })
{
    return (
        <LoadingContextProvider>
            {component}
        </LoadingContextProvider>
    )
}
