import React, { useState, useEffect } from 'react';

function PostList({userId}){
const [posts,setPosts] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response=>response.json())
    .then((data)=>{
        setPosts(data);
        setLoading(false);
    })
}, [userId]);

if(loading) {
   return <div>Loading Posts...</div>
}

return(
    <div>
        {posts.map(post=> (
                <div key={post.id} style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
        ))}
    </div>
)
}
export default PostList;