import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Form, Input, Button, Alert } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { validateUser } from '../../../store/Actions/userActions'
import { setUser } from '../../../store/Actions/activeUserActions'

export const LoginPage = () => {
    const dispatch = useDispatch()
    const secpatch = useDispatch()
    const returnValue = useSelector((state => state.users))
    const [isDelivered, setIsDelivered] = useState(false)

    const sendUser = (values) => {
        validateUser(dispatch, {login: values.login, password: values.password})
        setTimeout(() => {
            validateUser(dispatch, {login: values.login, password: values.password});
            setIsDelivered(true);
            if (returnValue.success) {
                setUser(secpatch, returnValue.returned);
                window.localStorage.setItem("auser.logged", "true");
                window.localStorage.setItem("auser.login", returnValue.returned.login.toString());
                window.localStorage.setItem("auser.admin", returnValue.returned.admin.toString());
            }}, 1000)
    }

    //useEffect(() => {
    //    if (returnValue.success) setUser(dispatch, returnValue.returned);
    //}, [dispatch])

    return (
        <div style={{margin: 25}}>
            <Form name='postForm' onFinish={sendUser} labelCol={{span: 4}} wrapperCol={{span: 20}}>
                <Form.Item name="login" label="Login:" rules={[{required: true, message: "Enter a valid login"},]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Password:" rules={[{required: true, message: "Enter a valid password"},]}>
                    <Input security='true'/>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 21, span: 3}}>
                    <Button type="primary" htmlType="submit" icon={<SendOutlined />}>Save</Button>
                </Form.Item>
            </Form>
            {isDelivered && returnValue.success &&
                <>
                    <Alert type="success" message={`Login as ${returnValue.returned.login} completed successfully!`} description={`You are now logged in as ${returnValue.returned.login}`} />
                </>
            }
            {isDelivered && !returnValue.success &&
                <>
                    <Alert type="error" message={`Login failed`} description={`${returnValue.message}: ${returnValue.returned}`} />
                </>
            }
        </div>
    )
}