import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 60vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 6rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  font-size: 1rem;

  @media (max-width: 768px) {
    
      font-size: 0.6rem; /* Adjust as needed */
    
  }
  @media (max-height: 741px) {
    
    font-size: 0.4rem; /* Adjust as needed */
  
}
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        Embarking on this course introduced an initial sense of chaos, grappling with a novel learning format. However, after the first two sprints, a pivotal shift occurred. The lecturer's responsiveness to our concerns led to a welcome absence of product development involvement, smoothing the adaptation process. Overall, this journey has been transformative, unraveling the intricacies of problem-solving in machine learning projects.
        <br/><br/>
            The research-intensive design phases were particularly enlightening, fostering the generation of ideas that significantly shaped subsequent sprints. These early explorations into project design proved instrumental in establishing a strong foundation for later stages. The live demo critiques emerged as invaluable learning moments. Constructive feedback from critics played a pivotal role in honing my skills and refining my approach to problem-solving.
        <br/><br/>
            This experience not only elevated my technical proficiency but also instilled a resilient problem-solving mindset. Collaborative learning emerged as a cornerstone in the realm of machine learning, underscoring the significance of 
            shared insights and perspectives. The journey has been a holistic
             learning experience, reinforcing the
              importance of adaptability, research, 
              and constructive criticism in the
            ever-evolving landscape of machine learning projects
        
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
