import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header"
import PropTypes from "prop-types"

const RootLayer = ({selectedTeam, employees}) => {
    return ( 
        <>
        <Header selectedTeam={selectedTeam} selectedTeamCount={employees.map(employee => employee.team === selectedTeam).length}/>
        <Outlet />
        <Footer />
        </>
     );
}
 
export default RootLayer;

RootLayer.propTypes = {
    selectedTeam: PropTypes.string.isRequired,
    employees: PropTypes.number.isRequired
}