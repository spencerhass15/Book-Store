import React, { useState, createContext } from "react";
import { getSessionCookie, setSessionCookie, destroySessionCookie } from "../utils/Cookies.util";

export const CookieContext = createContext();

/**
 * Storing the UUID session token in the Context API
 * because most components that make an API call to the server
 * will need to access the UUID.
 * The Context API will prevent us from having to prop drill.
 */
export const CookieProvider = ({ children }) => {
    const [uuid, setUUID] = useState(getSessionCookie());
    /**
     * This effect will happen whenever a child or descendant component
     * calls on setUUID to update the UUID in state.
     */
    // console.log("rendering", { uuid });

    const set = newUUID => {
        /**
         * Store the UUID in a session cookie so that it will still be there if the refreshes the page.
         */
        newUUID ? setSessionCookie(newUUID) : destroySessionCookie();
        /**
         * Making the app rerender and storing the UUID in context
         * so that APIs that need to include the UUID will have it.
         */
        setUUID(newUUID);
    };

    return (
        <CookieContext.Provider value={[uuid, set]}>
            {children}
        </CookieContext.Provider>
    );
};