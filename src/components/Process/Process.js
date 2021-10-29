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
                <h1>Our Process</h1>
                <hr classNameName="half" />
                <div>
                    <h1 classNameName="tagbld">Go Direct-To-Consumer <span style={{ color: 'blue' }}> With fast-vip services!</span></h1>
                </div>
                <div>
                    <button type="button" className="btn btn-secondary">See more </button>

                </div>
                <div>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={stit} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={stit1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={stit2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={stit3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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