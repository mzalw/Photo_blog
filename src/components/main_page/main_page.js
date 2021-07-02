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
        counter: 0,
        id: 0,
        title: "B",
        date: "01.07.2021",
        description: "Typowe Augustowie"
    }

    handleData = () => {
        const API = "http://localhost:3000";

        fetch(`${API}/db`)
            .then(response => response.json()).catch(error => console.log(error))
            .then(data => {
                this.setState((prevState) => {
                    return {
                        counter: prevState.counter + 1,
                        id: data.posts[this.state.counter].id,
                        title: data.posts[this.state.counter].title,
                        date: data.posts[this.state.counter].date,
                        description: data.posts[this.state.counter].description
                    }
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <p>{this.state.title}</p>
                <p>Post nr: {this.state.id} Data: {this.state.date}</p>
                <span>{this.state.description}</span>
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