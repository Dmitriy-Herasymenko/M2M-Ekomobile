import React from "react";
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import {Users, Todo} from "../../components";

export const links = [
    {
        title: 'Users',
        link: '/users',
        icon: <AppstoreOutlined/>,
        subMenuCheck: true,
        subMenu: [
            {
                title: 'Users',
                link: '/users'
            },
            {
                title: 'AddUser',
                link: '/adduser'
            },
            {
                title: 'RemoveUser',
                link: '/removeuser'
            },
        ],

    },
    {
        title: 'Todos',
        link: '/todos',
        icon: <MailOutlined/>,
        subMenuCheck: true,
        subMenu: [
            {
                title: 'Todos',
                link: '/todos'
            },
            {
                title: 'AddTodo',
                link: '/addtodo'
            },
            {
                title: 'RemoveTodo',
                link: '/removetodo'
            },
        ],
    },
    {
        title: 'SomeComponents',
        link: '/something',
        icon: <MailOutlined/>,
        subMenuCheck: false
    },

];

export const routes = [
    {
        path: '/',
    },
    {
        title: 'Users',
        path: '/users',
        icon: <MailOutlined />,
        component: <Users />
    },
    {
        title: 'Todo',
        path: '/todos',
        icon: <MailOutlined />,
        component: <Todo />
    }
];
