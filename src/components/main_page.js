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


const MainPage = () => {
    return (
        <>
            <Posts/>
        </>
    );
}


export default MainPage