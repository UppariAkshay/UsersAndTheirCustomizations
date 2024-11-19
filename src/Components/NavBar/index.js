import {Link} from 'react-router-dom'

//functional component is used to just render a static html element (Navbar)
const NavBar = () => {
    
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                                                                        {/*<-- these are the navoptions */}
                <li><Link to='/addnewuser'>Add New User</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar