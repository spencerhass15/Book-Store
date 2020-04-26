import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CookieContext } from "../Context/SessionContext";
import axios from "axios";
//import { Container, Row, Col } from "react-bootstrap"



export const BookSearch = (props) => {
    const booksearch = props.match.params.book;
    const [books, setBooks] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");


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
                setBooks(resp.data.books);
                console.log(resp.data);
            })
            .catch(err => {
                console.error(err);
                setErrorMessage("Oh no! An unexpected error occurred.");
            });
    }, [uuid]);

    //    console.log(list);

    return (
        <div className="container mt-2 mb-5">

            {/* <div className="d-flex justify-content-between">

                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setUUID();
                        props.history.push("/");
                    }}
                >
                    Logout
        </button>
            </div> */}

            {books.map(book => {

                return (
                    // <div className="container">
                    //     <div className="row">
                    //         <div className="col-md-4">
                    //             <img src={book.imageLinks.thumbnail}></img>
                    //             {book.title}
                    //             {book.id}
                    //         </div>
                    //     </div>
                    // </div>

                    <div className="container">
                        <div className="row p-5 ">
                            <div className="col-md-2">
                                {book.imageLinks && <img src={book.imageLinks.thumbnail} />}
                            </div>
                            <div className="col-md-3 align-self-center">
                                <p>{book.title}</p>
                                <Link to={`/bookshelf/${book.id}`}>add</Link>
                            </div>

                        </div>


                    </div>

                    // <Container>
                    //     <Row className="justify-content-md-center">
                    //         <Col xs lg="2">
                    //             {book.imageLinks && <img src={book.imageLinks.thumbnail} />}

                    //         </Col>


                    //     </Row>
                    //     <Row>
                    //         <Col><p>{book.title}</p>
                    //             <Link to={`/bookshelf/${book.id}`}>add</Link>
                    //         </Col>


                    //     </Row>
                    // </Container>





                )
                // const key = `user-${user.id}`;
                // const name = `${user.firstName} ${user.lastName}`;
                // return (
                //     <div key={key}>
                //         <img src={user.avatar} alt={name} />
                //         <p>{name}</p>
                //     </div>
                // );
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