import {useState, useEffect} from 'react'

const CodePage = ({output}) => {

    const [roomInfo, setRoomInfo] = useState({})
    useEffect(() => {
        const createRoomRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(output)
        }
    
        fetch('http://127.0.0.1:8000/room-create/', createRoomRequest)
        .then(res => res.json())
        .then(data => {
            setRoomInfo(data)
            console.log(data)   
        })
    }, [])
    
    return (
        <div className='codePage'>
            <div className='code'>Code: {roomInfo.code}</div>
            <div className="options">
                <p>Guests can pause/play: <span className='option'> {roomInfo.guests_can_pause ? "True" : "False"}</span> </p>
                <p>Votes needed to skip a song: <span className='option'>  {roomInfo.votes_to_skip}</span></p>
            </div>
        </div>
    )
}

export default CodePage
