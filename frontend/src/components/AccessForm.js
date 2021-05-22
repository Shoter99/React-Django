import React from 'react'
const AccessForm = ({text, onSubmit}) => {
    return (
        <form  onSubmit={onSubmit} className='submitForm'>
            <label>{text}</label>
            <div className='formInput'>
                <input type="text"></input>
                <button  type="submit"></button>
            </div>

        </form>
    )
}

export default AccessForm
