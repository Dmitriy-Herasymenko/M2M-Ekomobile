import React, {useEffect, useState} from 'react';
import { Table, Button, Input, Modal } from 'antd';
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import {fecthPostsGet, fecthPostsPostRequest} from "../../asyncAction/posts";

export const Posts = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const data =  useSelector(state => state.posts.posts);
    const columns = [
        {
            title: 'title',
            dataIndex: 'title',
        },
        {
            title: 'body',
            dataIndex: 'body',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
        },
    ];

    useEffect (()=> {
        dispatch(fecthPostsGet());
    },[dispatch]);


    const handleClickOpen = () => setIsOpen(true);
    const handleClickClose = () => setIsOpen(false);
    const handlePostRequest = () => {
       dispatch(fecthPostsPostRequest(title, body));
       handleClickClose();
    }

    return (
        <div style={{margin: '0 auto', width: '80%' }}>
            <Button type="primary" style={{ marginBottom: 16 }} onClick={handleClickOpen}>
                Add post
            </Button>
            <Table columns={columns} dataSource={data} bordered />
            <Modal title="Add Post" visible={isOpen} onOk={handlePostRequest} onCancel={handleClickClose}>
                <Input placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} />
                <Input placeholder='Enter Body' onChange={(e) => setBody(e.target.value)}/>
            </Modal>
        </div>

    )
};