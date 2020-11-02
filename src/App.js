import './App.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Profile from './Component/Profile/Profile';
import Dialogs from './Component/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';




const App = (props ) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Sidebar sidebarPage = { props.state.sidebarPage } />
        <div className='wrapper-content'>
          <Route path='/profile' render={ () => <Profile 
            profilePage = { props.state.profilePage } 
            store = { props.store }
          />} 
        />
          <Route path='/dialogs' render={ () => <Dialogs 
            dialogsPage = { props.state.dialogsPage }
            store = { props.store }
          /> } 
        /> 
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;