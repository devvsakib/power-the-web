import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./aboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./homePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"

export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar/>
            <hr/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                {/* <Route path="/*" element={<LoginPage/>}/> */}
                <Route path="/*" element={<Navigate to="/about"/>}/>
            </Routes>
        </UserProvider>
    )
}
