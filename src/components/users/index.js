import React, {useEffect} from "react";
import { Table } from 'antd';
import {fetchUsers} from '../../asyncAction/users';
import {useDispatch, useSelector} from 'react-redux';

export const Users = () => {
    const dispatch = useDispatch();
    const data =  useSelector(state => state.users.users);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: '1',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: '2',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: '3',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: '4',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: '5',
        }
    ];
    useEffect (()=> {
         dispatch(fetchUsers());
    },[dispatch]);

    return data.length !== 0 ? <Table columns={columns} dataSource={data} key='id' /> : <h1>No users</h1>
};