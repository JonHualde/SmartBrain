import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='mt0'>
            <Tilt 
                className=  "Tilt br2 shadow-2 " 
                options={{  max : 25, 
                            perspective: 100,
                            scale: 0.95, }} 
                style={{    height: '150px', 
                            width: '150px',
                            display:'flex', 
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop: '2vh'
                            }} >

                <div className="Tilt-inner">
                    <img 
                        style={{height: '110px',
                                width: '110px'}}
                        src={brain} 
                        alt='logo'
                        /> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;