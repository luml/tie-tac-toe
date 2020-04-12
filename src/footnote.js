import React from 'react'

const FootNote = () => {
    return (
        <footer className="foot-note">
            <p>This is game demo</p>
            <p>{new Date().toLocaleString()}</p>
        </footer>
    )
}

export default FootNote