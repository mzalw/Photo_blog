import {Link} from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <header>
            <div className={"container"}>
                <Link to='/'>
                    <h1>Logo</h1>
                </Link>
                <ul>
                    <li><Link to={"."}>O mnie</Link></li>
                    <li><Link to={"."}>Kontakt</Link></li>
                    <li><Link to={"/admin"}>Dodaj post</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header