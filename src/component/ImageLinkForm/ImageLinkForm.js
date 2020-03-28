import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div >
            <p className='f4 fw4 i-m center lh-copy'>
                Clarify A.I will detect a face automatically. <br/>
                (Be sure the image is not too blurry)
            </p>
            <div className='center mb2'>
                <div className='pa4 br3 shadow-5 center form'>
                <input  type='text'
                        placeholder='Copy a picture URL here'
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