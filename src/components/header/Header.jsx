import React from 'react'
import './header.css'
import SpinningRecord from '../../utils/media/images/spinning-record.png'

const Header = () => {
    return(
        <div className="header-wrapper">
            <header className="header">       
                <div className="title-text-container" >
                    <h1>
                        WITHOUT MUSIC <br/>LIFE HAS NO MEANING
                    </h1>
                </div>
                <div className="spinning-record-container">
                    <img 
                    src={SpinningRecord} 
                    alt="spinning vinyl record"
                    />
                </div>
            </header>
        </div>
    )
}
export default Header