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
function App() {
  
  const [click, setClick] =useState(false)
  const [open, setOpen] = useState(false);
  const [SignInFirst, setSignInFirst] =useState(false);
  const [dark, setDark] =useState(false);
  return (
    <BrowserRouter>
     <GlobleStyle/>
     <Navbar dark={dark} setDark={setDark} open={open} setOpen={setOpen} click={click} setClick={setClick}/>
     <BasicModal open={open}   setOpen={setOpen} >
        {
          SignInFirst  ? <SignUp setSignInFirst={setSignInFirst}/> :<SignIn  setSignInFirst={setSignInFirst}/>
        }
       </BasicModal>
      <Intro/>
      <About/>
     <Services/>
     <Footer/>
    </BrowserRouter>
           
  );
}

export default App;
