import './App.css';
import Content from './Component/Content';
import Header from './Component/Header.jsx';
import Sidebar from './Component/Sidebar.jsx';



const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Sidebar />
      <Content />
    </div>
  )
}



export default App;