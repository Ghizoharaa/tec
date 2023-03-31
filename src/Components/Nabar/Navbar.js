import React from 'react';
import { TbMenu } from 'react-icons/tb';
import  {MdLightMode,MdNightlight} from "react-icons/md";
import  {IoMdClose} from "react-icons/io";
import { IconContext } from 'react-icons/lib';
import { 
  Nav, NavContainer, NavLogo, MobileIcon,NavItem,Navlinks,NavMenu

} from './style';
import { Button, Tooltip } from '@mui/material';




function Navbar({click,setClick,setOpen,dark,setDark}) {
  const handelClick=()=>setClick(!click);
  return (
    <IconContext.Provider value={{color:'black'}}>
      <Nav >
        <NavContainer dark={dark}>
          <NavLogo to='/'>
          BBC
          </NavLogo>
          <MobileIcon onClick={handelClick}>{click ?  <IoMdClose/>:<TbMenu />}</MobileIcon>
           <NavMenu click={click} >
            <NavItem>
              <Navlinks to='/'>Home</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks  to='/'>Services</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks  to='/'>about</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks  to='/'>Contact</Navlinks>
            </NavItem>

            <Tooltip title={"login pages"}>
            <Button>en</Button>
            </Tooltip>

            <Tooltip title={dark ? "dark mode" : "light mode"}>
            <Button variant='text'   onClick={()=>setDark(!dark)} >
              
              {
                dark ?  <MdNightlight color={dark ? "white" : "black"}  fontSize={"30px"} />:   <MdLightMode color=' #f5b400' fontSize={"30px"} />
              }
            </Button>
            </Tooltip>
            <Tooltip title={"login pages"}>
            <Button onClick={()=>{setOpen(true);setClick(false)}} sx={{borderRadius:"18px",margin:"13px"}} variant='contained'>login</Button>
            </Tooltip>
          
           </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
