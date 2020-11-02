import s from "./../Profile.module.css";
import Post from "./Post/Post";
import React from "react";

const AddNewPost = (props) => {
  const onAddPost = () => {
    props.addPost();
  };
  const onChangeText = (e) => {
    let text = e.target.value;
    props.changeText(text);
  };
  const postItem = props.posts.map((post) => (
    <Post messege={post.messege} countLike={post.countLike} />
  ));

  return (
    <div>
      <div className={s.addPost}>
        <textarea onChange={onChangeText} value={props.currentText} />
        <button onClick={onAddPost}>Add new post</button>
      </div>
      <div>{postItem}</div>
    </div>
  );
};

export default AddNewPost;
