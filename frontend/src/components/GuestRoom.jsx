import { useEffect} from 'react'
import { useParams } from 'react-router'

const GuestRoom = () => {
    const {code} = useParams()
    useEffect(() => {
        fetch(`http://localhost:8000/room-detail/${code}/`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => {
            window.location.href = '/'
            window.alert('Room with this code does not exist!')
        })
    }, [code])
    
    return (
        <div>
            {code}
        </div>
    )
}

export default GuestRoom
