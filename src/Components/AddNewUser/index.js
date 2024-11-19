import NavBar from "../NavBar";
import { Component } from "react";


//class component is used to use fetching for PUT request for adding new user using Life cycle methods like ComponentDidMount()
class AddNewUser extends Component
{
    state = {}

    render()
    {
        return(
            <div>
                <NavBar />
                <h1>This is Add new user page</h1>
                <h1>A form would be coming here to add new user</h1>
            </div>
        )
    }
}

export default AddNewUser