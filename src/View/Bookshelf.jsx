import React, { useState, useEffect } from "react";
import axios from "axios";


function Bookshelf(props) {
    const id = props.match.params.bookid;
    const [bookid, setBookid] = useState();
    id && setBookid(id)


    useEffect(() => {
        axios
            .get(`http://localhost:7000/bookshelf/${bookid}/wantToRead`)
            .then(resp => console.log(resp))
    }, [bookid])

    return (
        <i>bookshelf</i>
    )
}

export default Bookshelf;