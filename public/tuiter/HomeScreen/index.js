import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "./PostList/PostList.js";

function exploreComponent() {
    $('#wd-explore').append(`
   <div class="row mt-2">
   <div class="col-lg-2 col-1 ps-4">
    ${NavigationSidebar('home')}   </div>
   <div class="col-lg-6 col-11">
    ${PostList()}
   </div>
   <div class="col-lg-4 d-none d-lg-block">
    <div class="container">
    ${PostSummaryList()}
   </div>

   
   
   </div>
   </div>
   </div>

   `);
}

$(exploreComponent);