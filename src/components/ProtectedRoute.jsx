import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { CookieContext } from "../Context/SessionContext";

/**
 * This will redirect the user to the login form if they haven't logged in.
 * @param {Object} props
 * {
 *   component: Users, // e.g. <Users /> component
 *   foo: "bar"
 * }
 */
export const ProtectedRoute = ({
    component: Component, // Capitalizing because React requires components names to be capitalized
    ...restOfPropsFromParent
}) => {
    /**
     * If the user is logged in, the UUID token will be stored in the Context API.
     */
    const [uuid] = useContext(CookieContext);

    return (
        <Route
            {...restOfPropsFromParent}
            render={propsFromReactRouter => {
                return uuid ? (
                    /**
                     * If the user is logged in, return the child component with the props from React Router.
                     */
                    <Component {...propsFromReactRouter} {...restOfPropsFromParent} />
                ) : (
                        /**
                         * If the user isn't logged in, redirect to the login form, which in this example, is "/".
                         */
                        <Redirect
                            to="/"
                            {...propsFromReactRouter}
                            {...restOfPropsFromParent}
                        />
                    );
            }}
        />
    );
};