import React from "react";
import NavigationSidebar from "../navigation-sidebar/index.js";
import PostSummaryList from "../post-summary-list/index.js";
import PostList from "./PostList/PostList.js";

const homeScreen = () => {
    return(
        <div className="row">
            <div className="col">
                <PostList/>
            </div>
        </div>
   );
}
export default homeScreen;