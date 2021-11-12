import React from "react";
import {AddPost} from './addPost';
import {EditTablePost} from './editTablePost';
import 'antd/dist/antd.css';


export const Posts = () => {


    return (
        <div style={{width: '85%', margin: '0 auto'}}>
            <AddPost/>
            <EditTablePost/>
        </div>

    );
};
