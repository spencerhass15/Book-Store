import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CookieContext } from "../Context/SessionContext";
import axios from "axios";
import Book from "../components/Book";
import SearchBar from "../components/SearchBar";
import { BookContext } from "../Context/BookContext";

//import { Container, Row, Col } from "react-bootstrap"



export const BookSearch = (props) => {
    // console.log({ props })
    const booksearch = props.match.params.book;
    const [boooks, setBoooks] = useState([]);
    const [bookshelf, setBookshelf] = useState("");
    const [bookID, setBookID] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    //console.log(props);
    const { books, setBooks } = useContext(BookContext);
    /**
     * Getting the token (UUID) we stored in the Context API.
     */
    const [uuid, setUUID] = useContext(CookieContext);

    useEffect(() => {
        /**
         * The API should not give you back any users unless you are logged in.
         * To prove that you are logged in, you must pass the token (UUID) in the API.
         */

        axios
            .get(`http://localhost:7000/book/search/${booksearch}`, {
                /**
                 * We could use the "Authorize" header like we did in the local storage example,
                 * but I'm showing you an alternative way of doing this,
                 * where you pass the token as a query parameter.
                 */

                params: {

                    id: uuid, // Try commenting me out and see what happens when no token is passed

                }
            })
            .then(resp => {
                setBoooks(resp.data.books);

            })
            .catch(err => {
                console.error(err);
                setErrorMessage("Oh no! An unexpected error occurred.");
            });
    }, [uuid]);

    const addBook = (bookshelf, id) => {
        axios
            .put(`http://localhost:7000/bookshelf/${id}/${bookshelf}?id=${uuid}`)

            .then(r => {

                setBooks({
                    ...books,
                    [bookshelf]:
                        [...books[bookshelf],
                        ...r.data.books[bookshelf]]

                })
            })
    }
    return (
        <div>
            <SearchBar />
            <div className="container mt-2 mb-5">
            </div>

            {boooks.map(book => {
                return (
                    <div className="container">
                        <div className="row p-5 ">
                            <Book book={book} {...props} isAdded={addBook} />
                        </div>
                    </div>
                )

            })}


            {
                errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
            }
        </div >
    );
};