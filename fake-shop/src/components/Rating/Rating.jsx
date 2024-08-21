import { useEffect, useState } from 'react'
import './Rating.css'

export default function Rating({rate,count}){
    const [ratePercent,setRatePercent] = useState(0)
    useEffect(()=>{
        setRatePercent((100/5)*rate)
    },[rate])
    return(
        <div className='flex align-center gap-20'>
            <div className='rating'>
                <div className='rate' style={{width: ratePercent + "%"}}></div>
                <img src="/img/Exclude.png" alt="Rating" />
            </div>
            <p className='count-text'>({count} ratings)</p>
        </div>
    )
}