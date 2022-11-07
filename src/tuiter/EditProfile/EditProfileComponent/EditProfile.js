import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {FloatingLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {profileReducer} from "../../reducers/profile-reducer";

const EditProfile= () => {
    const defaultProfile = useSelector(state => state.profile)
    const [profile, editProfile] = useState(defaultProfile)
    const [firstName, editFirstName] = useState(profile.firstName);
    const [lastName, editLastName] = useState(profile.lastName);
    const [bio, editBio] = useState(profile.bio);
    const [location, editLocation] = useState(profile.location);
    const [website, editWebsite] = useState(profile.website);
    const [dateOfBirth, editDateOfBirth] = useState(profile.dateOfBirth);

    function changeName(event) {
        const newName = event.target.value.split(" ")
        editFirstName(newName[0]);
        editLastName(newName[1]);
        const updatedProfile = {
            ...profile,
            firstName: firstName,
            lastName: lastName
        }
        editProfile(updatedProfile)
    }

    function changeBio(bio) {
        editBio(bio.target.value);
        const updatedProfile = {
            ...profile,
            bio: bio.target.value
        }
        editProfile(updatedProfile)
    }

    function changeLocation(location) {
        editLocation(location.target.value);
        const updatedProfile = {
            ...profile,
            location: location.target.value
        }
        editProfile(updatedProfile)
    }

    function changeDateOfBirth(location) {
        editLocation(dateOfBirth.target.value);
        const updatedProfile = {
            ...profile,
            location: dateOfBirth.target.value
        }
        editProfile(updatedProfile)
    }

    function changeWebsite(website) {
        editWebsite(website.target.value);
        const updatedProfile = {
            ...profile,
            website: website.target.value
        }
        editProfile(updatedProfile)
    }

    const dispatch = useDispatch();
    const changeProfile = (event) => {
        dispatch(profileReducer({
            ...profile,
            firstName: firstName,
            lastName:lastName,
            bio: bio,
            location: location,
            website: website}));
    }
    return(
        <div className="row border">
            <div className="col">
                <a className="pe-5" href="/tuiter/profile"> <i className="fa fa-x text-black"></i></a>
                <span className="pe-5"> Edit profile</span>
                <a href="./profile" className="px-5"><button  onClick={(event) => changeProfile(event)} className="rounded-pill bg-white">Save</button></a>
            </div>
            <div className="col-3">
            </div>


            <img src={profile.bannerPicture} width={600} height={250} />
            <div className="col-9">
                <img src={profile.profilePicture} className="rounded-circle" height={80}/>
            </div>

            <Form>
                <FormGroup>
                    <FloatingLabel label="Name">
                        <FormControl type="input"
                                     onChange={(event) => {
                                         changeName(event)}
                                     }
                                     value={firstName+" "+lastName}
                        />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup>
                    <FloatingLabel label="Bio">
                        <FormControl as="textarea"
                                     onChange={(event) =>
                                         changeBio(event)}
                                     value={profile.bio}
                        />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup>
                    <FloatingLabel label="Location">
                        <FormControl as="textarea"
                                     onChange={(event) =>
                                         changeLocation(event)}
                                     value={profile.location}
                        />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup>
                    <FloatingLabel label="Website">
                        <FormControl as="textarea"
                                     onChange={(event) =>
                                         changeWebsite(event)}
                                     value={profile.website}
                        />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup>
                    <FloatingLabel label="Birth Date">
                        <FormControl as="textarea"
                                     onChange={(event) =>
                                         changeDateOfBirth(event)}
                                     value={profile.dateOfBirth}
                                     type="date"
                        />
                    </FloatingLabel>
                </FormGroup>
            </Form>
        </div>

    );
};
export default EditProfile;