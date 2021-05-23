import {useState, useEffect} from 'react'
import { useParams } from 'react-router'

const GuestRoom = () => {
    const {code} = useParams()
    useEffect(() => {
        fetch(`http://localhost:8000/room-detail/${code}/`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    
    return (
        <div>
            {code}
        </div>
    )
}

export default GuestRoom
