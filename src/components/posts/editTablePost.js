import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Popconfirm, Table, Typography, Spin} from "antd";
import {deletePostRequest, getPostsRequest, updatePostRequest, deletePostFetching} from "../../modules/posts";

export const EditTablePost = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const {items, loading} = useSelector(state => state.posts);
    const [editingKey, setEditingKey] = useState('');

    useEffect(() => {
        dispatch(getPostsRequest());
    }, [dispatch]);

    const save = async (id) => {
        try {
            const row = await form.validateFields();
            dispatch(updatePostRequest(id, row.title, row.body));
            setEditingKey('');
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };
    const delRequest = id => {
        dispatch(deletePostFetching());
        dispatch(deletePostRequest(id));
    };

    const EditableCell = ({
                              editing,
                              dataIndex,
                              title,
                              body,
                              inputType,
                              record,
                              index,
                              children,
                              ...restProps
                          }) => {
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`,

                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };


    const isEditing = record => record.id === editingKey;

    const edit = record => {
        form.setFieldsValue({
            title: '',
            body: '',
            ...record,
        });
        setEditingKey(record.id);
    };

    const cancel = () => setEditingKey('');

    const columns = [
        {
            title: 'title',
            dataIndex: 'title',
            editable: true,
        },
        {
            title: 'body',
            dataIndex: 'body',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
            <a
                href="javascript:"
                onClick={() => save(record.id)}
                style={{
                    marginRight: 8,
                }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
                ) : (
                    <div>
                        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                            Edit
                        </Typography.Link>
                        <Popconfirm title="Sure to delete?" onConfirm={() => delRequest(record.id)}>
                            <a style={{paddingLeft: '5px', color: '#c41d7f'}}>Delete</a>
                        </Popconfirm>
                    </div>

                );
            },


        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <Form form={form} component={false}>
            {!loading ?
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={items}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                /> :
                <Spin tip="Loading..." style={{height: '50%', position: 'absolute', margin: '20% 35%'}}/>}
        </Form>
    )
}