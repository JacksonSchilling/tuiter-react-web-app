import axios from 'axios';

const TUITS_API = 'https://tuiter-node-server-app12.herokuapp.com/api/tuits';

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}
export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
}
export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}
export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}
