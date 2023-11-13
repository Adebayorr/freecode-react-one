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
import data from "../data/data";
import { useState } from "react";

const Employees = () => {
    const [employees, setEmployees] = useState(data)
    return ( 
        <main>
            <Container>
                <Select placeholder="Select Team">
                    <option value={"teamA"}>Team A</option>
                    <option value={"teamB"}>Team B</option>
                    <option value={"teamC"}>Team C</option>
                </Select>
            </Container>
            <Grid 
            gridTemplateColumns={"1fr 1fr 1fr"}
            maxW={"1000px"} margin={"0 auto"}>
            {employees.map(employee => (
                <GridItem 
                className="employee-card" key={employee.id} 
                margin={"10px"}>
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
 
export default Employees;