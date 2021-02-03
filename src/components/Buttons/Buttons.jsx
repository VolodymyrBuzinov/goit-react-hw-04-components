import {  
  Link
} from "react-router-dom";
import style from './Buttons.module.css';
export default function Buttons() {
    return (
        <>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">MoviesPage</Link>
            </li>              
          </ul>
            </nav>
            </>
    )
}