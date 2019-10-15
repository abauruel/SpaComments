import React, { useState } from "react";
import "./styles.css";
export default function Post({ post }) {
  return (
    <>
      <div className="contentPosts" key={post.id}>
        <div className="containerPostsignature">
          <div className="containerAvatar">
            <img src={post.author.avatar} alt="avatar" />
          </div>
          <div className="containerAuthor">
            <header>
              <strong>{post.author.name}</strong>
            </header>
            <small>{post.date}</small>
          </div>
        </div>
        <p>{post.content}</p>
        {post.comments && <hr />}
        {post.comments.map(comments => (
          <div className="comments" key={comments.id}>
            <img src={comments.author.avatar} alt="avatar" />
            <p>
              <strong>{comments.author.name}: </strong>
              {comments.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
