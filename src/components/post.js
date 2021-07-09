import React, {useState, useEffect} from 'react';

const Post = ({match}) => {

    const [post, setPost] = useState({});

    useEffect(() => {
        const API = "http://localhost:3000";
        const postID = match.params.id.slice(1, 2);


        fetch(`${API}/db`)
            .then(response => response.json()).catch(error => console.log(error))
            .then(data => {
                setPost(data.postsDB[postID - 1])
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <span>{post.description}</span>
        </>
    );
}

export default Post