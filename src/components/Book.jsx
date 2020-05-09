import React, { useState, useContext, useEffect } from 'react';
//import { Link } from "react-router-dom";
import axios from "axios";
import { DropDown } from "../components/Dropdown";
import { CookieContext } from "../Context/SessionContext";

//<DropDown books={books} />

function Book({ controls, book, history }) {
    const [bookshelfs, setBookshelfs] = useState("");
    const [uuid, setUUID] = useContext(CookieContext);
    const [bookID, setBookID] = useState("");


    useEffect(() => {
        axios
            .put(`http://localhost:7000/bookshelf/${bookID}/${bookshelfs}?id=${uuid}`)

            .then(r => {
                r.ok && history.push("/bookshelf/")
                console.log(r)
            })
    }, [bookshelfs])
    return (
        <>

            <div className="col-md-2">
                {book.imageLinks && <img src={book.imageLinks.thumbnail} />}
            </div>
            <div className="col-md-3 align-self-center">
                <p>{book.title}</p>
                <select
                    value={bookshelfs}
                    onChange={e => {
                        setBookshelfs(e.target.value)
                        setBookID(book.id)
                    }}>
                    <option value=""></option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                </select>


            </div>
        </>
    )



}
export default Book;                 