import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-primary text-white">

            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-5 col-lg-6 col-xl-5 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>E-School
                            </h6>
                            <p>
                                E-School is an online learning and teaching marketplace with over 155000 courses and 40 million students. Learn programming, marketing, data science and more.
                            </p>
                        </div>


                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p><NavLink to="/home" className="me-3 text-decoration-none text-white" >Home</NavLink></p>
                            <p><NavLink to="/services" className="me-3 text-decoration-none text-white" >Services</NavLink></p>
                            <p><NavLink to="/about" className="me-3 text-decoration-none text-white" >About</NavLink></p>
                            <p><NavLink to="/contact" className="me-3 text-decoration-none text-white" >Contact Us</NavLink></p>
                        </div>


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Barishal, Bangladesh</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i> info@eschool.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 880 130 000 0000</p>
                            <p><i className="fas fa-print me-3"></i> + 880 130 000 0000</p>
                        </div>

                    </div>

                </div>
            </section>


            <div className="text-center p-4">
                © 2021 Copyright:
                <span className="text-reset fw-bold"> E-School</span>
            </div>

        </footer>
    );
};

export default Footer;