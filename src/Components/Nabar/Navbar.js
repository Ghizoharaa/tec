import React from 'react';
import { TbMenu } from 'react-icons/tb';
import  {MdLightMode,MdNightlight} from "react-icons/md";
import  {IoMdClose} from "react-icons/io";
import { IconContext } from 'react-icons/lib';
import { 
  Nav, NavContainer, NavLogo, MobileIcon,NavItem,Navlinks,NavMenu

} from './style';
import { Button, Tooltip } from '@mui/material';

const NavItemLinks=[
  {
    id:1,
    href:"/",
    name:"home"
  },
  {
    id:2,
    href:"/",
    name:"home"
  },
  {
    id:3,
    href:"/",
    name:"home"
  },
  {
    id:4,
    href:"/",
    name:"home"
  }
]


function Navbar({click,setClick,setOpen,dark,setDark}) {
  const handelClick=()=>setClick(!click);
  return (
    <IconContext.Provider value={{color:'#1CC4CF'}}>
      <Nav >
        <NavContainer dark={dark}>
          <NavLogo to='/'>
          TEC
          </NavLogo>
          <MobileIcon onClick={handelClick}>{click ?  <IoMdClose/>:<TbMenu />}</MobileIcon>
           <NavMenu click={click} dark={dark} >
     
                <NavItem>
                <Navlinks dark={dark} to='/'>Home</Navlinks>
              </NavItem>
              <NavItem>
                <Navlinks dark={dark} to='/about'>about</Navlinks>
              </NavItem>
              <NavItem>
                <Navlinks dark={dark} to='/sercices'>Services</Navlinks>
              </NavItem>
              <NavItem>
                <Navlinks dark={dark} to='/cantact'>cantact us</Navlinks>
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
