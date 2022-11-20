import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

function Liked(bool) {
    if(bool) {
        return "fa fa-heart text-danger"
    } else {
        return "fa fa-heart"
    }
}

const TuitItem = (
    {
        Tuit = {
            "_id": 1,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "../../images/spacex.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 1,
            "likes": 6,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <div className="row border py-2">
            <div className="col-1 px-1">
                <img className="rounded-circle" height="40px" src={Tuit.image} />
            </div>
            <div className="col-11">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(Tuit._id)}></i>
                <span className="h6 fw-bold">{Tuit.username} <i className="fa fa-check-circle"></i> <span className="text-secondary"> @{Tuit.userName} - {Tuit.time}</span></span><br></br>
                <span>{Tuit.tuit}</span><br></br>
                <div className="col">
                    <span className="col-4 pe-4"><i className="fa fa-comment"></i><span> {Tuit.replies}</span></span>
                    <span className="col-4 pe-4"><i className="fa fa-retweet"></i><span className="col-4"> {Tuit.retuits}</span></span>
                    <span className="col-4 pe-4"><i className={Liked(Tuit.liked)}></i><span className="col-4"> {Tuit.likes}</span></span>
                    <i className="fa fa-share"></i>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;