import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Form = () => {
    const [form, setForm] = useState({
        id: 0,
        title: "",
        date: "",
        description: ""
    });

    const SendPost = () => {

        const dateNow = new Date();

        const API = "http://localhost:3000";

        fetch(`${API}/db`)
            .then(response => response.json()).catch(error => console.log(error))
            .then(data => {
                setForm(prevState => {
                    return {
                        ...prevState,
                        id: data.postsDB.length + 1,
                        date: `0${dateNow.getDate()}.0${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`
                    }
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
    console.log(form.id);
    console.log(form.title);
    console.log(form.description);
    console.log(form.date);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        });
    };
    

    return (
        <>
            <button onClick={SendPost}>Siema</button>
            <form>
                <input type="text" name="title" value={form.title} onChange={handleChange}/>
                <input type="text" name="description" value={form.description} onChange={handleChange}/>
            </form>
        </>
    );
}

const Admin = () => {
    return (
        <>
            <h1>Dodaj post</h1>
            <Link to={"/"}>Strona główna</Link>
            <Form/>
        </>
    );
}

export default Admin