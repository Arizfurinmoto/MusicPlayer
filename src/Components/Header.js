import React, {useContext} from "react";
import playerContext from '../Context/playerContext'

let Header = () => {
    const {currentSong, songslist} = useContext(playerContext)

    return(
        <header>
            <h3>Teraz: {songslist[currentSong].title}</h3>
        </header>
    )
}

export default Header