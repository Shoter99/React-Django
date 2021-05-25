import {useState} from 'react'
import AccessForm from './AccessForm'
import CreateRoom from './CreateRoom'
const StartPageBody = ({onSubmit, JoinRoom}) => {
    const [creating, setCreating] = useState()
    

    return (
        <div className='startPage'>
            
            {creating ? 
            <CreateRoom onSubmit={onSubmit}/> 
            
            
                : <AccessForm text='Join Room' onSubmit={JoinRoom}/>
            }
            <button className='prmText' onClick={() => {setCreating(!creating)}}>{creating ? 'Back' : 'Create Room' }</button>
        </div>
    )
}

export default StartPageBody
