import React from 'react';
import './Proecss.css'
import stit from '../../images/images/stting/sett-2-1.png'
import stit1 from '../../images/images/stting/sett1.png'
import stit2 from '../../images/images/stting/sett-4-1.png'
import stit3 from '../../images/images/stting/sett1-1.png'

const Process = () => {
    return (
        <div classNameName="container">
            <div classNameName="fs-1 p-2">
                <h1 className="mt-5">Our Process</h1>
                <hr classNameName="half" />
                <div>
                    <h1 classNameName="tagbld">Go Direct-To-Consumer <br /> <span style={{ color: 'blue' }}> With fast-vip services!</span></h1>
                </div>
                <div>
                    <button type="button" className="btn btn-secondary my-5">See more </button>

                </div>
                <div>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={stit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Online</h5>
                                    <p className="card-text">We are provide for goog service by online orders</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={stit1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Faster service</h5>
                                    <p className="card-text">We can delivery our products very soon when your need requriement as aspect </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={stit2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Emails</h5>
                                    <p className="card-text">When you need for large amount your dinner meal just email us we provide for vip sharp time your your orders</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={stit3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Banking card</h5>
                                    <p className="card-text">We have online banking service you can pay as your way</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;