import NavBar from "../NavBar";
import {Component, useDeferredValue} from 'react'


//class component is used to fetching GET request to get all users using Life cycle methods like ComponentDidMount()
class Home extends Component
{
    state = {}

    render()
    {
        return (
            <div>
                <NavBar />
                <h1>This is Home</h1>
                <h1>Here all users will be displayed and can delete a specifc user</h1>
            </div>
        )
    }
}

export default Home