import {  
  Link
} from "react-router-dom";

export default function Buttons() {
    return (
        <>
        <nav>
          <ul>
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