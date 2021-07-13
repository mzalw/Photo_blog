import React, {useState} from "react";

const Form = () => {

    const [form, setForm] = useState({
        id: 0,
        title: "",
        description: "",
        date: ""
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
        if (form.title === "") {
            alert("Podaj tytuł")
        } else if (form.description === "") {
            alert("Podaj opis")
        } else {
            alert('Gratulacje dodano post')
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
                    date: `${dateNow.getDate()}.${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`,
                    description: form.description
                })
            })
        }
    }

    return (
        <>
            <form>
                <label>Tytuł</label>
                <input type="text" name="title" value={form.title} onChange={handleChange}/>
                <label>Opis</label>
                <textarea name="description" value={form.description} onChange={handleChange}/>
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