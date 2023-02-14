import React from 'react';
import { Link } from 'react-router-dom';
import './HeadNav.css';
import { useHistory } from "react-router-dom";
const HeadNav = () => {
    let userInput;
    let history = useHistory();
    const handleSearch = (id) => {
        userInput = document.getElementById(id).value;
        document.getElementById(id).value = "";
        history.push(`/photos/${userInput}`);
    }

    return (
        <div className="main-content">
            <div className='bg'>
                <div className="container">
                    <h1 className='text-center fw-bold title-text tracking-in-expand'>Get your favorite images in one click</h1>
                    <div className="row mt-5">
                        <div className="col-md-8">
                            <input type="text" className='form-control' placeholder='Enter any keyword ex:Nature' id='inputText'/>
                        </div>
                        <div className="col-md-4">
                            <button className='btn btn-success w-100' onClick={()=> handleSearch('inputText')}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadNav;