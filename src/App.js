import './App.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Profile from './Component/Profile/Profile';
import Dialogs from './Component/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='wrapper-content'>
          <Route path='/profile' component={ Profile } />
          <Route path='/dialogs' component={ Dialogs } /> 
        </div>
      </div>
    </BrowserRouter>
  )
}



export default App;