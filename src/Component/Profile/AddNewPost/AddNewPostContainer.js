import React from "react";
import {
  AddPostActionCreater,
  UpdateTextPostActionCreater,
} from "../../../Redux/profileReducer";
import AddNewPost from "./AddNewPost";

const AddNewPostContainer = (props) => {
  const addPost = () => {
    props.store.dispatch(AddPostActionCreater());
  };

  const changeText = (text) => {
    props.store.dispatch(UpdateTextPostActionCreater(text));
  };

  return (
    <AddNewPost
      addPost={addPost}
      changeText={changeText}
      posts={props.profilePage.postData}
      currentText={props.profilePage.currentTextPost}
    />
  );
};

export default AddNewPostContainer;
