import React, { useState } from "react";
import App from "../App";
import { Route, Switch, Link } from "react-router-dom";
import { BookSearch } from "../View/BookSearch";
import Bookshelf from "../View/Bookshelf";
import BookDescription from "../View/BookDescription";
import { CookieProvider } from "../Context/SessionContext";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { BookProvider } from "../Context/BookContext";

export const Routes = () => {

    return (
        <BookProvider>
            <CookieProvider>

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
                    <ProtectedRoute exact path="/book-description/:id" component={BookDescription} />

                </Switch>

            </CookieProvider>
        </BookProvider>

    );
};