import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row ms-3">
          <div class="col-10">
            <input class="rounded-pill col-10 bg-white border-0 text-black"
                   placeholder="Search Tuiter"
                   type="text">
          </div>
          <div class="col-2">
            <i class="fa fa-cog align-top"
               style="color: #57a1d1; font-size: 1.5em">
            </i>
          </div>
        </div>
        
        <ul class="nav nav-stacked py-1 ms-4">
      <li class="nav-item">
        <a class="nav-link text-white bg-primary" href="../for-you.html">For You</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="../trending.html">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="../news.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="../sports.html">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="../entertainment.html">Entertainment</a>
      </li>
        </ul>
        
        <div class="card pb-2 bg-black ms-4">
      <img class="card-img-top" src=
              "images/starship.webp">

      <div class="card-img-overlay card-inverse d-flex flex-column justify-content-end align-bottom p-0">
        <h4 class="text-stroke text-white">
          SpaceX's Starship
        </h4>
      </div>
    </div>
    
    
        ${PostSummaryList()}
    `);

}
export default ExploreComponent;