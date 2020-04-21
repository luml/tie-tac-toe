import React from 'react'

const FootNote = () => {
    return (
        <footer className="foot-note">
            <div>
                <p>This is game demo</p>
                <p>{new Date().toLocaleString()}</p>
                <address><span role='img' aria-label='location emoji'>🏡</span>Shimen602 Beijing, China</address>
            </div>
        </footer>
    )
}

export default FootNote