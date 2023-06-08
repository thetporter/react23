import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makePost } from '../../../store/Actions/postActions'

import { Form, Input, Button, Alert } from 'antd'
import { SaveFilled } from '@ant-design/icons'

const strToBool = (a) => {
    if (a === "true" || a === "True") return true;
    else if (a === "false" || a === "False") return false;
    else return null;
}

export const CreatorPage = () => {
    const dispatch = useDispatch()
    const returnValue = useSelector((state => state.posts))
    const [isDelivered, setIsDelivered] = useState(false)

    const sendPost = (values) => {
        if (strToBool(localStorage.getItem("auser.logged"))) {
        makePost(dispatch, {title: values.title, min_desc: values.mdesc, desc: values.desc, author: localStorage.getItem("auser.login")})
        if (returnValue.success === true) {
            setIsDelivered(true);
        }} else alert("You must log in to create posts");
    }

    return (
        <div style={{margin: 25}}>
            <Form name='postForm' onFinish={sendPost} labelCol={{span: 4}} wrapperCol={{span: 20}}>
                <Form.Item name="title" label="Title:" rules={[{required: true, message: "A title is required!"},]}>
                    <Input />
                </Form.Item>
                <Form.Item name="mdesc" label="Short description:">
                    <Input.TextArea rows={3} />
                </Form.Item>
                <Form.Item name="desc" label="Description:" rules={[{required: true, message: "This is the main part of the post, don't leave it empty!"},]}>
                    <Input.TextArea rows={6} />
                </Form.Item>
                <Form.Item wrapperCol={{offset: 21, span: 3}}>
                    <Button type="primary" htmlType="submit" icon={<SaveFilled />}>Save</Button>
                </Form.Item>
            </Form>
            {isDelivered &&
                <>
                    <Alert type="success" message={`Post ${returnValue.returned[0].title} created successfully!`} description={`Post ID: ${returnValue.returned[0]._id}, copy it and go to it via /posts/id , or return to the Posts tab to see it for yourself!`} />
                </>}
        </div>
    )
}