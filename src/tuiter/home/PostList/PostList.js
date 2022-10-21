import React from "react";
import PostItem from "./PostItem.js";
import PostsArray from "./Post.json"

const PostList = () => {
    return(
        <ul className="list-group">
            {
                PostsArray.map(Post =>
                    <PostItem
                        key={Post._id} Post={Post}/> )
            }
        </ul>
    );
};
export default PostList;