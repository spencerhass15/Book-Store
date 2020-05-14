import React, { useState, useContext, useEffect } from 'react';
//import { Link } from "react-router-dom";
import axios from "axios";
import { CookieContext } from "../Context/SessionContext";
import BookDescription from "../components/Book";
import { BookContext } from "../Context/BookContext";

//<DropDown books={books} />

function Book({ book, isAdded }) {
    const [bookshelfs, setBookshelfs] = useState("");
    const [uuid, setUUID] = useContext(CookieContext);
    const [bookID, setBookID] = useState("");

    const { books, setBooks } = useContext(BookContext);
    // console.log(books);
    // console.log("state2", state);
    //console.log(location);
    const test = (o) => {
        setBooks(
            o)
    }
    const addBook = (bookshelf, id) => {
        setBookshelfs(bookshelf)
        axios
            .put(`http://localhost:7000/bookshelf/${id}/${bookshelf}?id=${uuid}`)

            .then(r => {
                // console.log(r.data.books[bookshelf])
                //r.ok && history.push("/bookshelf/")
                //  if (r.ok) {
                // console.log("test")
                test({
                    ...books,
                    [bookshelf]:
                        [...books[bookshelf],
                        ...r.data.books[bookshelf]]

                })
                // history.push("/bookshelf/", { books })

                //}
                //console.log(r.data.books, "resp")
            })
    }
    //console.log(book)
    return (
        <>

            <div className="col-md-2">
                {book.imageLinks && <img src={book.imageLinks.thumbnail} />}
            </div>
            <div className="col-md-3 align-self-center">
                <p>{book.title}</p>

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