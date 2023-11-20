import Employees from "./Employees"
import Footer from "./Footer"
import Header from "./Header"
import { ChakraProvider } from "@chakra-ui/react"
import data from "../data/data";
import { useState } from "react";

function App() {

  const [employees, setEmployees] = useState(data)
  const [team, setTeam] = useState("Team C")

  const HandleTeamSelection = e => {
      setTeam(e.target.value)
  }

  const HandleEmployeeToggle = (e) => {
      const transformedEmployee = employees.map(employee => (employee.id === parseInt(e.currentTarget.id)) 
          ?(employee.team === team? {...employee, team: ""}: {...employee, team: team})
          : employee)

      setEmployees(transformedEmployee)
      // console.log(transformedEmployee)
  }
  return (
    <ChakraProvider>
      <Header />
      <Employees 
        employees={data}
        HandleEmployeeToggle={HandleEmployeeToggle}
        HandleTeamSelection={HandleTeamSelection}
        team={team}
        setTeam={setTeam}
      />
      <Footer />
    </ChakraProvider>
  )
}

export default App
