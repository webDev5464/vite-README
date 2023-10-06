import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"About"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"Service"}>Service</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
