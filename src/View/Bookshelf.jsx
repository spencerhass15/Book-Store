import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { CookieContext } from "../Context/SessionContext";
import SearchBar from "../components/SearchBar";
import { BookContext } from "../Context/BookContext";


function Bookshelf(props) {

    const [uuid, setUUID] = useContext(CookieContext);
    const [id, setID] = useState();
    const [bookshelfs, setBookshelfs] = useState("");
    const { books, setBooks } = useContext(BookContext);

    useEffect(() => {
        axios
            .get(`http://localhost:7000/bookshelf/`,
                {
                    params: {
                        id: uuid,
                    },
                }
            )
            .then(resp => resp.data && setBooks({ ...books }))
    }
        , [uuid])

    return (
        <div>
            <SearchBar />
            <h2>Want To Read</h2>
            {

                books["wantToRead"].map(bookshelf => {
                    return (
                        <>

                            <>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2 p-3">
                                            {bookshelf.imageLinks && <img src={bookshelf.imageLinks.thumbnail} />}
                                        </div>
                                        <div className="col-md-3 align-self-center">
                                            <p>{bookshelf.title}</p>
                                            <Link to={`/book-description/${id}`}>Book Description</Link>
                                            <select
                                                value={bookshelfs}
                                                onChange={e => {
                                                    setBookshelfs(e.target.value)

                                                }}>
                                                <option value=""></option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="read">Read</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </>)
                })
            }
            <h2>Currently Reading</h2>
            {

                books["currentlyReading"].map(bookshelf => {
                    return (
                        <>

                            <>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2 p-3">
                                            {bookshelf.imageLinks && <img src={bookshelf.imageLinks.thumbnail} />}
                                        </div>
                                        <div className="col-md-3 align-self-center">
                                            <p>{bookshelf.title}</p>
                                            <Link to={`/book-description/${id}`}>Book Description</Link>
                                            <select
                                                value={bookshelfs}
                                                onChange={e => {
                                                    setBookshelfs(e.target.value)

                                                }}>
                                                <option value=""></option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="read">Read</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </>)
                })
            }
            <h2>Read</h2>
            {

                books["read"].map(bookshelf => {
                    return (
                        <>

                            <>


                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2 p-3">
                                            {bookshelf.imageLinks && <img src={bookshelf.imageLinks.thumbnail} />}
                                        </div>
                                        <div className="col-md-3 align-self-center">
                                            <p>{bookshelf.title}</p>
                                            <Link to={`/book-description/${id}`}>Book Description</Link>
                                            <select
                                                value={bookshelfs}
                                                onChange={e => {
                                                    setBookshelfs(e.target.value)

                                                }}>
                                                <option value=""></option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="read">Read</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </>)
                })
            }

        </div>
    )





}

export default Bookshelf;