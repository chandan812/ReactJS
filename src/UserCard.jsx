function UserCard({user}) {
    return (
        <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}
export default UserCard;