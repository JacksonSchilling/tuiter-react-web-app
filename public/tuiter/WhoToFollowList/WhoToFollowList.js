import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
      <ul>
            <div class="row border-bottom border-secondary bg-light rounded-top py-2 text-white">
            <span class="fw-bold">Who to Follow</span>
            </div>
         ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
      </ul>
   `);
}
export default WhoToFollowList;