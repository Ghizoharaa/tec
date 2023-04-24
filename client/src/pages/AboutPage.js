import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useTheme } from '../hook/useTheme';



const AboutPage = () => {

  const {theme}=useTheme()

  return (

    <ContainerAbout>
      <Container  style={{ color: theme=="dark" ? "white" : "black" }}>
        <div className='header' >
          <div className='content' >
            <div className='title'>
            <h1>About Us</h1>

            <div className='body'>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis tincidunt, vestibulum arcu vel, venenatis urna. Suspendisse potenti. Fusce non facilisis nisi. Vestibulum vel nulla ut purus ullamcorper blandit. Nam malesuada justo sed magna ultricies, a interdum turpis euismod. Nulla facilisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis tincidunt, vestibulum arcu vel, venenatis urna. Suspendisse potenti. Fusce non facilisis nisi. Vestibulum vel nulla ut purus ullamcorper blandit. Nam malesuada justo sed magna ultricies, a interdum turpis euismod. Nulla facilisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis tincidunt, vestibulum arcu vel, venenatis urna. Suspendisse potenti. Fusce non facilisis nisi. Vestibulum vel nulla ut purus ullamcorper blandit. Nam malesuada justo sed magna ultricies, a interdum turpis euismod. Nulla facilisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis tincidunt, vestibulum arcu vel, venenatis urna. Suspendisse potenti. Fusce non facilisis nisi. Vestibulum vel nulla ut purus ullamcorper blandit. Nam malesuada justo sed magna ultricies, a interdum turpis euismod. Nulla facilisi.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis tincidunt, vestibulum arcu vel, venenatis urna. Suspendisse potenti. Fusce non facilisis nisi. Vestibulum vel nulla ut purus ullamcorper blandit. Nam malesuada justo sed magna ultricies, a interdum turpis euismod. Nulla facilisi.
              
               </p>

               <div className='img'> 
      
         </div>
            </div>
            </div>
 
           
           
          </div>
         
        </div>
      </Container>
 
    </ContainerAbout>

  );
}

export default AboutPage;




/// style

export const ContainerAbout = styled.div`

margin-top:50px;
padding-bottom:120px;

  .header{
    margin-top:30px;
  }


  .body{

    display:flex;
    flex-direction:row;
    justify-content:center;
  }
p{
margin-top:20px;

flex:1;
text-align:justify;

}

.img{
  flex:1;
}
.title{
 
  font-size:30px;
position: relative;
&::before{
  content:" ";
  height: 7px;
  border-radius:5px;
  width: 13%;
 margin:10px 0px;
  background: rgb(1,180,228);
background: linear-gradient(90deg, rgba(1,180,228,1) 18%, rgba(144,206,161,1) 88%);
  display: block;
  position: absolute;
  top: 40px;
  left: 0;
}



}
`