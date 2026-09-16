function UserCard({name,email,status}) {
    return (
        <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Status: {status === 'active' ? 'Active' : 'inactive'}</p>
        </div>
    )
}
export default UserCard