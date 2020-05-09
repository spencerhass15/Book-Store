import React from "react";
import App from "../App";
import { Route, Switch, Link } from "react-router-dom";
import { BookSearch } from "../View/BookSearch";
import Bookshelf from "../View/Bookshelf";
import { CookieProvider } from "../Context/SessionContext";
import { ProtectedRoute } from "../components/ProtectedRoute";
import SearchBar from "../components/SearchBar";

export const Routes = () => {

    return (
        <CookieProvider>
            <SearchBar />
            <Switch>
                {/* Using route for what the user doesn't need to logged in to see. In this case, it's the login form */}
                <Route exact path="/" component={App} />
                {/**
         * Using a protected route for the content that user needs to be logged in to see
         * @see examples/11c-authentication-routing/src/components/ProtectedRoute.js
         */}
                <ProtectedRoute exact path="/search/:book" component={BookSearch} />
                <ProtectedRoute exact path="/bookshelf/" component={Bookshelf} />
                <ProtectedRoute exact path="/book/:id" component={Bookshelf} />
            </Switch>
        </CookieProvider>
    );
};