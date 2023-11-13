import Employees from "./Employees"
import Footer from "./Footer"
import Header from "./Header"
import { ChakraProvider } from "@chakra-ui/react"

function App() {


  return (
    <ChakraProvider>
      <Header />
      <Employees />
      <Footer />
    </ChakraProvider>
  )
}

export default App
