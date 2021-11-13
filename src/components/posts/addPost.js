import React, {useState} from "react";
import {Button, Input, Modal} from 'antd';
import {postPostRequest} from "../../modules/posts";
import {useDispatch} from "react-redux";

export const AddPost = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleClick = () => setIsOpen(!isOpen);

    const handlePostRequest = () => {
        dispatch(postPostRequest(title, body));
        handleClick();
    };

    return (
        <>
            <Button type="primary" style={{marginBottom: 16}} onClick={handleClick}>
                Add post
            </Button>
            <Modal title="Add Post" visible={isOpen} onOk={handlePostRequest} onCancel={handleClick}>
                <Input placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)}/>
                <Input placeholder='Enter Body' onChange={(e) => setBody(e.target.value)}/>
            </Modal>
        </>
    )

}