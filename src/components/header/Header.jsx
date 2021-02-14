import React from 'react'
import './header.css'
import SpinningRecord from '../../utils/media/images/spinning-record.png'

const Header = () => {
    return(
        <div className="header-wrapper">
        <header className="header">
        
            <div className="title-text-container" >
                <h1 
                    // style={{color: "hotpink", fontSize: "6em",}} 
                >
                    WITHOUT MUSIC <br/>LIFE HAS NO MEANING
                </h1>
            </div>
            <div                 className="spinning-record-container" 
            >
                <img 
                src={SpinningRecord} 
                alt="spinning vinyl record"
                />
            </div>

            <section className="front-page-feature">
                <div className="feature">
                    <h1>feature</h1>
                </div>
                <div className="cat-1">
                    <h1>feature</h1>
                </div>
                <div className="cat-2">
                    <h1>feature</h1>
                </div>
                <div className="cat-3">
                    <h1>feature</h1>
                </div>
                <div className="cat-4">
                    <h1>feature</h1>
                </div>
                <div className="cat-5">
                    <h1>feature</h1>
                </div>
            </section>
  

        </header>
        </div>
    )
}
export default Header