import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import photo from "../images/first_page.jpg"

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
                return <div className={"posts"} key={post.id}>
                    <p className={"posts__title"}>{post.title}</p>
                    <p className={"posts__date"}>{post.date}</p>
                    <div className={"posts__photo__box"}>
                        <div className={"posts__photo__container"}>
                            <img className={"posts__photo"} src={photo}/>
                        </div>
                    </div>
                    <span className={"posts__description"}>{post.description}</span>
                    <Link to={`/posts${post.id}`}>Czytaj więcej &#8594;</Link>
                </div>
            })}
                </>
                );
            };


            const MainPage = () => {
            return (
            <section className={"main"}>
            <div className={"container main-Cont"}>
            <Posts/>
            </div>
            </section>
            );
        }


            export default MainPage