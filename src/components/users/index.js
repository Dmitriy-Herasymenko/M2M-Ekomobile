import React, {useEffect} from "react";
import { Table } from 'antd';
import {fetchUsers} from '../../asyncActions/users';
import {useDispatch, useSelector} from 'react-redux';
import 'antd/dist/antd.css';

export const Users = () => {
    const dispatch = useDispatch();
    const data =  useSelector(state => state.users.users);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'id',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'id',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'id',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'id',
        }
    ];
    useEffect (()=> {
         dispatch(fetchUsers());
    },[dispatch]);
    const dataWithKeys = data.map(i =>  ({
        key: i.id,
        name: i.name,
        email: i.email,
        phone: i.phone,
        username: i.username,
        website: i.website
    }));

    return data.length !== 0 ? <Table columns={columns} dataSource={dataWithKeys} bordered style={{margin: '0 auto', width: '85%'}} /> : <h1>No users</h1>
};