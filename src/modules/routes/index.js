import React from "react";
import {AppstoreOutlined, MailOutlined} from '@ant-design/icons';
import {Users, Todo, Posts} from "../../components/index";

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
        title: 'Posts',
        link: '/posts',
        icon: <MailOutlined/>,
        subMenuCheck: false
    },

];

export const routes = [
    {
        path: '/users',
        component: <Users/>
    },
    {
        path: '/todos',
        component: <Todo/>
    },
    {
        path: '/posts',
        component: <Posts/>
    }
];
