import React from 'react'
import '../createRoom.css'
const CreateRoom = ({ onSubmit }) => {
    return (
        <form className='createForm' onSubmit={onSubmit}>
            <label className="b-contain">
                <span>Users can control play/pause </span>
                <input type="checkbox" />
                    <div className="b-input"></div>
            </label>
                <br></br>
                <label>Votes needed to skip a song</label><br></br>
                <input type='number' min='1' placeholder='1' />
                <br></br>
                <button type='submit'>Create Room</button>
        </form>
    )
}

export default CreateRoom
