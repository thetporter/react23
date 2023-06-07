import { Button, Divider, Typography } from 'antd';
import { HomeFilled, KeyOutlined, ContactsOutlined, DatabaseOutlined } from '@ant-design/icons';

export const Navbar = (props) => {

    return (
        <>
            <nav>
                <Typography strong="true">Dumb MERN page</Typography>
                <Button href="/" type="text" icon={<HomeFilled/>}>Home Page</Button>
                <Divider type="vertical"/>
                <Button href="/users" type="text" icon={<ContactsOutlined/>}>Users</Button>
                <Button href="/posts" type="text" icon={<DatabaseOutlined/>}>Posts</Button>
                <Divider type="vertical"/>
                <Button href="/login" type="text" icon={<KeyOutlined/>}>Log in / Register</Button>
                <hr/>
            </nav>
            <div>
                {props.children}
            </div>
        </>
    );
}