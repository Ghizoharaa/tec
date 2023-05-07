import { useState, } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nabar/Navbar";
import GlobleStyle, { Container } from "./golobalStyle";
import  Intro from "./Components/LandingPage/intro/Intro"
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import BasicModal from "./Components/login/BasicModal";
import SignIn from "./Components/login/Login";
import SignUp from "./Components/login/SignUp";
import styled from "styled-components";
import Contact from "./Components/contact/Contact";
import Servicespage from "./pages/Servicespage";
import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/Homepage";
import { Profile } from "./Components/Profile/Profile";
import { useAuth } from "./hook/useAuth";
import { useTheme } from "./hook/useTheme";
import LayoutC from "./dasborad/Dashbord/Layout/LayoutC";
import DashboredContent from "./dasborad/Dashbord/DashboredContent";


function App() {
  
  const [click, setClick] =useState(false)
  const [open, setOpen] = useState(false);
  const [SignInFirst, setSignInFirst] =useState(false);

  
const {user}=useAuth()
const {theme}=useTheme()
  // useEffect(()=>{
  //    const fetchData=async()=>{

  //     await fetch("http://localhost:4040/api/items/all").then((res)=>res.json()).then((data)=>console.log(data))
  //    }

  //    fetchData()
  // },[])
// console.log(user?.role);
if (

   user?.role=="admin" 
) {
  return <LayoutC children={<DashboredContent/>}/>
}
  return (
    
   
    <ConatinerApp theme={theme} click={click}>
   
     <Navbar open={open} setOpen={setOpen} click={click} setClick={setClick}/>
     <BasicModal open={open} setClick={setClick}   setOpen={setOpen} >
      
      
        {
          SignInFirst && !user  ? <SignUp setSignInFirst={setSignInFirst}/> :<SignIn  setSignInFirst={setSignInFirst}/>
        }

      

       </BasicModal>
       <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Servicespage />} />
         <Route path="/profile" element={user  ?  <Profile />: <Navigate to="/"/>} />
         {/* <Route path="/login" element={  <BasicModal open={open} setClick={setClick}   setOpen={setOpen} >
                 hello
        
      

       </BasicModal>} /> */}

         
      </Routes>
   
      
      
    <Footer/>
    
 

    
    </ConatinerApp>
           
  );
}

export default App;




const ConatinerApp=styled.div`
padding:0;
margin-top:0;
background-color:${({theme})=>theme=="dark" ? "#000e12 " :"white"};




`