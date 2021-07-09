import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const API = "http://localhost:3000";

        fetch(`${API}/db`)
            .then(response => response.json()).catch(error => console.log(error))
            .then(data => {
                setPosts(data.postsDB)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <>
            {posts.map((post) => {
                return <div key={post.id}>
                    <p>Post nr: {post.id} Data: {post.date}</p>
                    <p>{post.title}</p>
                    <span>Opis: {post.description}</span>
                    <Link to={`/posts${post.id}`}>Czytaj więcej >>></Link>
                </div>
            })}
        </>
    );
};

const Header = () => {
    return (
        <header>
            <div className={"container"}>
                <h1>Logo</h1>
                <ul>
                    <li><a href={"."}>O mnie</a></li>
                    <li><a href={"."}>Kontakt</a></li>
                    <li><Link to={"/admin"}>Dodaj post</Link></li>
                </ul>
            </div>
        </header>
    );
}

const Footer = () => {
    return (
        <footer>
            <div className={"container"}>
                <div>
                    <a href={"."}>tag</a>
                    <a href={"."}> - tag</a>
                    <a href={"."}> - tag</a>
                    <a href={"."}> - tag</a>
                    <a href={"."}> - tag</a>
                </div>
            </div>
            <span>Copyright</span>
        </footer>
    );
}

const MainPage = () => {
    return (
        <>
            <Header/>
            <Posts/>
            <Footer/>
        </>
    );
}


export default MainPage