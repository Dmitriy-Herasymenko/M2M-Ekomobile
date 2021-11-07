import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Users, Todo} from "../../components";

export const routes = [
    {
        path: "/",
        link: '/'
    },
    {
        link: '/users',
        path: "/users",
        render: <Users/>
    },
    {
        link: '/todo',
        path: "/todo",
        render: <Todo/>
    }
];
