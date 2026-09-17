import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Users(){
const [users,setUsers] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then((data)=>{
    setUsers(data);
    setLoading(false);
})
})

if(loading) return <p>Loading...</p>


return(
    <div>
        <h1>Users List</h1>
        {
            users.map(user=>(
                <div key={user.id} style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                    <Link to={`/users/${user.id}`}>View Details</Link>
                </div>
            ))
        }
    </div>
)
}
export default Users;