import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt 
                className=  "Tilt br2 shadow-2" 
                options={{  max : 25, 
                            perspective: 150,
                            scale: 0.95, }} 
                style={{    height: 250, 
                            width: 250,
                            display:'flex', 
                            alignItems:'center',
                            justifyContent:'center' }} >

                <div className="Tilt-inner">
                    <img 
                        style={{height: '140px',
                                width: '140px'}}
                        src={brain} 
                        alt='logo'
                        /> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;