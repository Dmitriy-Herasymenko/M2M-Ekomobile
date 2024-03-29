import React, {useEffect} from "react";
import {Table} from 'antd';
import {fetchUsers} from '../../modules/users';
import {useDispatch, useSelector} from 'react-redux';
import 'antd/dist/antd.css';
import {getUsersFetching} from "../../modules/users/";

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

export const Users = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.users.items);

    useEffect(() => {
        dispatch(getUsersFetching());
        dispatch(fetchUsers());
    }, [dispatch]);
    const dataWithKeys = data.map((user) => ({
        key: user.id,
        ...user
    }));

    return <Table columns={columns} dataSource={dataWithKeys} bordered style={{margin: '0 auto', width: '85%'}}/>
};