import React from "react";
import "./Post.css";
import Form from './Form.jsx'

const Post = ({ post, switchToPost }) => {
  return (
    <>
      <article className="post">
        <button className="prev" onClick={() => switchToPost(null)}>Retour au blog</button>
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
      <h3>Commentaires :</h3>
      <Form />
    </>
  );
};

export default Post;
