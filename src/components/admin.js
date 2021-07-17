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
            <form className={"form"}>
                <label className={"form__label"}>Tytuł</label>
                <input className={"form__title__input"} type="text" name="title" value={form.title}
                       onChange={handleChange}/>
                <label className={"form__label"}>Opis</label>
                <textarea className={"form__textarea"} name="description" value={form.description}
                          onChange={handleChange}/>
            </form>
            <button className={"form__button"} onClick={sendPost}>Dodaj prześlij post</button>
        </>
    );
}

const Admin = () => {
    return (
        <div className={"admin__box"}>
            <div className={"container admin"}>
                <h1 className={"posts__title"}>Dodaj post</h1>
                <Form/>
            </div>
        </div>
    );
}

export default Admin