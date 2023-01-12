import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <>
            <div className={`bg-${props.mode} fixed-top `}>
                <div className='container-fluid'>
                    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
                        <Link className="navbar-brand pt-0" to="/" style={{fontSize : 23}}><b>{props.title}</b></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item ml-4">
                                    <Link className="nav-link" to="/"><span className='home_item'>Home</span></Link>
                                </li>
                                <li className="nav-item ml-3">
                                    <Link className="nav-link" to="/"><span className='home_item'>About</span></Link>
                                </li>
                            </ul>
                            <ul className='navbar-nav ml-auto'>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleClick} />
                                    <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header