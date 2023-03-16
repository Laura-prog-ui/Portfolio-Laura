import React from 'react';
import Yopi from '../home/img/Yopi.jpg'


function Data() {
    return (
        <div className='home__data'>
            <h1 className='home__tittle'>
                Laura Duarte
                <img className='home__img' src={Yopi} alt="Imagen de referencia"/>
            </h1>
            <h3 className='home__subtitle'>Full Stack Developer</h3>
            <p className='home__description'></p>
            <a href="#contact" className="button button--flex">
                Say Hello 
            </a>
        </div>
    )
}

export default Data;