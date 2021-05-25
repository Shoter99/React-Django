import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const CodePage = ({ output }) => {

    const [roomInfo, setRoomInfo] = useState({})
    useEffect(() => {
        const createRoomRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(output)
        }

        fetch('http://127.0.0.1:8000/room-create/', createRoomRequest)
            .then(res => res.json())
            .then(data => {
                setRoomInfo(data)
                console.log(data)
            })
            .catch(err => {
                window.location.href = '/'
                window.alert('Cannot connect to server. Please try again later.')
            })
    }, [output])

    return (
        <div className='codePage'>
            <div className='code'>Code: {roomInfo.code}</div>
            <div className="options">
                <p>Guests can pause/play: <span className='option'> {roomInfo.guests_can_pause ? "True" : "False"}</span> </p>
                <p>Votes needed to skip a song: <span className='option'>  {roomInfo.votes_to_skip}</span></p>
            </div>
            <div className='enterRoomBtn'>
                <div className='link-wrapper'>
                    <Link className='link' to={{
                        pathname: '/room',
                        state:{
                            output: roomInfo,
                        },
                    }}
                    >Enter Room</Link>
                </div>
            </div>
        </div>
    )
}

export default CodePage
