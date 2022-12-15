import { Link } from "react-router-dom";
import classes from "./Mainnavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>

          <li>
            <Link to="/newmeet">newmeet</Link>
          </li>
          <li>
            <Link to="/faviourites">faviourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
