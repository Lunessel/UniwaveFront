import React from 'react';

import logo from './../../images/logo.png'
import star from './../../images/icons/star.svg'
import search from './../../images/icons/search.svg'
import './header.css';

const Header = () => {

    function openNav() {
        document.getElementById("Sidenav").style.width = "230px";
    }

    function closeNav() {
        document.getElementById("Sidenav").style.width = "0";
    }

    return (
        <header>
            <div className={'sidenav-container'}>
                <nav id={'Sidenav'}>
                    <a className="closebtn" onClick={closeNav}>&times;</a>
                    <ul>
                        <li><a href={'#'}>ВНЗ</a></li>
                        <li><a href={'#'}>СПЕЦІАЛЬНОСТІ</a></li>
                        <li><a href={'#'}>МІСТО</a></li>
                    </ul>
                </nav>
                <span onClick={openNav}>&#9776;</span>
            </div>
            <a href={'/'} className='logo-item'>
                <img src={logo} alt={'logo'}/>
                <h1>UniWave</h1>
            </a>
            <nav>
                <ul>
                    <li><a href={'#'}>ВНЗ</a></li>
                    <li><a href={'#'}>СПЕЦІАЛЬНОСТІ</a></li>
                    <li><a href={'#'}>МІСТО</a></li>

                </ul>
            </nav>
            <div className={'header-tools'}>
                <a><img src={star}/></a>
                <img src={search}/>
                <div className='header-tools__login'><p>Увійти</p></div>
            </div>
        </header>
    );
};

export default Header;