import React from 'react';
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash';
import {
    Form,
    Input,
    Select,
    Button,
} from 'antd';

import { getAuhtorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

const Option = Select.Option


const AddBook = (props) => {
    const [form] = Form.useForm();

    console.log(props)
    const onFinish = values => {
        const { name, genre, author } = values
        props.addBookMutation({
            variables: {
                name: name,
                genre: genre,
                authorId: author
            },
            refetchQueries: [{ query: getBooksQuery }]
        })
    };
    const displayAuthors = () => {

        var data = props.getAuhtorsQuery
        if (data.loading) {
            return (
                <div>Loading</div>
            )
        }
        else {
            return data.authors.map(author => {
                return (<Option value={author.id} key={author.id}>{author.name}</Option>)
            }
            )
        }
    }


    return (
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >Name
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
            >
                <Input />
            </Form.Item>
            Genre
            <Form.Item
                name="genre"
                rules={[{ required: true, message: 'Please input your genre!', whitespace: true }]}
            >
                <Input />
            </Form.Item>
            Author
            <Form.Item
                name="author"
                rules={[{ required: true, message: 'Please input your author!', whitespace: true }]}
            >
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    {
                        displayAuthors()
                    }
                </Select>
            </Form.Item>
            <Button type="primary" htmlType="submit">
                Add Button
        </Button>
        </Form>
    );
};

export default compose(graphql(getAuhtorsQuery, { name: "getAuhtorsQuery" }), graphql(addBookMutation, { name: "addBookMutation" }))(AddBook)