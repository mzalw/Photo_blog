import {Link} from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <header>
            <div className={"container head"}>
                <Link className={"logo__cont"} to='/'></Link>
                <nav>
                    <li className={"nav__item__li"}><Link className={"nav__item"} to={"."}>O MNIE</Link></li>
                    <li className={"nav__item__li"}><Link className={"nav__item"} to={"."}>KONTAKT</Link></li>
                    <li className={"nav__item__li"}><Link className={"nav__item"} to={"/admin"}>DODAJ POST</Link></li>
                </nav>
            </div>
        </header>
    );
}

export default Header