import React from 'react'
import AccessForm from './AccessForm'
const StartPageBody = () => {
    return (
        <div className='startPage'>
            <AccessForm text='Join Room'/>
            <AccessForm text='Create Room'/>
        </div>
    )
}

export default StartPageBody
