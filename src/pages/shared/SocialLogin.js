import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext/AuthProvider';
import { setAuthToken } from '../../utils/auth';

const SocialLogin = () => {
    const {GoogleSignIN}=useContext(AuthContext)
    const handleGoogle = () => {
        GoogleSignIN()
            .then(result => {
                const user = result.user
                setAuthToken(user)
            })
        .catch(e=>console.log(e))
    }
    return (
        <div className='m-5 text-center '>
            <button onClick={handleGoogle} className='btn btn-ghost'>Google</button>
        </div>
    );
};

export default SocialLogin;