import {  
  NavLink
} from "react-router-dom";
import style from './Buttons.module.css';
export default function Buttons() {
    return (
        <>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li>
              <NavLink className={style.link} activeClassName={style.linkFocused} exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={style.link} activeClassName={style.linkFocused} to="/movies">MoviesPage</NavLink>
            </li>              
          </ul>
            </nav>
            </>
    )
}