import { createContext, useState } from "react";

export const QtyContext = createContext()

export function QtyProvider({children}){
    const [qty, setQty] = useState(1)

    function addQty(){
        setQty(qty + 1)
    }

    function subtractQty(){
        if (qty>1) {
            setQty(qty-1)
        }
    }

    function resetQty(){
        setQty(1)
    }

    return(
        <QtyContext.Provider value={[qty, addQty, subtractQty, resetQty]}>
            {children}
        </QtyContext.Provider>
    )
}