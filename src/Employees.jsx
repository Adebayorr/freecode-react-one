import { Card, CardBody, CardFooter, SimpleGrid, Select, Flex } from "@chakra-ui/react";
import male from "./assets/male.jpg"
import female from "./assets/female.jpg" 
import PropTypes from "prop-types"
// import { useState } from "react";
// import data from "../data/data";

const Employees = ({handleEmployeeCardClick, handleTeamSelection, selectedTeam, employees}) => {
    
    return (
        <main>
            <Select width={"60%"} margin={"0 auto"} value={selectedTeam} onChange={handleTeamSelection}>
                <option value="Team A">Team A</option>
                <option value="Team B">Team B</option>
                <option value="Team C">Team C</option>
                <option value="Team D">Team D</option>
            </Select>
            <SimpleGrid width={"60%"} spacing={10} margin={"20px auto"} columns={3} minW={"800px"} >
            {employees.map(employee => (
                    <Card key={employee.id} onClick={handleEmployeeCardClick} id={employee.id} 
                    boxShadow={employee.team === selectedTeam?"#00000084 0px 1px 4px,#00000084 0 1px 4px": "#00000054 0 1px 1.5px"}>
                        <CardBody>
                            <img src={employee.gender === "male" ? male : female} alt="" />
                        </CardBody>
                        <CardFooter>
                            <Flex className="employee-flex" flexDirection={"column"} alignItems={"flex-start"}>
                                <h4>Name: { employee.fullName }</h4>
                                <p>Role: { employee.role }</p>
                                <p>Team { employee.team }</p>
                            </Flex>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </main>
    )
}

Employees.propTypes = {
    employees: PropTypes.array.isRequired,
    handleEmployeeCardClick: PropTypes.func.isRequired,
    handleTeamSelection: PropTypes.string.isRequired,
    selectedTeam: PropTypes.string.isRequired,
    
  }
 
export default Employees;