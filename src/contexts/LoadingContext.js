import { createContext, useContext, useState } from "react";

const LoadingContext = createContext()

export const useLoading = () => useContext(LoadingContext)

export default function LoadingContextProvider({ children })
{
    const [isLoading, setIsLoading] = useState(true)

    const loadingCtx = {
        isLoading,
        setIsLoading
    }

    return (
        <LoadingContext.Provider value={loadingCtx}>
            {children}
        </LoadingContext.Provider>
    )
}