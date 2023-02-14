import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleImage from '../SingleImage/SingleImage';

const ShowImage = (props) => {
    const [imagesData, setImagesData] = useState([]);
    const {key} = useParams();


    useEffect(() => {
        const url = `https://api.unsplash.com/search/photos?query=${key}&per_page=30&client_id=b3miG-jQ0qmII9sU4nd3tn4ayjpMlxdmFppVjM9CPSY`;
      fetch(url)
        .then(response => response.json())
        .then(data =>setImagesData(data.results));
    }, [key])



    return (
        <div className='container'>
            {
                imagesData && <h2 className='text-center'>Showing Images of {key}</h2>
            }
            <div className="row">
                {
                    imagesData?.map(image => <SingleImage key={image.id} image={image}></SingleImage>)
                }
            </div>
        </div>
    );
};

export default ShowImage;