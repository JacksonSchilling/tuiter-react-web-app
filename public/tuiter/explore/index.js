import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
   <div class="row mt-2">
   <div class="col-lg-2 col-1 ps-4">
    ${NavigationSidebar('explore')}   </div>
   <div class="col-lg-6 col-11">
    ${ExploreComponent()}
   </div>
   <div class="col-lg-4 d-none d-lg-block">
    <div class="container">
     ${WhoToFollowList()}
   </div>

   
   
   </div>
   </div>
   </div>

   `);
}

$(exploreComponent);