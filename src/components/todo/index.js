import React, {useEffect} from "react";
import { Table } from 'antd';
import {fetchTodo} from "../../asyncAction/todo";
import {useDispatch, useSelector} from 'react-redux';
import 'antd/dist/antd.css';

export const Todo = () => {
    const dispatch = useDispatch();
    const data =  useSelector(state => state.todo.todo);
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Completed',
            dataIndex: 'completed',
            key: 'completed',
        }
    ];
    useEffect (()=> {
        dispatch(fetchTodo());
    },[dispatch]);
    const dataWithKeys = data.map(todo => ({
        key: todo.id,
        title: todo.title,
        completed: todo.completed? 'Completed' : 'Not Completed'
    }));

    return data.length !== 0 ? <Table columns={columns} dataSource={dataWithKeys} bordered style={{margin: '0 auto', width: '85%'}} /> : <h1>No users</h1>
};