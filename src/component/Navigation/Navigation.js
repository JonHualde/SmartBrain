import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn) {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-start',
                     width: '100%', position: 'relative', 
                     height: '160px', marginBottom: '4vh'}}>
            <p className='f3 link dim black underline pa3 pointer tl'
            onClick={() => onRouteChange('signout')}> Sign Out </p>
            <div style={{ position: 'absolute', top: '0.5vh', right: '3vw'}}>
                 <Logo />
            </div>
           
        </nav>
    )} else {
    return (
        <nav style={{display: 'flex', justifyContent: 'center'}}>
            <p className='f3 link dim black underline pa3 pointer'
            onClick={() => onRouteChange('signin')}> Sign In </p>
            <p className='f3 link dim black underline pa3 pointer'
            onClick={() => onRouteChange('register')}> Register </p>
        </nav>
    )}
}

export default Navigation;