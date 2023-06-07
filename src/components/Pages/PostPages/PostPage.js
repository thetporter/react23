import { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPost, editPost } from "../../../store/Actions/postActions";

import {Typography, Divider,
        Grid, Col, Row,
        Alert, Spin, Button } from "antd";
import { LoadingOutlined, SaveFilled, EditOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const PostPage = () => {
    const dispatch = useDispatch()
    const secpatch = useDispatch()
    const activeState = useSelector((state => state.posts))
    const { id } = useParams();

    const [editing, setEditing] = useState(false);

    const [title, setTitle] = useState("");
    const [mdesc, setMdesc] = useState("");
    const [desc, setDesc] = useState("");

    const messageref = useRef(activeState.message);
    const returnedref = useRef(activeState.returned);

    useEffect(() => {
        getPost(dispatch, id);
        messageref.current = activeState.message;
        returnedref.current = activeState.current;
    }, [dispatch, id])

    const StartEdit = () => {
        setEditing(true);
        setTitle(activeState.returned[0].title);
        setMdesc(activeState.returned[0].min_desc);
        setDesc(activeState.returned[0].desc);
    }

    const SendChanges = (newTitle, newMdesc, newDesc) => {
        editPost(secpatch, {title: newTitle, min_desc: newMdesc, desc: newDesc, id: id})
    }

    const SaveEdits = () => {
        setEditing(false);
        SendChanges(title, mdesc, desc);
    }

    return (
        <div style={{margin: 16}}>
            {activeState.loading && !activeState.success &&
            <Spin indicator={<LoadingOutlined/>} size="large"/>}
            {!activeState.loading && activeState.success && Array.isArray(activeState.returned) && typeof activeState.returned[0] !== 'string' &&
            <>
                <Row>
                    <Col span={8}>
                        <Title level={3}>{activeState.returned[0].author}</Title>
                        <Text italic>once wrote...</Text>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Text type="secondary" italic>Last edited {new Date(activeState.returned[0].date_up).toUTCString()}</Text>
                        </Row>
                        <Row>
                            <Text type="secondary" italic>Created {new Date(activeState.returned[0].date_cr).toUTCString()}</Text>
                        </Row>
                    </Col>
                    <Col span={4}>
                        {!editing && <Button type="default" icon={<EditOutlined/>} onClick={StartEdit}>Edit</Button>}
                        {editing && <Button type="primary" icon={<SaveFilled/>} onClick={SaveEdits}>Save</Button>}
                    </Col>
                </Row>
                <Divider />
                {!editing && 
                <>
                    <Row>
                        <Title level={1} underline>{activeState.returned[0].title}</Title>
                    </Row>
                    <Row>
                        <Col span={1} style={{backgroundColor: "lightGray"}}></Col>
                        <Col span={22} push={1}>
                            <Title level={3}>{activeState.returned[0].min_desc}</Title>
                        </Col>
                    </Row>
                    <Text >{activeState.returned[0].desc}</Text>
                </>}
                {editing && 
                <>
                    <Row>
                        <Title level={1} editable={{onChange: setTitle}} underline>{title}</Title>
                    </Row>
                    <Row>
                        <Col span={1} style={{backgroundColor: "lightGray"}}></Col>
                        <Col span={22} push={1}>
                            <Title level={3} editable={{onChange: setMdesc}}>{mdesc}</Title>
                        </Col>
                    </Row>
                    <Text editable={{onChange: setDesc, autoSize: true}}>{desc}</Text>
                </>}
            </>}
            {!activeState.loading && activeState.success && typeof activeState.returned === 'array' && typeof activeState.returned[0] === 'string' &&
                <Alert type="warning" message="We can't find the post you're requesting!" description={`Error ${messageref.current} was returned.`}/>
            }
            {!activeState.loading && !activeState.success &&
            <Alert type="error" message="An error has occured during the loading process" description={`${messageref.current}: ${returnedref.current}`}/>}
        </div>
    )
}