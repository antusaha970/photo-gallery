import React from 'react';
import './SingleImg.css';
const SingleImage = (props) => {
    const imgURl = props.image.urls.small;
    const description = props.image.description;

    return (
        <div className='col-md-4 p-3 my-2 swing-in-top-fwd'>
                <img src={imgURl} alt="Loading" className='img-fluid img' />
                <p className='p-2'>{description}</p>
        </div>
    );
};

export default SingleImage;