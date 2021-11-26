import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    const { user } = useAuth();


    return (
        <div className="footer">

            <div className="container-fluid text-center text-md-left container">
                <div className="row">


                    <div className="col-md-6 pe-sm-5 mt-3 text-white ">
                        <div className="footer-left p-4">
                            <img className='logo' src={logo} alt="" />

                            <div style={{ textAlign: 'left' }}>

                                <h5 className="sub-heading mt-2">Luxurious smartphone That Fits with new trend

                                    <br />
                                    You may know where you are and find easy ways and routes to go anywhere, especially in an unknown place. You can make the world listen to your voice in a touch. You can spend your time wisely reading the news or doing some official work. Can entertain yourself with games, music or movies
                                    

                                </h5>



                            </div>
                        </div>




                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Your Needed Links</h5>


                        <div className="footer-links">


                            <Link to="/home" className=" nav-link">Home</Link>
                            <Link to="/ourWatches" className=" nav-link">smartphone</Link>
                            <Link to="/about" className=" nav-link">About Us</Link>
                            {user && <Link to="/dashboard" className=" nav-link">Dashboard</Link>}





                        </div>
                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Follow Us</h5>


                        <div className="footer-links">



                            <a className="btn btn-primary"  href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i>
                            </a>

                            <button
                                type="button"
                                className="btn btn-primary position-relative mx-4"
                                data-mdb-ripple-unbound="true"
                            >
                                <i className="fab fa-instagram"></i>
                                
                            </button>





                        </div>

                        <div className="text-white mt-4" style={{ textAlign: 'left' }}>
                            <h5 >Contact Details</h5>
                            <div className='mt-4'>
                                <p> Email : rakib35-2638@diu.edu.bd</p>
                                <p> Location : Dhanmondi,Dhaka</p>
                            </div>

                        </div>



                    </div>






                </div>
            </div>
        </div >
    );
};

export default Footer;