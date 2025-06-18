import { createContext, useState } from "react";

export const Context = createContext(null)
export function Provider({children}) {
    const [theme, setTheme] = useState("light")

    return(
        <Context.Provider value={{theme, setTheme}}>
            {children}
        </Context.Provider>
    )
}