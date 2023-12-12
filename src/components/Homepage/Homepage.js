import React from 'react';

import './homepage.css';
import Header from '../Header/Header';
import homepage_woman from './../../images/homepage_woman.png'

const Homepage = () => {

    // function openNav() {
    //     document.getElementById("Sidenav").style.width = "250px";
    // }

    // function closeNav() {
    //     document.getElementById("Sidenav").style.width = "0";
    // }

    return (
        <div className='homepage'>
            <Header/>
            <main className='homepage-main'>
                <div className='homepage-main__info'>
                    <h2>СПЕЦІАЛЬНІСТЬ ДЛЯ ТЕБЕ</h2>
                    <h3>Обери Свій напрямок</h3>
                    <a className='learn_more'>
                    <div><p>Дізнатись більше</p></div>
                    </a>
                </div>
                <img src={homepage_woman}/>
            </main>
        </div>
    );
};

export default Homepage;