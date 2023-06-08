import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../store/Actions/postActions";

import { Spin, Alert, Button, Card, Typography, Divider } from "antd";
import { LoadingOutlined, PlusSquareOutlined, UserOutlined, PlusCircleOutlined } from '@ant-design/icons'

const { Text } = Typography;

export const PostsPage = () => {
    const dispatch = useDispatch();
    const activeState = useSelector(((state) => state.posts))
    const messageref = useRef(activeState.message)
    const returnedref = useRef(activeState.returned)

    useEffect(() => {
        dispatch(getPosts);
        messageref.current = activeState.message;
        returnedref.current = activeState.current;
    },[dispatch]);

    return (
        <div style={{margin: 16}}>
            <Text strong italic>No posts are to your liking? Make one yourself:  </Text> <Button href={`/posts/create`} icon={<PlusCircleOutlined />}>Create a post</Button>
            <Divider>Posts</Divider>
            {activeState.loading && !activeState.success &&
            <Spin indicator={<LoadingOutlined/>} size="large"/>}
            {!activeState.loading && activeState.success && Array.isArray(activeState.returned) && activeState.returned.length > 0 &&
            activeState.returned.map(post => {
                return <Card key={post._id} title={post.title} extra={[
                    <Button type="text" key="opener" href={`/posts/${post._id}`} icon={<PlusSquareOutlined/>}>Open</Button>,
                    <Button type="text" key="creator" href={`/users/?login=${post.author}`} icon={<UserOutlined/>}>By {post.author}</Button>]}>
                    <h3 style={{wordBreak: "break-all", whiteSpace: "pre-wrap"}}>{post.min_desc}</h3>
                    <p style={{wordBreak: "break-all", whiteSpace: "pre-wrap"}}>{post.desc.length < 1024 && post.desc}{post.desc.length > 1024 && post.desc.slice(1024) && "..."}</p>
                    <Text italic type="secondary" level={5}>Last updated {new Date(post.date_up).toUTCString()}</Text>
                </Card>
            })}
            {!activeState.loading && activeState.success &&
                ((Array.isArray(activeState.returned) && activeState.returned.length === 0) ||
                !Array.isArray(activeState.returned)) &&
                <Alert type="warning" message="We tried looking! Really, we did!" description={`But all we found was ${messageref} and ${returnedref}`}/>
            }
            {!activeState.loading && !activeState.success &&
            <Alert type="error" message="An error has occured during the loading process" description={`${messageref}: ${returnedref}`}/>}
        </div>
    )
}