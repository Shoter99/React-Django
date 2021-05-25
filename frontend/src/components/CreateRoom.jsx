import {useState} from 'react'
import '../createRoom.css'
const CreateRoom = ({ onSubmit }) => {
    
    const [control, setControl] = useState(true)
    const [votes, setVotes] = useState(1)

    const sendForm = (e) => {
        e.preventDefault()

        onSubmit(control, votes)
    }
    return (
        <form className='createForm' onSubmit={sendForm}>
            <label className="b-contain">
                <span>Users can control play/pause </span>
                <input type="checkbox" checked={control} onChange={(e) => setControl(e.target.checked)} />
                    <div className="b-input"></div>
            </label>
                <br></br>
                <label>Votes needed to skip a song</label><br></br>
                <input type='number' min='1' value={votes} onChange={(e) => setVotes(e.target.value)}  />
                <br></br>
                <button type='submit'>Create Room</button>
        </form>
    )
}

export default CreateRoom
