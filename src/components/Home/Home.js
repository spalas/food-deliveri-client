import React from 'react';
import About from '../About/About';
import Contact from '../Contacts/Contact';

import Services from '../Services/Services';


const Home = () => {

    return (
        <div className="container">
            <Services></Services>
            <About></About>
            <Contact></Contact>

        </div>
    );
};

export default Home;