import React from 'react'

export default function Header() {
    return (
        <header className=' bg-amber-300 text-white py-4 px-8 flex justify-between items-center'>
            <h1>My DeshBoard</h1>
            <div className=' flex items-center space-x-2'>
                <button className=' bg-teal-700 px-4 py-1  rounded-full hover:bg-teal-950'>profile</button>
                <button className=' bg-teal-700 px-4 py-1  rounded-full hover:bg-teal-950'>Logout</button>
            </div>
        </header>
    )
}
