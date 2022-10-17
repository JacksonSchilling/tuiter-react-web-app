const PostSummaryItem = (post) => {
    return(`
    <div class="row m-0 bg-light border-bottom border-secondary py-2">
      <div class="col ps-3">
        <span class="small text-secondary">${post.topic}</span><br>
        <span class="h6 fw-bold">${post.userName} <i class="fa fa-check-circle"></i> <span class="text-secondary"> - ${post.time}</span></span><br>
        <span class="fw-bold text-white">${post.title}</span><br>
        <span class="small text-secondary">${post.tweets}</span><br>
      </div>
      <div class="col">
        <img class="rounded" src=${post.image} height="120px" width="120px">
      </div>
    </div>`
    );
}
export default PostSummaryItem;