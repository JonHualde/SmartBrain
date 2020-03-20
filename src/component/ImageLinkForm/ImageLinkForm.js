import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div >
            <p className='f3 center'>
                {'Clarify A.I will detect faces in your pictures'}
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5 center form'>
                <input  type='text'
                        placeholder='Copy a url here'
                        className='f4 pa2 w-70 inputbutton'
                        onChange={onInputChange}
                         />
                <button className='w-30 grow f4 link 
                        dib white bg-light-purple inputbutton'
                        onClick={onButtonSubmit}> 
                        Detect </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;