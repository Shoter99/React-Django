import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
const Room = () => {
    const location = useLocation()
    const [output, setOutput] = useState({})
    useEffect(() => {
        try {
            setOutput(location.state.output)
            console.log(output)
        }
        catch{
            window.location.href = '/'
            window.alert("You have to create room first!")
        }
    }, [])

    return (
        <div className='musicRoom'>
            Welcome to Room:  {output.code}
            <div className="middle">
                <div className="mainMusic">
                    Main music!
                </div>
                <div className="volumeController">
                    <p className="volumeUp">🔊</p>
                    <p className="volumeDown">🔉</p>
                    <p className="mute">🔇</p>
                </div>
            </div>
            <div className='musicController'>
                <div className="back">⏪</div>
                <div className="playPause">&#x23EF;</div>
                <div className="next">⏩</div>
            </div>

        </div>
    )
}

export default Room
