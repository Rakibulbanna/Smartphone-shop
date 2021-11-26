import React from 'react';
import Jump from 'react-reveal/Jump';
import { NavLink } from 'react-router-dom';
import './BannerSection.css'



const BannerSection = () => {
    return (
        <div className="banner p-sm-5 ">
            <div className="row d-md-flex align-items-center ">

                <div className="col-md-6">
                </div>

                <div className="col-md-6 p-4 banner-text banner-text-part">
                    <Jump>
                        <h1>Luxurious smartphone <span className="special-text">That Fits with new trend</span> </h1>
                        <p>We are a team of traveler, explorer and entrepreneur who work together
                            <br />
                            to ensure a great tour  that you receive the best treatment to your soul because we bellive only travels can heal you the inside.</p>
                        
                            <NavLink to="/ourWatches"><button className="have-look-btn">Our Exclusive smartphone</button></NavLink>
                        
                    </Jump>
                </div>

            </div>
        </div>
    );
};

export default BannerSection;