import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import {Link} from "react-router-dom";
import Logo from"../images/logo.png";

export const Header = () => {
    const [show,setShow]=useState(false);

    return (
        <div className='header'>
            <CSSTransition in={show} timeout={300} unmountOnExit classNames="my-node">
                <div className='layout' onClick={()=>setShow(!show)}>
                <div className='navbar'>
                    <Link to={"/jobs"}>Профессии</Link>
                    <div onClick={()=>setShow(!show)} className='close'></div>
                </div>
                </div>
            </CSSTransition>
            <div className='container'>
                <div className='header-align'>
                    <div  className="menu" onClick={()=>setShow(!show)}>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                    </div>
                    <Link to={"/"}>
                        <div className='logo'>
                            <div className='logo-text'>РЕКЛАМА<br></br>&PR <span className='kgeu'>КГЭУ</span>
                            </div>
                            <img className='logo-image' src={Logo} alt=''>
                                </img>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

