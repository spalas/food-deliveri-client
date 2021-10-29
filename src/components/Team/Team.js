import React from 'react';
import ceo from '../../images/images/team/boy-1.png'
import manager from '../../images/images/team/boy2.png'
import assist from '../../images/images/team/girl team.png'
import assis from '../../images/images/team/girl2.png'

const Team = () => {
    return (
        <div className="container my-5">
            <h1>OUR TEAM</h1>
            <p>Experience is best serve to key</p>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={ceo} className="card-img-top fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">CEO</h5>
                            <h6 className="card-title">tmmlo</h6>
                            <p className="card-text">Do its your won all every thing just do it always happy to ypur client.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={manager} className="card-img-top fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Manager</h5>
                            <p>Name: tuku</p>
                            <p className="card-text">Work hard get the possible everthing in your hand</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={assist} className="card-img-top fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Assistant manager</h5>
                            <p>Name: pakli</p>
                            <p className="card-text">Manage is everthing in the give to effort the manager get the most power to hand.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={assis} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Team ledear</h5>
                            <p>Name: sultama</p>
                            <p className="card-text">I am not boss i am ledear that help to all kind team people.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;