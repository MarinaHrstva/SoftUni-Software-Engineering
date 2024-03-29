import { useContext } from "react";
import { Link } from "react-router-dom"

import { AuthContext } from '../../contexts/authContext'


function Header() {

    const { user } = useContext(AuthContext);

    return (
        <header>
            {/* Navigation */}
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                {user.email && <span>{user.email}</span>}
            <Link to="/catalog">All games</Link>
                {user.email
                    ? <div id="user">
                        <Link to="/createGame">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                } 

            </nav>
        </header>
    )
}

export default Header;