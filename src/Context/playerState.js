import React, {useReducer} from "react";
import playerContext from "./playerContext";
import playerReducer from "./playerReducer";

import { song_list } from "./songs";

const PlayerState = (props) => {
    const initialState = {
        currentSong: 0,
        songslist: song_list,
        repeat: false,
        random: false,
        playing: false,
        audio: null,
    }

    const [state, dispatch] = useReducer(playerReducer, initialState)

    // Set current song
    const setCurrent = (id) => dispatch({type: 'SET_CURRENT_SONG', data: id})

    //set songs array
    const songsSet = (songsArr) => dispatch({type: 'SET_SONGS_ARRAY', data: songsArr})

    //set playing state
    const togglePlaying = () => dispatch({type: 'TOGGLE_PLAYING', data: state.playing ? false : true})

    //prev song
    const prevSong = () =>{
        if (state.currentSong === 0){
            setCurrent(state.songslist.length - 1)
        }
        else{
            setCurrent(state.currentSong - 1)
        }
    }

    //next song
    const nextSong = () =>{
        if (state.currentSong === state.songslist.length - 1){
            setCurrent(0)
        }
        else{
            setCurrent(state.currentSong + 1)
        }
    }

    //repeat
    const toggleRepeat = (id) => dispatch({type: 'TOGGLE_REPEAT', data: state.repeat ? false : true})

    //random
    const toggleRandom = (id) => dispatch({type: 'TOGGLE_RANDOM', data: state.random ? false : true})

    //end of song
    const handleEnd = () =>{
        if(state.random){
            return dispatch({
                type: 'SET_CURRENT_SONG',
                data: ~~(Math.random() * state.songslist.length),   //~~ - int
            })
        }
        else{
            if(state.repeat){
                nextSong()
            }
            else if(state.currentSong === state.songslist.length -1){
                return
            }
            else{
                nextSong()
            }
        }
    }

    return(
        <playerContext.Provider
        value={{
            currentSong: state.currentSong,
            songslist: state.songslist,
            repeat: state.repeat,
            random: state.random,
            playing: state.playing,
            audio: state.audio,
            setCurrent,
            nextSong,
            prevSong,
            toggleRandom,
            toggleRepeat,
            togglePlaying,
            handleEnd,
            songsSet,
        }}>
            {props.children}
        </playerContext.Provider>
    )
}

export default PlayerState