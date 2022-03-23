import { createContext, useState } from "react";

const LoadingContext = createContext({
    isLoading: false,
    setIsLoading: () => null
})

export default function LoadingContextProvider({ children })
{
    const [isLoading, setIsLoading] = useState(false)

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