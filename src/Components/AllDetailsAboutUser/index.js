import NavBar from "../NavBar";
import { Component } from "react";

//class component is used for using fetching PUT requests using Life cycle methods like ComponentDidMount()
class AllDetailsAboutUser extends Component
{
    state = {}

    render()
    {
        return(
            <div>
                <NavBar />
                <h1>This is the All Details about user page</h1>
                <h1>Here we display all details about specific user and can edit the details about that specific user</h1>
            </div>
        )
    }
}

export default AllDetailsAboutUser