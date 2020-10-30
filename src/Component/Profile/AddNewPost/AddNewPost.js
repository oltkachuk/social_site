import s from './../Profile.module.css';
import Post from './Post/Post';
import React from 'react';

const AddNewPost = (props) => {
    
  
  let textRef = React.createRef()
  
  const add = () => { 
    props.addPost()
  }

  const changeText = () => {
    let text = textRef.current.value
    props.updateTextPost(text)
  }



  const postItem = props.profilePage.postData
    .map( post => <Post messege={post.messege} countLike={post.countLike} />)
  
  return (
    <div>
      <div className={ s.addPost }>
        <textarea ref = { textRef } onChange = { changeText } value = { props.profilePage.currentTextPost } ></textarea>
        <button onClick = { add } >Add new post</button>
      </div>
      <div>
        { postItem }
      </div>
    </div>
  );
}

export default AddNewPost;