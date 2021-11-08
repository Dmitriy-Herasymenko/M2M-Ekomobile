import React from "react";
import { Menu } from 'antd';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import {routes, links} from "../../modules/routes";
import 'antd/dist/antd.css';

export const Divider  = () => {
    const { SubMenu } = Menu;
    return (
        <div style={{display: 'flex'}}>
            <BrowserRouter>
            <Menu
                style={{ width: '256px', height: '100vh' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                type="vertical"
            >
                {links.map((link, index) => {
                    return (
                        link.subMenuCheck?
                            <SubMenu key={index} icon={link.icon} title={link.title}>
                        {link.subMenu.map((subLink, key) =>
                            <Menu.Item key={key}>
                                <Link to={subLink.link}>{subLink.title}</Link>
                            </Menu.Item>
                        )

                        }
                    </SubMenu> : <Menu.Item key={index} icon={link.icon}><Link to={link.link}>{link.title}</Link></Menu.Item>
                    )
                })}
            </Menu>
                <Routes>
                    {routes.map((route, index) => (
                        <Route path={route.path} element={route.component} key={index} />
                        ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
};



