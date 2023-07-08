import React, { useState } from 'react'

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);

    const changeMode = () => {
        setDarkMode(!darkMode)
    }

  return (
    <>
        <section style={{backgroundColor : darkMode ? "black" : "white", color: darkMode ? "white" : "black"}}>
            <h2>다크모드</h2>
        </section>
        <button onClick={changeMode}>모드 변경</button>
    </>
  )
}

export default DarkMode
