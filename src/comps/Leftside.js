import React from 'react'
import "./Leftside.css"

function Leftside() {
    return (
        <div className='left'>
            <div className='restart'>
                <button>Spotify</button>
            </div>
            <div className='choise'>
                <button>Home</button>
                <button>Search</button>
                <button>Library</button>
               
            </div>
            <div className='create'>
                    <button>Create Playlist</button>
                    <button>Liked Music</button>
                </div>
        </div>
    )
}

export default Leftside