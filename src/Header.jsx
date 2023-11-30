import PropTypes  from "prop-types";
const Header = ({selectedTeam, selectedTeamCount}) => {
    return ( 
        <header>
            <p>{selectedTeam} has {selectedTeamCount} members</p>
        </header>
     );
}
 
export default Header;

Header.propTypes = {
    selectedTeam: PropTypes.string.isRequired,
    selectedTeamCount : PropTypes.number.isRequired
}