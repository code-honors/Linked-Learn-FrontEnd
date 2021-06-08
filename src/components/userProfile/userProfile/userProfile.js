import './userProfile.scss'

function UserProfile(props) {
    return (
        <div id="userProfileContainer">
            <ul>
                <li>
                    <img src="https://freepikpsd.com/media/2019/10/default-profile-picture-png-1-Transparent-Images.png" width="150px" height="150px" alt="profile_picture" />
                </li>
                <li>
                    <strong>First Name:</strong> <span>Test</span>
                </li>
                <li>
                    <strong>Last Name:</strong> <span>Test</span>
                </li>
                <li>
                    <strong>Email:</strong> <span>Test.test#@test.test</span>
                </li>
                <li>
                    <strong>Phone Number:</strong> <span>t e s t t e e s s t t </span>
                </li>
            </ul>
        </div>
    )
}

export default UserProfile;