import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { CookieContext } from "../Context/SessionContext";
import BookDescription from "../components/Book";
import { BookContext } from "../Context/BookContext";


function Book({ book, isAdded }) {
    const [bookshelfs, setBookshelfs] = useState("");
    const [uuid, setUUID] = useContext(CookieContext);
    const [bookID, setBookID] = useState("");

    const { books, setBooks } = useContext(BookContext);

    const add = (o) => {
        setBooks(
            o)
    }
    const addBook = (bookshelf, id) => {
        setBookshelfs(bookshelf)
        axios
            .put(`http://localhost:7000/bookshelf/${id}/${bookshelf}?id=${uuid}`)

            .then(r => {
                add({
                    ...books,
                    [bookshelf]:
                        [...books[bookshelf],
                        ...r.data.books[bookshelf]]

                })

            })
    }

    return (
        <>

            <div className="col-md-2">
                {book.imageLinks && <img src={book.imageLinks.thumbnail} />}
            </div>
            <div className="col-md-3 align-self-center">
                <p>{book.title}</p>
                <p>{book.authors}</p>
                <select
                    value={bookshelfs}
                    onChange={e => addBook(e.target.value, book.id)}>
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