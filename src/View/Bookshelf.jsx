import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CookieContext } from "../Context/SessionContext";

function Bookshelf(props) {
    const id = props.match.params.bookid;
    const [bookid, setBookid] = useState();
    const [uuid, setUUID] = useContext(CookieContext);
    const [book, setBook] = useState({})
    console.log("uuid", uuid);
    console.log("string");
    id && setBookid(id)


    useEffect(() => {
        axios
            .get(`http://localhost:7000/bookshelf/`,
                {
                    params: {
                        id: uuid,
                    },
                }
            )
            .then(resp => resp.data && setBook(resp.data.books))
    }
        , [])

    return (
        <div>
            {

                book && console.log(book)
            }
            {
                book && Object.values(book).map(bookshelf => {
                    return bookshelf.length > 0 && bookshelf.map(book => {
                        console.log(book, "book");
                        return (
                            <p>
                                {
                                    book.title
                                }
                                {

                                    console.log(book.title, "books")
                                }
                            </p>



                        )
                    });

                    // bookshelf.length > 0 && console.log(bookshelf, "bookshelf");
                    // return (
                    //     <p>{bookshelf && bookshelf.title} test</p>


                    // )

                })
            }
        </div>
    )
}

export default Bookshelf;