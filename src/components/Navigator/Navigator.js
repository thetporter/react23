import { Button } from 'antd'
import { HomeFilled, KeyOutlined } from '@ant-design/icons'

export const Navbar = (props) => {
    return (
        <>
            <nav>
                <Button href="/" type="text" icon={<HomeFilled/>}>Home Page</Button>
                <Button href="/login" type="text" icon={<KeyOutlined/>}>Log in / Register</Button>
                <hr/>
            </nav>
            <div>
                {props.children}
            </div>
        </>
    );
}