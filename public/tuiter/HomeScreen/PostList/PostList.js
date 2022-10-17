import PostItem from "./PostItem.js";
import Post from "./Post.js";

const PostList = () => {
    return(`
      <ul>
         ${
        Post.map(Post => {
            return(PostItem(Post));
        }).join('')
    }
      </ul>
   `);
}
export default PostList;