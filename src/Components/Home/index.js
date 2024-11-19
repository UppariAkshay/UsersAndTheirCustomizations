import NavBar from "../NavBar";
import {Component} from 'react'
import UserCard from "../UserCard";
import './index.css'


class Home extends Component
{
    state = {listOfAllUser: []}

    componentDidMount()
    {
        this.fetchAllUsers()
    }

    fetchAllUsers = async () => {
        const getAllUsersUrl = 'https://jsonplaceholder.typicode.com/users'

        const response = await fetch(getAllUsersUrl)
        const respnseInJson = await response.json()

        this.setState({listOfAllUser: respnseInJson})
    }

    render()
    {
        const {listOfAllUser} = this.state

        return (
            <div>
                <NavBar />

                <h1>This is Home</h1>
                
                <ul>
                    {listOfAllUser.map(eachUser => <UserCard userDetails={eachUser} />)}
                </ul>
            </div>
        )
    }
}

export default Home