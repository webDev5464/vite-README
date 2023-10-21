import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'UseState'}>useState</NavLink></li>
        <li><NavLink to={'UseEffect'}>useEffect</NavLink></li>
        <li><NavLink to={'UseRef'}>useRef</NavLink></li>
      </ul>
    </nav>
  )
}
