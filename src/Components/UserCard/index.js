import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const UserCard = props => {
    const {userDetails} = props

    return (
        <Link class='Linkcomponent' to={`/user/${userDetails.id}`}>
            <li className="userCardLI">
                <p><span>Username: </span>{userDetails.name}</p>
                <p><span>From: </span>{userDetails.address.city}</p>
                <button className='btn btn-primary'>Delete</button>
            </li>
        </Link>
    )
}

export default UserCard