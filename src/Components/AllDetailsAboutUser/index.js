import NavBar from "../NavBar"
import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import { SyncLoader } from 'react-spinners';

const AllDetailsAboutUser = () => 
{
    const [apiResponse, setAllDetailsAboutUser] = useState({
        apiStatus: 'LOADING',
        allDetailsAboutUser: null,
    })

    const {userid} = useParams() //gives the path parameters where we take id of the user cliked to fetch a specific user

    useEffect(() => {
        const fetchAllDetailsAboutUser = async () =>{    

            const getSpecificUserUrl = `https://jsonplaceholder.typicode.com/users/${userid}` //Here we use that specifc userid taken from path paramters to fetch that specific user
            const response = await fetch(getSpecificUserUrl)
            const responseInJson = await response.json()

            if (response.ok === true){
                setAllDetailsAboutUser({apiStatus: 'SUCCESS', allDetailsAboutUser: responseInJson})
            }
            
        } 
        fetchAllDetailsAboutUser()
    }, [])

    const renderUserDetails = () => <div>
        <h1>Name: {apiResponse.allDetailsAboutUser.name}</h1>
            <p>UserName: {apiResponse.allDetailsAboutUser.username}</p>
            <p>Phone: {apiResponse.allDetailsAboutUser.phone}</p>
            <p>Email: {apiResponse.allDetailsAboutUser.email}</p>
            <p>address: {apiResponse.allDetailsAboutUser.address.street}{apiResponse.allDetailsAboutUser.address.suite}{apiResponse.allDetailsAboutUser.address.city}{apiResponse.allDetailsAboutUser.address.zipcode}</p>   
            <p>Company Name: {apiResponse.allDetailsAboutUser.company.name}</p>
            <p>Website: {apiResponse.allDetailsAboutUser.website}</p>
    </div>

    const renderLoader = () => <SyncLoader color="#36D7B7" size={15} />

    return (
        <div>
            <NavBar />
            {
                apiResponse.apiStatus === 'SUCCESS' ? renderUserDetails() : renderLoader()
            }
        </div>
    )
}

export default AllDetailsAboutUser