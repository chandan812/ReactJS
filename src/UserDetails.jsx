import { useParams } from "react-router-dom";
import{useState, useEffect} from "react"


function UserDetails(){
const {id} = useParams();
const [users,setUsers] = useState([]);
const [loading,setLoading] = useState(true);


useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>response.json())
    .then(data=>{
        setUsers(data);
        setLoading(false);
    })
})

if(loading) return <p>Loading...</p>
if(!users) return <p>No user found</p>

return(
<div>
    <h1>User Details</h1>
    <p>Name: {users.name}</p>
    <p>Email: {users.email}</p>
    <p>Phone: {users.phone}</p>
    <p>Website: {users.website}</p>
</div>
)
}
export default UserDetails;