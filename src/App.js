import './App.css';
import Header from './Component/Header/Header';
import Profile from './Component/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './Component/Dialogs/DialogsConteiner';
import SidebarContainer from './Component/Sidebar/SidebarContainer';




const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <SidebarContainer />
        <div className='wrapper-content'>
          <Route path='/profile' render={ () => <Profile />} 
        />
          <Route path='/dialogs' render={ () => <DialogsContainer /> } 
        /> 
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;