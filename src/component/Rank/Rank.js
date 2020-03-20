import React from 'react';
import './Rank.css'

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3 center'>
                {`${name}, your current entry count is ${entries}`}
            </div>
            <div className='white f3 center'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;