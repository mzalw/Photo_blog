import React, {useState, useEffect} from 'react';
import photo from "../images/first_page.jpg"

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
        <div className={"post__box"}>
            <div className={"container post"}>
                <h1 className={"posts__title"}>{post.title}</h1>
                <p className={"posts__date"}>{post.date}</p>
                <div className={"post__photo__box"}>
                    <div className={"post__photo__container"}>
                        <img className={"posts__photo"} src={photo} alt={post.id}/>
                    </div>
                </div>
                <div className={"post__description__box"}>
                    <span className={"post__description"}>{post.description}</span>
                </div>
            </div>
        </div>
    );
}

export default Post