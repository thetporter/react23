import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { BarsOutlined } from '@ant-design/icons';

export const Home = () => {

  const [users, setUsers] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [posts, setPosts] = useState([])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setUsers(res);
        }
      })
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        setAllPosts(res);
        console.log("Received posts for all users");
      }
    })
  }

  const loadUsersPosts = () => {
    getData();
  }
  
  const getPostsByUser = ({userId}) => {
    console.log("Attempted collecting posts for userId", userId)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setPosts(res.filter(post => (post.userId === userId)));
          console.log("Received posts for userId", userId);
        }
      })
  }

  function takePosts(userId) {
    getPostsByUser(userId);
  }

  function PostProducerKey(userId) {
    return (
      <BarsOutlined key="Posts" onClick={() => {takePosts(userId)}}/>
    );
  }

  return(
    <>
      <h2 style={{"display":"flex", "margin-left":"16px"}}>
        <>Users:</>
        <Button type="default" style={{"margin-left":"16px"}} onClick={() => {loadUsersPosts()}}>Load users</Button>
      </h2>
      <div class="cardgrid">
        {users.length > 0 &&
          users.map(user => {
            return <Card title={[user.name, " | ", user.username]} key={Math.random()} style={{width: 300}}
                    actions={[<PostProducerKey userId={user.id}/>]}>
                      <p>{user.email}</p>
                      <p>Employed at {user.company.name}</p>
                      <p>Latest publications: <b>{allPosts.length > 0 && (allPosts.find(post => post.userId === user.id)).title}</b></p>
                    </Card> 
          })
        }
        {users.length <= 0 &&
            <Card title={"Load up some users! Use the button!"} key={Math.random()} style={{width: 300}}>
                      <p>Can't have anything until we have more users, you know?</p>
            </Card>
        }
      </div>
      <hr/>
      <h2 style={{"display":"flex", "margin-left":"16px"}}>
        <p>Posts of user{posts.length < 1 && allPosts.length > 0 && <>s</>}{posts.length > 0 && ` ${users.find(user => user.id === posts[1].userId).name}`}:</p>
      </h2>
      <div>
        {posts.length > 0 &&
          posts.map(post => {
            return <Card title={post.title} key={Math.random()}>
              <p>{post.body}</p>
              <>by {(users.find(user => user.id === post.userId)).name}</>
            </Card>
          })
        }
        {posts.length <= 0 && allPosts.length > 0 &&
          allPosts.map(post => {
            return <Card title={post.title} key={Math.random()}>
              <p>{post.body}</p>
              <>by {(users.find(user => user.id === post.userId)).name}</>
            </Card>
          })
        }
        {posts.length < 1 && allPosts.length < 1 && <>Nothing is loaded yet!</>}
      </div>
    </>
  );
}