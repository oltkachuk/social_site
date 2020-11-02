import { connect } from "react-redux";
import {
  AddPostActionCreater,
  UpdateTextPostActionCreater,
} from "../../../Redux/profileReducer";
import AddNewPost from "./AddNewPost";

// const AddNewPostContainer = (props) => {
//   const addPost = () => {
//     props.store.dispatch(AddPostActionCreater());
//   };

//   const changeText = (text) => {
//     props.store.dispatch(UpdateTextPostActionCreater(text));
//   };

//   return (
//     <AddNewPost
//       addPost={addPost}
//       changeText={changeText}
//       posts={props.profilePage.postData}
//       currentText={props.profilePage.currentTextPost}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    currentText: state.profilePage.currentTextPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      let action = AddPostActionCreater()
      dispatch(action)
    },
    changeText: (text) => {
      dispatch(UpdateTextPostActionCreater(text))
    }
  }
}

const AddNewPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewPost)

export default AddNewPostContainer;
