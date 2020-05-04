import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CookieContext } from "../Context/SessionContext";
import axios from "axios";

export const DropDown = (props) => {

    const [books, setBooks] = useState([]);
    const [bookshelf, setBookshelf] = useState("");
    const [bookID, setBookID] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const [uuid, setUUID] = useContext(CookieContext);
    useEffect(() => {

        axios
            .put(`http://localhost:7000/bookshelf/${bookID}/${bookshelf}`,
                {
                    params: {
                        id: uuid,
                    },
                }
            )

    }, [bookshelf])
    return (
        props.books.map(book => {
            return (

                <div className="container">
                    <div className="row p-5 ">
                        <div className="col-md-2">
                            {book.imageLinks && <img src={book.imageLinks.thumbnail} />}
                        </div>
                        <div className="col-md-3 align-self-center">
                            <p>{book.title}</p>
                            <select
                                value={bookshelf}
                                onChange={e => {
                                    setBookshelf(e.target.value)
                                    setBookID(book.id)
                                }}>
                                <option value="wantToRead">Want to Read</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="read">Read</option>
                            </select>
                            <Link to={`/bookshelf/${book.id}/${bookshelf}`}>{bookshelf}</Link>
                        </div>
                    </div>
                </div>
            )
        }
        ))
}
