const NavigationSidebar = (active) => {
    function set_color(row) {
        if (row === active) {
            return `bg-primary`
        } else {
            return `bg-light`
        }
    }


    let s;
    s = `<div class="col ps-4">
    <div class="row py-2 bg-light rounded-top">
      <span>T</span>
    </div>
    <div id="home" class="row py-2 `

    s+= set_color('home')

    s+=`">
      <div class="col-1">
        <i class="fa fa-home" style="color: white"></i>
      </div>
      <a href="../HomeScreen/index.html" class="text-dark text-decoration-none col d-none d-lg-block">
        <span>Home</span>
      </a>
    </div>
    <div class="row py-2 `

    s+= set_color('explore')

    s+= `">
      <div class="col-1">
        <i class="fa fa-hashtag" style="color: white"></i>
      </div>
      <a href="../explore/index.html" class="text-dark text-decoration-none col d-none d-lg-block">
        Explore
      </a>
    </div>
    <div class="row py-2 `

    s+= set_color('notifications')

    s+= `">
      <div class="col-1">
        <i class="fa fa-bell" style="color: white"></i>
      </div>
      <div class="col d-none d-lg-block">
        Notifications
      </div>
    </div>
    <div class="row py-2 `

    s+= set_color('messages')

    s+= `">
      <div class="col-1">
        <i class="fa fa-envelope" style="color: white"></i>
      </div>
      <div class="col d-none d-lg-block">
        Messages
      </div>
    </div>
    <div class="row py-2 `

    s+= set_color('bookmarks')

    s+= `">
      <div class="col-1">
        <i class="fa fa-bookmark" style="color: white"></i>
      </div>
      <div class="col d-none d-lg-block">
        Bookmarks
      </div>
    </div>
    <div class="row py-2 `

    s+= set_color('lists')

    s+= `">
      <div class="col-1">
        <i class="fa fa-list" style="color: white"></i>
      </div>
      <div class="col d-none d-lg-block">
        Lists
      </div>
    </div>
    <div class="row py-2 `

    s+= set_color('profile')

    s+= `">
      <div class="col-1">
        <i class="fa fa-user" style="color: white"></i>
      </div>
      <div class="col d-none d-lg-block">
        Profile
      </div>
    </div>
    <div class="row py-2 rounded-bottom `

    s+= set_color('more')

    s+= `">
      <div class="col-1">
        <i class="fa fa-ellipsis-h" style="color: white"></i>
      </div>
      <div class="col d-none d-lg-block">
        More
      </div>
    </div>
    <div class="row py-2">
      <button class="rounded-pill bg-primary text-white text-start text-lg-center border-0" href="#"> Tuit</button>
    </div>
  </div>`

    return(s)
}

export default NavigationSidebar;