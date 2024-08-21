import './QtyBar.css'

import Buttons from "../Buttons/Buttons"
import { useContext } from 'react'
import { QtyContext } from '../../context/QtyContext'

export default function QtyBar(){
    const [qty] = useContext(QtyContext)
    
    return(
        <div className="qty-bar flex justify-between align-center">
            <Buttons minus/>
                {qty}
            <Buttons plus/>
        </div>
    )
}