import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Form, Input, Button, Alert } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { createUser } from '../../../store/Actions/userActions'
import { setUser } from '../../../store/Actions/activeUserActions'

export const RegisterPage = () => {
    const dispatch = useDispatch()
    const secpatch = useDispatch()
    const returnValue = useSelector((state => state.users))
    const [isDelivered, setIsDelivered] = useState(false)

    const sendUser = (values) => {
        createUser(dispatch, {login: values.login, password: values.password, bio: values.bio})
        setTimeout(() => {
            setIsDelivered(true);
            if (returnValue.success) {
                setUser(secpatch, returnValue.returned);
                window.localStorage.setItem("auser.logged", "true");
                window.localStorage.setItem("auser.login", returnValue.returned.login.toString());
                window.localStorage.setItem("auser.admin", returnValue.returned.admin.toString());
            }}, 1000)
    }

    return (
        <div style={{margin: 25}}>
            <Form name='postForm' onFinish={sendUser} labelCol={{span: 4}} wrapperCol={{span: 20}}>
                <Form.Item name="login" label="Login/username:" rules={[{required: true, message: "A login is required."},]}>
                    <Input />
                </Form.Item>
                <Form.Item name="bio" label="Short description:">
                    <Input.TextArea rows={3} />
                </Form.Item>
                <Form.Item name="password" label="Password:" rules={[{required: true, message: "A password is required."},]}>
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{offset: 21, span: 3}}>
                    <Button type="primary" htmlType="submit" icon={<DownloadOutlined />}>Register</Button>
                </Form.Item>
            </Form>
            {isDelivered && returnValue.success &&
                <>
                    <Alert type="success" message={`User ${returnValue.returned.login} created successfully!`} />
                </>
            }
            {isDelivered && !returnValue.success &&
                <>
                    <Alert type="error" message={`Registration failed`} description={`${returnValue.message} ${returnValue.returned}`} />
                </>
            }
        </div>
    )
}