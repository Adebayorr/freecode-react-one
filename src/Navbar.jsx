import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/GroupedTeamMembers"}>Teams</NavLink>
        </nav>
     );
}
 
export default Navbar;