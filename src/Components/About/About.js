import { Card, Crad } from "./Card"
import  {AbouteContainer,Info,PuLL,Title,Pargraphe,ContainerCard} from "./style"

export default function About() {
  return (
   <AbouteContainer 
   animate={{opacity:[0.85,0.90,0.95,1],y:0}}

   initial={{y:30}}
   transition={{
    type: 'tween',
    duration: 1.2
  }}
   
   >

    <Info>
           <PuLL whileHover={{scale:1.1}}>
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
