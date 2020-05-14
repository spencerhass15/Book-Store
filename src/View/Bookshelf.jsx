import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CookieContext } from "../Context/SessionContext";
import SearchBar from "../components/SearchBar";
import { BookContext } from "../Context/BookContext";


function Bookshelf(props) {
    //const id = props.match.params.bookid;
    //const [bookid, setBookid] = useState();
    const [uuid, setUUID] = useContext(CookieContext);
    const [bookshelfs, setBookshelfs] = useState("");
    const { books, setBooks } = useContext(BookContext);
    //console.log("uuid", uuid);
    // console.log("string");
    // id && setBookid(id)
    // console.log(props.history);
    // console.log("state", props.state)

    console.log(books);
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
        , [])
    // const addBook = (bookshelf, id) => {
    //     // setBookshelfs(bookshelf)
    //     axios
    //         .put(`http://localhost:7000/bookshelf/${id}/${bookshelf}?id=${uuid}`)

    //         .then(r => {
    //             // console.log(r.data.books[bookshelf])
    //             //r.ok && history.push("/bookshelf/")
    //             //  if (r.ok) {
    //             // console.log("test")
    //             setBooks({
    //                 ...books,
    //                 [bookshelf]:
    //                     [...books[bookshelf],
    //                     ...r.data.books[bookshelf]]

    //             })
    //             // history.push("/bookshelf/", { books })

    //             //}
    //             //console.log(r.data.books, "resp")
    //         })
    // }
    // console.log({ books })
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

                                            <select
                                                value={bookshelfs}
                                                onChange={e => {
                                                    setBookshelfs(e.target.value)
                                                    //  addBook("", book.id);
                                                    // setBookID(book.id)
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

                                            <select
                                                value={bookshelfs}
                                                onChange={e => {
                                                    setBookshelfs(e.target.value)
                                                    //  addBook("", book.id);
                                                    // setBookID(book.id)
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

                                            <select
                                                value={bookshelfs}
                                                onChange={e => {
                                                    setBookshelfs(e.target.value)
                                                    //  addBook("", book.id);
                                                    // setBookID(book.id)
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
            {
                //     books && Object.values(books).map(bookshelf => {
                //         return bookshelf.length > 0 && bookshelf.map(book => {

                //             return (
                //                 <>


                //                     <div className="container">
                //                         <div className="row">
                //                             <div className="col-md-2 p-3">
                //                                 {book.imageLinks && <img src={book.imageLinks.thumbnail} />}
                //                             </div>
                //                             <div className="col-md-3 align-self-center">
                //                                 <p>{book.title}</p>

                //                                 <select
                //                                     value={bookshelfs}
                //                                     onChange={e => {
                //                                         setBookshelfs(e.target.value)
                //                                         //  addBook("", book.id);
                //                                         // setBookID(book.id)
                //                                     }}>
                //                                     <option value=""></option>
                //                                     <option value="wantToRead">Want to Read</option>
                //                                     <option value="currentlyReading">Currently Reading</option>
                //                                     <option value="read">Read</option>
                //                                 </select>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </>




                //             )
                //         });

                //     })
            }
        </div>
    )





}

export default Bookshelf;