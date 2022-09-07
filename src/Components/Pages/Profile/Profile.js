import React from 'react'
import { Link } from 'react-router-dom'
import UserData from '../UserInformation/UserData/UserData'


const Profile = () => {
    return (
        <section>
            <UserData></UserData>
            <div className="m-btn-area w-50 mx-auto text-center mt-10">
                <button className="btn btn-primary text-white my-5 hover:bg-white hover:text-primary">
                    <Link to="/upadateProfoile">Update Your Information</Link>{" "}
                </button>
            </div>
        </section>
    )
}

export default Profile