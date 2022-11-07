import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

function Liked(bool) {
    if(bool) {
        return "fa fa-heart text-danger"
    } else {
        return "fa fa-heart"
    }
}

const TuitStats = (
    {
        Tuit = {
            "_id": 13,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "../../images/spacex.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return(
        <div className="col">
            <span className="col-4 pe-4"><i className="fa fa-comment"></i><span> {Tuit.replies}</span></span>
            <span className="col-4 pe-4"><i className="fa fa-retweet"></i><span className="col-4"> {Tuit.retuits}</span></span>
            <span className="col-4 pe-4"><i className={Liked(Tuit.liked)}></i><span className="col-4"> {Tuit.likes}</span></span>
            <i className="fa fa-share"></i>
        </div>
    );
};
export default TuitStats;

