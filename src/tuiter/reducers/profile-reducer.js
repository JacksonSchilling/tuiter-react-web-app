import { createSlice } from "@reduxjs/toolkit";

const profile = {
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

const userSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        profileReducer(state, action) {
            return action.payload;
        }
    }

});
export const {profileReducer} = userSlice.actions;
export default userSlice.reducer;