const WhoToFollowListItem = (who) => {
    return(`
    <div class="row border-bottom border-secondary bg-light py-2">
      <div class="col-2">
        <img class="rounded-circle" src=${who.avatarIcon} height="40px" width="40px">
      </div>
      <div class="col-4 col-xl-6">
        <span class="h6 fw-bold">${who.userName} <i class="fa fa-check-circle"></i></span><br>
        <span class="small text-white border-dark">@${who.handle}</span><br>
      </div>
      <div class="col pt-2">
        <button class="rounded-pill bg-primary btn-sm text-white border-0" href="#"> Follow</button>
      </div>
    </div>`
    );
}
export default WhoToFollowListItem;