import { Card, Crad } from "./Card"
import  {AbouteContainer,Info,PuLL,Title,Pargraphe,ContainerCard} from "./style"

export default function About({dark}) {
  return (
   <AbouteContainer 

  dark={dark}
   >

    <Info>
           <PuLL dark={dark} whileHover={{scale:1.1}}>
              Key Features
            </PuLL>
        <Title>
        Why BBC  ? 

        </Title>

          <Pargraphe>
          BBC helps you in building fully responsive websites and products that match your style.
          in building full
          </Pargraphe>
        
    </Info>
    <ContainerCard >
       <Crad/>
       <Crad/>
       <Crad/>
       <Crad/>
    </ContainerCard>
     
   </AbouteContainer>
  )
}
