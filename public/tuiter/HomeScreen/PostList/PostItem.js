const PostItem = (Post) => {
    return(`
    <div class="row">
        <div class="col-1">
            <img class="rounded-circle" height="40px" src=${Post.avatar}>
       
        </div>
        
        <div class="col-11">
            <span class="h6 fw-bold">${Post.author} <i class="fa fa-check-circle"></i> <span class="text-secondary"> @${Post.userName} - ${Post.time}</span></span><br>
            <span class="text-white">${Post.body}</span><br>
            <img class="border border-light rounded-top py-2" height="300px" width="413px" src=${Post.image}><br>
            <div class="border border-light rounded-bottom col-11">
                <span class="h6 text-white">${Post.link_title}</span><br>
                <span class="text-secondary">${Post.link_body}</span>
            </div>
            <div>
            <div class="col">                
                <i class="fa fa-comment"></i><span class="col-4"> ${Post.replies}</span>
                <i class="fa fa-retweet"></i><span class="col-4"> ${Post.retweets}</span>
                <i class="fa fa-heart"></i><span class="col-4"> ${Post.likes}</span>
                <i class="fa fa-share"></i>

            </div>
            <hr>
            
            
            
            
            
            

            
        
        </div>
    </div>
    `
    );
}
export default PostItem;