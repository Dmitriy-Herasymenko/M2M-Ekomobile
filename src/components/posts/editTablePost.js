import {Form, Input, Popconfirm, Table, Typography} from "antd";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPostsRequest, updatePostRequest} from "../../asyncAction/posts";

export const EditTablePost = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const data =  useSelector(state => state.posts.posts);
    const [editingKey, setEditingKey] = useState('');

    useEffect (()=> {
        dispatch(getPostsRequest());
    },[]);

    const save = async (id) => {
        try {
            const row = await form.validateFields();
            dispatch(updatePostRequest(id, row.title, row.body));
            setEditingKey('');
            console.log("data", data)
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
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
                        <Input  />
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
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
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
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                }}
            />
        </Form>
    )
}