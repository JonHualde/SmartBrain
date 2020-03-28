import React from 'react';
import './Rank.css'

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f2 fw3 center mb2'>
                {`${name}, your current entry count is ${entries}`}
            </div>
        </div>
    );
}

export default Rank;