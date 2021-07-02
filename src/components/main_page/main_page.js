import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

const API = "http://localhost:3000";

fetch(`${API}/db`)
    .then(response => response.json()).catch(error => console.log(error))
    .then(data => {
        console.log(data);
        // data.posts.map((post, index) => {
        // })
    })
    .catch(error => {
        console.log(error);
    });

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
    render() {
        return (
            <div className={"container"}>
                <p>Tytuł</p>
                <p>Nr postu, data</p>
                <span>Opis</span>
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