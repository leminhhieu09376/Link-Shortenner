import React, { useState } from 'react'
import styled from 'styled-components'
const Bai3 = ({ setInputValue }) => {
    const [value, setValue] = useState("")
    const handleClick = () => {
        setInputValue(value)
        setValue("")
    }
    return (
        <div className='inputContainer'>
            <h1>Link Shortenner</h1>
            <div>
                <input type="text" placeholder='example.com' value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={handleClick}>Shorten</button>
            </div>

        </div>
    )
}

export default Bai3

