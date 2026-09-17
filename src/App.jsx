import {useState, useEffect} from 'react';
import UserCard from './UserCard';
import PostList from './PostList';

function App(){
const [users,setUsers] = useState([]);
const [loading,setLoading] = useState(true);
const [selectedUserId,setSelectedUserId] = useState(1);


useEffect(() => {
  setLoading(true)
  
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
      })
  }, 2000) // 2 second delay to see loading
}, [])


if(loading) return <p>Loading...</p>
  return (
    <div>
      <h1>User Dashbard</h1>
    <div>
      {users.map(user=>(
        <div key={user.id} onClick={()=>setSelectedUserId(user.id)} style={{border: '1px solid black', padding: '10px', margin: '10px', cursor: 'pointer'}}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
      <h2>Post of {selectedUserId}</h2>
    <PostList userId={selectedUserId} />
    </div>
  )
}
export default App;