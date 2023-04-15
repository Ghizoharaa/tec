import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Nabar/Navbar";
import GlobleStyle from "./golobalStyle";
import  Intro from "./Components/LandingPage/intro/Intro"
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import BasicModal from "./Components/login/BasicModal";
import SignIn from "./Components/login/Login";
import SignUp from "./Components/login/SignUp";
import styled from "styled-components";
import Contact from "./Components/contact/Contact";

function App() {
  
  const [click, setClick] =useState(false)
  const [open, setOpen] = useState(false);
  const [SignInFirst, setSignInFirst] =useState(false);
  const [dark, setDark] =useState(true);
  return (
    
    <BrowserRouter>
    <ConatinerApp dark={dark}>
     <GlobleStyle/>
     <Navbar dark={dark} setDark={setDark} open={open} setOpen={setOpen} click={click} setClick={setClick}/>
     <BasicModal open={open} setClick={setClick}   setOpen={setOpen} >
        {
          SignInFirst  ? <SignUp setSignInFirst={setSignInFirst}/> :<SignIn  setSignInFirst={setSignInFirst}/>
        }
       </BasicModal>
     <Intro dark={dark}/>
      <About id="about" dark={dark}/>
     <Services/>
   
     <Contact/>
     <Footer/>
     </ConatinerApp>
    </BrowserRouter>
           
  );
}

export default App;




const ConatinerApp=styled.div`
background-color:${({dark})=>dark ? "#000e12 " :"white"};

`