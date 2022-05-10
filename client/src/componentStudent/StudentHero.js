import React, {useState} from 'react'
import StudentImage from '../asserts/images/Student-Image.jpg'
import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import { Button } from '../componentStudent/ButtonElement'

const StudentHero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    };  
  return (
    <HeroContainer id='home'>
           <HeroBg>
               <VideoBg src={StudentImage} />
           </HeroBg>
           <HeroContent>
               <HeroH1>Big On Data Science & AI</HeroH1>
               <HeroP> Empowering Your Business with Data Science and AI Technology World Wide </HeroP>
               <HeroBtnWrapper>
                   <Button to='signup'
                   onMouseLeave={onHover}
                   onMouseEnter={onHover}
                   primary = 'true'
                   dark = 'true'
                   smooth={true} duration={500} spy={true} exact= 'true' offset={-80}
                   >
                       Get Started  {hover ? <ArrowForward /> : <ArrowRight />}
                   </Button>
               </HeroBtnWrapper>

           </HeroContent>
        </HeroContainer> 
  )
}

export default StudentHero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 90vh;   
    position: relative; 
    z-index: 1;

    ::before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100% );
        z-index: 2;
    }

`

const HeroBg = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0.3;

`

const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const HeroH1 = styled.h1 `
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media Screen and (max-width: 760px){
        font-size: 40px;
    }

    @media Screen and (max-width: 480px){
        font-size: 32px;
    }
`

const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media Screen and (max-width: 760px){
        font-size: 24px;
    }

    @media Screen and (max-width: 480px){
        font-size: 18px;
    }
`
const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
