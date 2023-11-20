import { 
Card, 
GridItem, 
Grid, 
CardBody, 
CardFooter,
Container,
Stack, 
Select } from "@chakra-ui/react";
import male from "./assets/male.jpg"
import female from "./assets/female.jpg" 
import PropTypes from "prop-types"
// import { useState } from "react";
// import data from "../data/data";

const Employees = (
    {team, HandleEmployeeToggle,HandleTeamSelection, employees }
    ) => {

    // const [employees, setEmployees] = useState(data)
    // const [team, setTeam] = useState("Team C")

    // const HandleTeamSelection = e => {
    //     setTeam(e.target.value)
    // }

    // const HandleEmployeeToggle = (e) => {
    //     const transformedEmployee = employees.map(employee => (employee.id === parseInt(e.currentTarget.id)) 
    //         ?(employee.team === team? {...employee, team: ""}: {...employee, team: team})
    //         : employee)

    //     setEmployees(transformedEmployee)
    //     // console.log(transformedEmployee)
    // }

    
    return ( 
        <main>
            <Container>
                <Select placeholder="Select Team" onChange={HandleTeamSelection} value={team}>
                    <option value={"Team A"}>Team A</option>
                    <option value={"Team B"}>Team B</option>
                    <option value={"Team C"}>Team C</option>
                </Select>
            </Container>
            <Grid 
            gridTemplateColumns={"1fr 1fr 1fr"}
            maxW={"800px"} margin={"0 auto"}>
            {employees.map(employee => (
                <GridItem 
                key={employee.id} 
                margin={"10px"}
                className={employee.team === team? "bordered employee-card": "employee-card"}
                id={employee.id} onClick={HandleEmployeeToggle}>
                    <Card>
                        <CardBody>
                            
                            {
                                <img 
                                    src={(employee.gender === "male") ? male : female} 
                                    width={"80%"} style={{margin: "0 auto"}}
                                    alt="avatar image"
                                />
                            }
                            
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <p>Name: {employee.fullName}</p>
                                <p>Track: {employee.role}</p>
                                <p>Team: {employee.team}</p>
                            </Stack>
                        </CardFooter>
                    </Card>
                </GridItem>
            ))}
            </Grid>
        </main>
     );
}

Employees.propTypes = {
    employees: PropTypes.object.isRequired,
    HandleEmployeeToggle: PropTypes.any.isRequired,
    HandleTeamSelection: PropTypes.func.isRequired,
    team: PropTypes.object.isRequired,
    
  }
 
export default Employees;