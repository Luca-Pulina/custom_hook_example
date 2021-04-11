import React from 'react'
import './App.css'
import Random from './components/Random_v2'
import Tag from './components/Tag_v2'

const App = () => {
    return (
        <div>
            <h1>Random GIF App</h1>
            <div className="main-container">
                <Random />
                <Tag />
            </div>
        </div>
    )
}

export default App