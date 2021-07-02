import React, {Component} from 'react';


// const Nav = () => {
//     return(
//         <div>
//             <h1>Logo</h1>
//             <ul>
//                 <li>O mnie</li>
//                 <li>Kontakt</li>
//             </ul>
//         </div>
//     );
// }

class Posts extends Component {

    state = {
        posts: [
            {
                id: 0,
                title: "przykład tytuł",
                date: "29.07.1999",
                description: "opis"
            },
            {
                id: 1,
                title: "przykład tytuł2",
                date: "10.00.2000",
                description: "opis2"
            }
        ]

    }

    handleData = () => {
        const API = "http://localhost:3000";

        fetch(`${API}/db`)
            .then(response => response.json()).catch(error => console.log(error))
            .then(data => {
                data.postsDB.forEach((post) => {
                    this.setState((prevState) => {
                        return {
                            posts: [...prevState.posts,
                                post]
                        }
                    })
                });
                
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const elements = this.state.posts.map((post, index) => {
            return (
                <div key={index}>
                    <p>{post.title}</p>
                    <p>Post nr: {post.id} Data: {post.date}</p>
                    <span>Opis: {post.description}</span>
                </div>
            );
        })

        return (
            <div>
                {elements}
                <button onClick={this.handleData}>Klik</button>
            </div>
        );
    }
}


const MainPage = () => {
    return (
        <>
            <Posts/>
        </>
    );
}


export default MainPage