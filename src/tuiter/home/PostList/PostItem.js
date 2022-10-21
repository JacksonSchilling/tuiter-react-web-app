import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
const PostItem = (
    {
        Post = {
            "_id": "1",
            "avatar": "images/musk.jpg",
            "author": "Elon Musk",
            "userName": "elonmusk",
            "time": "23h",
            "body": "I love space!",
            "image": "images/space.jpg",
            "link_title": "Countdown: Inspiration4 Mission to Space",
            "link_body": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all- civilian orbital space...",
            "replies": "4.2k",
            "retweets": "3.5k",
            "likes": "37.5k"
        }
    }
) => {
    return(
        <div className="row">
            <div className="col-1">
                <img className="rounded-circle" height="40px" src={Post.avatar} />
            </div>
            <div className="col-11">
                <span className="h6 fw-bold">{Post.author} <i className="fa fa-check-circle"></i> <span className="text-secondary"> @{Post.userName} - {Post.time}</span></span><br></br>
                <span>{Post.body}</span><br></br>
                <img className="border border-light rounded-top py-2" height="300px" width="413px" src={Post.image}/><br></br>
                <div className="border border-light rounded-bottom col-11">
                    <span className="h6">{Post.link_title}</span><br></br>
                    <span className="text-secondary">{Post.link_body}</span>
                </div>
                <div className="col">
                    <i className="fa fa-comment"></i><span className="col-4"> {Post.replies}</span>
                    <i className="fa fa-retweet"></i><span className="col-4"> {Post.retweets}</span>
                    <i className="fa fa-heart"></i><span className="col-4"> {Post.likes}</span>
                    <i className="fa fa-share"></i>

                </div>
                <hr></hr>
            </div>
        </div>
    );
};
export default PostItem;

