import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth()




    return (
        <div>

            <h1>Please Login</h1>
            <button onClick={signInUsingGoogle} type="button" className="btn btn-primary my-5">Google log in </button>

        </div>
    );
};

export default Login;