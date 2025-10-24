import { Outlet } from "react-router-dom"
import Header from "./CustomeComponents/Header"
import Footer from "./CustomeComponents/Footer"

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
