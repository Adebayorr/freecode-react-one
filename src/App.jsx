import Employees from "./Employees"
import Footer from "./Footer"
import Header from "./Header"
import { ChakraProvider } from "@chakra-ui/react"
// import data from "../data/data";
import { useState } from "react";

function App() {
  const [selectedTeam, setTeam] = useState("Team A")
    const [employees, setEmployees] = useState(
         [
            {
                fullName: "Ibrahim Adedokun",
                role: "Fullstack Developer",
                gender: "male",
                team: "Team A",
                id: 1
            },
            {
                fullName: "Boluwatife Adeyeye",
                role: "Front-End Developer",
                gender: "male",
                team: "Team B",
                id: 2
            },
            {
                fullName: "Timothy Adeyeye",
                role: "Back-End Developer",
                gender: "male",
                team: "Team C",
                id: 3
            },
            {
                fullName: "Fatai Raheem ",
                role: "Front-End Developer",
                gender: "male",
                team: "Team D",
                id: 4
            },
            {
                fullName: "Selimot Adunola",
                role: "UI/UX Designer",
                gender: "female",
                team: "Team B",
                id: 5
            },
            {
                fullName: "John Schmidt",
                role: "Front-End Developer",
                gender: "male",
                team: "Team A",
                id: 6
            },
            {
                fullName: "Arya Duncan ",
                role: "Front-End Developer",
                gender: "female",
                team: "Team D",
                id: 7
            },
            {
                fullName: "Riri Hadid",
                role: "Back-End Dveloper",
                gender: "female",
                team: "Team B",
                id: 8
            },
            {
                fullName: "Anthon Bolo",
                role: "UI/UX Designer",
                gender: "male",
                team: "Team A",
                id: 9
            } 
        ]
    ) 

    const handleTeamSelection  = (e) => {
        setTeam(e.target.value)
        console.log(e.target.value)
    }
    const handleEmployeeCardClick = (e) => {
        
        const transformedEmployees = employees.map(employee => employee.id === parseInt(e.currentTarget.id)?
            (employee.team === selectedTeam)? {...employee, team: ""} : {...employee, team: selectedTeam }
        : employee)

        setEmployees(transformedEmployees)
    }

  return (
    <ChakraProvider>
      <Header selectedTeam={selectedTeam} selectedTeamCount={employees.filter(employee => employee.team === selectedTeam).length}/>
      <Employees employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} handleTeamSelection={handleTeamSelection}/>
      <Footer />
    </ChakraProvider>
  )
}

export default App
