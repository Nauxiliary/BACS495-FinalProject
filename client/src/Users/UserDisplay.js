function UserDisplay(props) {
    return <div>
        <p>
            Here is the list of current users in the database<br />
            {props.users.map(u => <li key={u._id}>{u.password} - {u.username}</li>)}
        </p>
    </div>;
}

export default UserDisplay;