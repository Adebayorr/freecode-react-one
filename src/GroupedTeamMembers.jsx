import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types"
import { useState } from "react";

const GroupedTeamMembers = ({employees, setTeam, selectedTeam}) => {

    

    const groupTeamMembers = () => {
        let teams = []
        let teamAMembers = employees.filter(employee => employee.team === "Team A")
        let teamA = {team: "Team A", members: teamAMembers, collapsed: selectedTeam === "Team A" ? false: true }
        teams.push(teamA)

        let teamBMembers = employees.filter(employee => employee.team === "Team B")
        let teamB = {team: "Team B", members: teamBMembers, collapsed: selectedTeam === "Team B" ? false: true }
        teams.push(teamB)

        let teamCMembers = employees.filter(employee => employee.team === "Team C")
        let teamC = {team: "Team C", members: teamCMembers, collapsed: selectedTeam === "Team C" ? false: true }
        teams.push(teamC)

        let teamDMembers = employees.filter(employee => employee.team === "Team D")
        let teamD = {team: "Team D", members: teamDMembers, collapsed: selectedTeam === "Team D" ? false: true }
        teams.push(teamD)

        return teams
    }
    const  [groupedTeam, setGroupedTeam] = useState(groupTeamMembers())
    const handleGroupClick = e => {
        console.log(e.currentTarget.id)
    }
    return ( 
        <Flex flexDirection={"column"}>
            {groupedTeam.map(gt => (
                <div key={gt.team} className="team_wrapper" id={gt.team} onClick={handleGroupClick}>
                    <h2>{gt.team}</h2>
                    {console.log(gt.members)}
                    {gt.members.map(member => (
                        <div key={member.id} className="teamMember_info">
                            <h4>{member.fullName}</h4>
                            <p>Role: {member.role}</p>
                        </div>
                    ))}
                </div>
            ))}
        </Flex>
     );
}
 
export default GroupedTeamMembers;

GroupedTeamMembers.propTypes = {
    employees: PropTypes.object.isRequired,
    setTeam: PropTypes.func.isRequired,
    selectedTeam: PropTypes.string.isRequired
}