import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header"
import PropTypes from "prop-types"
import Navbar from "./Navbar";

const RootLayer = ({selectedTeam, employees}) => {
    return ( 
        <>
        <Navbar />
        <Header selectedTeam={selectedTeam} selectedTeamCount={employees.filter(employee => employee.team === selectedTeam).length}/>
        <Outlet />
        <Footer />
        </>
     );
}
 
export default RootLayer;

RootLayer.propTypes = {
    selectedTeam: PropTypes.string.isRequired,
    employees: PropTypes.array.isRequired
}