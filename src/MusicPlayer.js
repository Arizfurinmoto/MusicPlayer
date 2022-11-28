import './main.css'
import './input.css'
import Header from './Components/Header'
import Actions from './Components/Playlist/Actions'
import Playlist from './Components/Playlist/Playlist'
import PlayerState from './Context/playerState'
import Controls from './Components/Controls'


let MusicPlayer = () => {
    return(
        <PlayerState>
            <div className='music_player'>
                <div>
                    <Header/>
                    <Actions/>
                    <Playlist/>
                    <div className='placeholder'></div>
                </div>
                <Controls />
            </div>
        </PlayerState>
        
    )
}

export default MusicPlayer