import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCard = props => {
    const {userDetails} = props

    return (
        <li className="userCardLI">
            <p><span>Username: </span>{userDetails.name}</p>
            <p><span>From: </span>{userDetails.address.city}</p>
            <button className='btn btn-primary'>Delete</button>
        </li>
    )
}

export default UserCard