import React from 'react'

const FootNote = () => {
    return (
        <footer className="foot-note">
            <div>
                <p>This is game demo</p>
                <p>{new Date().toLocaleString()}</p>
            </div>
        </footer>
    )
}

export default FootNote