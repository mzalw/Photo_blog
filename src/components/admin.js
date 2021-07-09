import React, {useState} from "react";
import {Link} from "react-router-dom";

const Form = () => {
    const [form, setForm] = useState({
        id: 0,
        title: "",
        date: "",
        description: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        });
    };

    const sendPost = () => {
        const dateNow = new Date();
        const API = "http://localhost:3000/postsDB";

        fetch(`${API}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: form.id,
                title: form.title,
                date: `0${dateNow.getDate()}.0${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`,
                description: form.description
            })
        })
    }

    return (
        <>
            <form>
                <input type="text" name="title" value={form.title} onChange={handleChange}/>
                <input type="text" name="description" value={form.description} onChange={handleChange}/>
            </form>
            <button onClick={sendPost}>Dodaj prześlij post</button>
        </>
    );
}

const Admin = () => {
    return (
        <>
            <h1>Dodaj post</h1>
            <Form/>
        </>
    );
}

export default Admin