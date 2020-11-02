import { connect } from 'react-redux';
import { AddMessegeActionCreater, UpdateTextMessegeActionCreater } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';



const mapStateToProps = (state) => {
    return {
        dialogsUser: state.dialogsPage.dialogsData,
        messeges: state.dialogsPage.messegesData,
        currentText: state.dialogsPage.currentTextMessege
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(UpdateTextMessegeActionCreater(text))
        },
        sendMessege: () => {
            dispatch(AddMessegeActionCreater())
        }
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer;