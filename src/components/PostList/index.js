import React, { useState } from "react";
import "./styles.css";
import Post from "../Post";
export default function PostList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "Julio Alcantara",
        avatar: "https://avatars0.githubusercontent.com/u/6122218?v=4"
      },
      date: "04 Jun 2019",
      content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
          },
          content: "Conteúdo do comentário"
        },
        {
          id: 2,
          author: {
            name: "Diego Fernandes",
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
          },
          content: "Conteúdo do comentário"
        }
      ]
    },
    {
      id: 2,
      author: {
        name: "Julio Alcantara",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
      },
      date: "05 Jun 2019",
      content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
      comments: [
        {
          id: 1,
          author: {
            name: "Diego Fernandes",
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
          },
          content: "Conteúdo do comentário"
        },
        {
          id: 2,
          author: {
            name: "Diego Fernandes",
            avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
          },
          content: "Conteúdo do comentário"
        }
      ]
    }
  ]);
  console.log(posts.map(c => c.author.name));
  return (
    <>
      {posts.map(post => (
        <div className="containerPostList" key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </>
  );
}
