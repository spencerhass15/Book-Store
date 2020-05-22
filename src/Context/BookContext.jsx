import React, { useState, createContext } from "react";

export const BookContext = createContext();

/**
 * Storing the UUID session token in the Context API
 * because most components that make an API call to the server
 * will need to access the UUID.
 * The Context API will prevent us from having to prop drill.
 */
export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState({
        wantToRead: [],
        read: [],
        currentlyReading: []
    });


    return (
        <BookContext.Provider value={{ books, setBooks }}>
            {children}
        </BookContext.Provider>
    );
};