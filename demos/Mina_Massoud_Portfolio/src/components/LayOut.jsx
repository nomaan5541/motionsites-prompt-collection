import { Outlet } from "react-router-dom"
import Header from "./Header"
export default function layout() {
 return (
  <>
 <Header/>
 <Outlet />
 </>
 )
}