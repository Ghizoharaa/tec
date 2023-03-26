import { Button } from '@mui/material';
import styled from 'styled-components'
import { Container} from '../../../golobalStyle';

export const ContainerI = styled(Container)`
  margin-top:8vw;


   display:flex;
   justify-content:space-between;
  align-items:center;
   gap:100px;


   
  @media screen and (max-width: 960px) {
    flex-direction:column;

}
${Container} 
`;

export const Left = styled.div`
   font-size:25px;;
   
   
     


  @media screen and (max-width: 768px) {
    font-size:20px;
    text-align:center;
  }
    
`;

export const Title = styled.h1`
  font-size:5vw;
  font-weight:800;
  padding:8px 0px;
 

  @media screen and (max-width: 768px) {
    font-size:6vw;
  }
    
`;

export const Description = styled.p`
    text-align:justify;
    font-size:20px;
    margin-top:1vw;
  padding:8px;
 
`;

export const Info = styled.div`
margin-bottom:11vw;
  margin-top:3vw;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
   

  @media screen and (max-width: 768px) {
  flex-direction:column;
  }
    
`;

export const ButtonL = styled(Button)`
    padding: 8px;
    width:350px;
  font-size:20px;
  

  border-radius: 15px;

  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
    
`;

export const Contact = styled.div`
    font-size:18px;
     @media screen and (max-width: 768px) {
        
  }
`;

export const Phone = styled.span`
   
    font-weight: bold;
`;

export const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;

export const Right = styled.div`

margin-bottom:190px;

`;

