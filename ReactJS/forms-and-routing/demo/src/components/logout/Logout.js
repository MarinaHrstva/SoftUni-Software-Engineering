
import { useEffect, useNavigate, useContext } from "react";

import { AuthContext } from "../../contexts/authContext";
import * as authService from '../../services/authService'

const Logout = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    console.log(user);
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                // navigate('/');
            })
    },[])

    return null;
}

export default Logout;