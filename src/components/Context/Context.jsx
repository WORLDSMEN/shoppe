import { createContext,useState } from "react";
const Context = createContext()

function Provider({children}) {
    const [olma ,setOlma] = useState('')

    return(
        <>
            <Context.Provider value={{olma, setOlma}}>{children}</Context.Provider>
        </>
    )
}
export {
    Provider,
    Context
}