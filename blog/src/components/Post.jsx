import React from "react";
import "./Post.css";

const Post = ({ post, switchToPost }) => {
  return (
    <>
      <article className="post">
        <button onClick={() => switchToPost(null)}>Retour au blog</button>
        <header>
          <figure>
            <img src={post.image} alt={post.title} />
          </figure>
          <h1>{post.title}</h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.content }} />
        <footer>
          <article>
            <img
              src={post.profileImageURL}
              alt={`Image de profil de ${post.expert}`}
            />
            <p>par {post.expert}</p>
          </article>
        </footer>
      </article>
    </>
  );
};

export default Post;
