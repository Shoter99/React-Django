import {useState} from 'react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'
import StartPageBody from './StartPageBody'
import CodePage from './CodePage'
import Room from './Room'
import GuestRoom from './GuestRoom'

const StartPage = () => {
    const [output, setOutput] = useState({})
    const [submited, setSubmited] = useState(false)
    const createRoom = (control, votes) => {
        setOutput({
            guests_can_pause: control,
            votes_to_skip: votes
        })
        setSubmited(true)
        
    }

    return (
        <>
        <Router>
            <Header />
            <Route exact path='/'>
            
            {!submited ? <StartPageBody onSubmit={createRoom} /> :
                <>
                <CodePage output={output}/>
                <div className='enterRoomBtn'>
                <div className='link-wrapper'>
                <Link className='link' to='/room'>Enter Room</Link>
                </div>
                </div>
                </>
            }
            </Route>
            <Route exact path='/room'>
                <Room />
                <div className='link-wrapper'>
                <Link className='link' to='/'>Back</Link>
                </div>
            </Route>
            <Route exact path = '/room/:code'>
                <GuestRoom />
            </Route>
        </Router>
        </>
    )
}

export default StartPage
