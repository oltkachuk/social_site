import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';


const Sidebar = () => {
    return (
      <div>
        <nav className={ s.sidebar }>
          <div className={ s.item }>
            <NavLink to='/profile' activeClassName={ s.activeLink }>Profile</NavLink>
          </div>
          <div className={ s.item }>
            <NavLink to='/dialogs' activeClassName={ s.activeLink }>Messeges</NavLink>
          </div>
          <div className={ s.item }>
            <a href='#s'>News</a>
          </div>
          <div className={ s.item }>
            <a href='#s'>Music</a>
          </div>
          <div className={ s.item }>
            <a href='#s'>Settings</a>
          </div>
        </nav>
      </div>
    )
}

export default Sidebar;