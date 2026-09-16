import {useState, useEffect} from 'react';

function App(){
const [users,setUsers] = useState([]);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);


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
        setError(err.message)
        setLoading(false)
      })
  }, 2000) // 2 second delay to see loading
}, [])


if(loading) return <p>Loading...</p>
if(error) return <p>Error: {error}</p>
  return (
    <div>
      {users.map(user=>(
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}
export default App;