import {useState} from 'react'
import {Link} from 'react-router-dom'
const AccessForm = ({text}) => {
    const [code, setCode] = useState('')
    return (
        <div className='submitForm'>
            <label>{text}</label>
            <div className='formInput'>
                <input type="text" value={code} onChange={e => setCode(e.target.value)}/>
                <Link to={'/room/'+code} className='joinLink'></Link>
            </div>

        </div>
    )
}

export default AccessForm
