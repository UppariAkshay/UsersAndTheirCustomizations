import './index.css'

const UserCard = props => {
    const {userDetails} = props

    return (
        <li className="userCardLI">
            <p>Username: {userDetails.name}</p>
            <p>From: {userDetails.address.city}</p>
            <button>Delete</button>
        </li>
    )
}

export default UserCard