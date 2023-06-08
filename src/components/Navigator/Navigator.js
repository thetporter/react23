import { Button, Typography, Row, Col } from 'antd';
import { HomeFilled, KeyOutlined, ContactsOutlined, DatabaseOutlined, UserOutlined, AlignRightOutlined, LockFilled } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { exUser, setUser } from '../../store/Actions/activeUserActions';
import { useEffect, useState } from 'react';

const strToBool = (a) => {
    if (a === "true" || a === "True") return true;
    else if (a === "false" || a === "False") return false;
    else return null;
}

export const Navbar = (props) => {
    
    const curuser = useSelector((state => state.auser));
    const dispatch = useDispatch()
    const [aun, setAun] = useState(null);

    useEffect(() => {
        if (strToBool(localStorage.getItem("auser.logged")))
        {if (localStorage.getItem("auser.login") !== (undefined || null))
            setUser(dispatch, {returned: {login: localStorage.getItem("auser.login"),
                                          admin: strToBool(localStorage.getItem("auser.admin"))},
                               logged: strToBool(localStorage.getItem("auser.logged"))})
            setAun(localStorage.getItem("auser.login"))
        }
        console.log(localStorage.getItem("auser.login"))
    },[dispatch, localStorage])

    const logout = () => {
        dispatch(exUser);
        localStorage.removeItem("auser.logged");
        localStorage.removeItem("auser.login");
        localStorage.removeItem("auser.admin");
    }

    console.log(localStorage)
    console.log(curuser)

    return (
        <>
            <nav>
                <Row>
                    <Col span={3}>
                        <Typography.Text strong>Dumb MERN page</Typography.Text>
                    </Col>
                    <Col span={3}>
                        <Button href="/" type="text" icon={<HomeFilled/>}>Home Page</Button>
                    </Col>
                    <Col span={6} push={1}>
                    <Button href="/users" type="text" icon={<ContactsOutlined/>}>Users</Button>
                    <Button href="/posts" type="text" icon={<DatabaseOutlined/>}>Posts</Button>
                    </Col>
                    <Col span={8} push={6} style={{alignItems: "right"}}>
                    {(!curuser || (curuser && !curuser.logged)) &&
                    <>
                        <Button href="/login" type="text" icon={<KeyOutlined/>}>Log in</Button>
                        <Button href="/register" type="primary" icon={<LockFilled/>}>Create an account</Button>
                    </>}
                    {curuser && curuser.logged &&
                    <>
                        <Button icon={<UserOutlined />} href={`/users/?login=${aun}`}>{aun}</Button>
                        <Button icon={<AlignRightOutlined />} onClick={logout} />
                    </>
                    }
                    </Col>
                </Row>
                <hr/>
            </nav>
            <div>
                {props.children}
            </div>
        </>
    );
}