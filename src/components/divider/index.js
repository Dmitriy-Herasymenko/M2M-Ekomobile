import React from "react";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import {Users, Todo} from "../index";
import 'antd/dist/antd.css';

export const Divider  = () => {
    const { SubMenu } = Menu;
    const handleClick = e => {
        console.log('click ', e);
    };

    return (
        <>
            <BrowserRouter>
            <Menu
                onClick={handleClick}
                style={{ width: 256, height: '100vh' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" icon={<MailOutlined />} title="Users">
                    <Menu.Item key="1"><Link to='/users'>All Users</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/addUser'>Register User</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/delUser'>Delete User</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Todos">
                    <Menu.Item key="1"><Link to='/todos'>All Todos</Link></Menu.Item>
                    <Menu.Item key="6">Add Todos</Menu.Item>
                    <Menu.Item key="7">Delete Todos</Menu.Item>
                </SubMenu>
            </Menu>
                <Switch>
                    <Route path='/Users' component={Users} />
                    <Route path='Todos' component={Todo} />
                </Switch>
            </BrowserRouter>
        </>
    );
}



