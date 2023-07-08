import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
      </Link>
    </article>
  );
};

export default Post;
