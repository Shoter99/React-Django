import {useState} from 'react'
import AccessForm from './AccessForm'
import CreateRoom from './CreateRoom'
const StartPageBody = () => {
    const [creating, setCreating] = useState() 
    return (
        <div className='startPage'>
            
            {creating ? 
            <CreateRoom /> 
            
            
                : <AccessForm text='Join Room'/>
            }
            <button className='prmText' onClick={() => {setCreating(!creating)}}>{creating ? 'Back' : 'Create Room' }</button>
        </div>
    )
}

export default StartPageBody
