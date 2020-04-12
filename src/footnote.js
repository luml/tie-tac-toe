import React from 'react'

const FootNote = () => {
    return (
        <div className="foot-note">
            <p>This is game demo</p>
            <p>{new Date().toLocaleString()}</p>
        </div>
    )
}

export default FootNote