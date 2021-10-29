import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <h1 className="text-primary pt-5">Number ONE <span style={{ color: 'white' }}>food Delivery</span> </h1>
            <small className="footerp">We are happy to serve</small>
            <div className="container footerc mt-5">
                <div className="row col-12 col-md-4 m-3">
                    <h3 className="footerp">Fast-vip-delivery</h3>
                    <p className="footerp"><i class="fas fa-phone-volume"> </i> 021582512582</p>
                    <p className="footerp"><i class="fas fa-envelope-open-text"></i> Fastvip@delivery.com</p>
                </div>
                <div className="row col-12 col-md-4 m-3">
                    <h3 className="footerp">Usefull Links</h3>
                    <p className="footerp">About us</p>
                    <p className="footerp">Services</p>
                    <p className="footerp">Free Quate</p>
                    <p className="footerp">Get in touch</p>

                </div>
                <div className="row col-12 col-md-4 m-3">
                    <h3 className="footerp">Touch with us</h3>
                    <p className="footerp"> We are happy serve to you</p>
                    <i class="fab fa-facebook-square"> Facebook</i>
                    <i class="fab fa-twitter-square"> Twitter</i>
                    <i class="fab fa-instagram"> Instagram</i>
                </div>

            </div>
            <p className="footerp py-3">&copy;Copywrite 2021 Fast-vip-delivery-app</p>



        </div>
    );
};

export default Footer;