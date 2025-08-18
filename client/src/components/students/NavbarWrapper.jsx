import Navbar from "./Navbar"
import { useMatch } from "react-router-dom"
  const NavbarWrapper=()=>{
     const isEducatorRoute=useMatch("/educator/*")
     return !isEducatorRoute? <Navbar/> : null
  }

export default NavbarWrapper