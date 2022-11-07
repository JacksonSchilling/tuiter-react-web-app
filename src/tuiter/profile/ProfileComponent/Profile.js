import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const Profile = (
    {
        User = {
            firstName: 'Elon',
            lastName: 'Musk',
            handle: '@elonmusk',
            profilePicture: "../../images/musk.jpg",
            bannerPicture: "../../images/space.jpg",
            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
            website: 'tesla.com',
            location: 'Boston, MA',
            dateOfBirth: '7/7/1968',
            dateJoined: '4/2009',
            followingCount: 340,
            followersCount: 223
        }

    }
) => {
    return(
        <div className="row border">
            <img src={User.bannerPicture} width={600} height={250} />
            <div className="col-9">
                <img src={User.profilePicture} className="rounded-circle" height={80}/>
            </div>
            <div className="col-3">
                <a href="/tuiter/edit-profile"><button  className="rounded-pill bg-white">Edit Profile</button></a>
            </div>
            <p className="pt-3 h4">{User.firstName} {User.lastName}</p>
            <p className="text-secondary">{User.handle}</p>
            <p> {User.bio}</p>
            <div className="col">
                <span className="col-4 pe-4"><i className="fa fa-location"></i><span className="text-secondary"> {User.location}</span></span>
                <span className="col-4 pe-4"><i className="fa fa-magnifying-glass"></i><span className="text-secondary"> Born {User.dateOfBirth}</span></span>
                <span className="col-4 pe-4"><i className="fa fa-calendar"></i><span className="text-secondary"> Joined {User.dateJoined}</span></span>
            </div>
        </div>
    );
};
export default Profile;