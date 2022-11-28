import React, {useContext} from "react";
//import {song_list} from '../../Context/songs'
import playerContext from '../../Context/playerContext'

let Playlist = () =>{

    const {songslist, currentSong, SetCurrent} = useContext(playerContext)

    return(
        <div className="playlist">
            <ul className="loi">
                {
                    songslist.map(
                        (song, i) =>
                        (
                            <li className={'songContainer ' + (currentSong===i?'selected':'')}
                            key={i}
                            onClick={()=>SetCurrent(i)}
                            >
                                <div className="tmbn_song">
                                    <i className="fas fa-play"></i>
                                </div>
                                <div className="songmeta_playlist">
                                    <span className="songname">{song.title}</span>
                                    <span className="songauthors">{song.artistName}</span>
                                </div>
                                <button className="options_song playlist_btn">
                                    <i className="fas fa-ellipsis-v fa-lg"></i>
                                </button>
                            </li>
                        )
                    )
                }
            </ul>

        </div>
    )
}

export default Playlist