import { Grid,GridItem,Box, HStack, Heading} from '@chakra-ui/react'
import ColorModeSwitch from '../ColorModeSwitch'
import { Outlet } from 'react-router-dom'

import Project from '../Project/Project'
import NextPage from '../NextPage'

interface Project {
  title: string,
  subtitle: string,
  imageSrc: string,
  link:string

}



function Home( ) {


  
const projectslist:Project[] =[
  {title:"Game Hub", subtitle:"Este proyecto de front-end utiliza React y TypeScript con la herramienta Vite para crear una réplica de una popular página de juegos en línea. Hemos integrado un API que proporciona datos en tiempo real sobre una amplia variedad de juegos. Nuestra aplicación ofrece funciones esenciales, como la capacidad de buscar juegos por título o género, así como la opción de ordenarlos según tus preferencias. También hemos incorporado otras características para mejorar la experiencia del usuario, como la clasificación y filtrado avanzados. Con este proyecto, pretendemos ofrecer una experiencia de navegación y búsqueda de juegos similar a la de la plataforma original.",imageSrc:"/game-hub.png",link:"https://game-hub-hongyulu-github.vercel.app/"},
  {title:"Kiki's house", subtitle:"Este proyecto personal de React.js es la creación de una página web para un restaurante que refleja mi pasión por el diseño estético. He puesto un énfasis especial en el estilo elegante y uniforme de la plataforma. Desde la elección de la paleta de colores hasta la disposición meticulosa de cada elemento, cada detalle ha sido cuidadosamente seleccionado para garantizar una experiencia visualmente atractiva y coherente. ",imageSrc:"/kiki-s-house.png", link:"https://hongyulu-github.github.io/kiki-s-house/"},
  {title:"Kiki's tea house", subtitle:" Nos complace presentar la expansión de nuestro querido proyecto Kiki's House en forma de una tienda de té en línea creada con Vite + React. En Kiki's Tea House, te invitamos a explorar una amplia variedad de tés exquisitos, desde los sabores clásicos hasta las mezclas más innovadoras. ",imageSrc:"/kiki-s-tea-house.png", link:"https://kiki-s-tea-house.vercel.app/"},
  {title:"Find Your Chinese name", subtitle:"Mi proyecto es una página web dedicada a mis queridos alumnos de chino en la EOI Málaga. En esta página, pueden ingresar su nombre y el curso que están cursando para descubrir cómo se llamarían en chino. Es un regalo de despedida personalizado y emocional. Además, incluye un mensaje breve y personal de mi parte para cada uno de ellos. Esta página es mi manera de expresar mi gratitud y cariño por su dedicación y esfuerzo en el aprendizaje del chino. Espero que esta experiencia especial les deje un recuerdo duradero de su tiempo en el curso y les inspire en su viaje lingüístico.",imageSrc:"/nombre-chino.png",link:"https://hongyulu-github.github.io/EOIMalagaChinoLu/"},
  {title:"Simon Dice", subtitle:"Gracias al curso de Bootcamp Web Development de Angela Yu en Udemy, he creado un emocionante mini juego que ha mejorado mi lógica y programación. Disfruté enormemente construyendo este proyecto, que me brindó habilidades valiosas y un profundo sentido de logro.",imageSrc:"/simon-dice.png",link:"https://hongyulu-github.github.io/simondice/"},
  {title:"Pomodoro Timer", subtitle:"El Pomodoro Timer con React es una aplicación de productividad que utiliza la técnica Pomodoro para mejorar tu enfoque. Con un temporizador intuitivo, una lista de tareas integrada y citas motivadoras, esta herramienta te ayuda a gestionar tu tiempo de manera efectiva. Desarrollada en React, la aplicación ofrece una experiencia de usuario fluida. Actualmente en desarrollo del backend para funcionalidades adicionales y sincronización en la nube. ",imageSrc:"/pomodoro-timer.png",link:"https://pomodoro-timer-hylu.vercel.app/"},

  

]
  



  return (
    
   <Grid templateAreas={{
    base: `'nav nav' 'main navRight'`,
    sm: `'nav nav nav' 'intro main navRight'`
   }}
    templateColumns='1fr 10fr 1fr'

   >
   
  {/*
   <Show above='sm'>
     <GridItem area='intro' position='fixed' left='2px' top="10px" >
        <Greeting/>
     </GridItem>
     </Show>
  */}
    
    
    <GridItem area='main' marginLeft='70px' >
        <Box width='90%' marginBottom='300px' marginLeft='50px' marginTop='50px'>
          <Heading>¡Bienvenidos! Welcome 欢迎 Bienvenidos स्वागत مرحبًا স্বাগত Bem-vindos Добро пожаловать ようこそ സ്വാഗതം Willkommen Bienvenue ਜੀ ਆਇਆ ਨੂੰ Sugeng rawuh 欢迎 స్వాగతం स्वागत आहे Hoş geldiniz வரவேற்கின்றோம் خوش آمدید.</Heading>
          <Heading size='lg' marginTop={5}>A mi porfolio, <br/>entantada.</Heading>
          <Heading size='2xl' marginTop={40} textAlign={'right'}>Me llamo Hongyu Lu, </Heading>
          <Heading size='3xl' marginTop={5}  textAlign={'right'}>una desarrolladora web autodidacta.</Heading>
          <Heading size='lg' marginTop={5}  textAlign={'right'}>Haz scroll hacia abajo para ver mis proyectos.</Heading>
        </Box>
        {projectslist.map(p => 

            <Project title={p.title} subtitle={p.subtitle} imageSrc={p.imageSrc} link={p.link} /> 

        )}
        <NextPage nextPageLink='about' message="¿Curioso? Descubre más sobre mí en 'About Me'. ¡No te lo pierdas! 😄"/>
        <div>
          <Outlet />
        </div>
        

     
      
    </GridItem>

    <GridItem area='nav' >
     <HStack justifyContent='flex-end' marginRight={10} marginTop={2}>
    
       <ColorModeSwitch />
     
    
     
     </HStack>

     

    </GridItem>

    <GridItem area='navRight'  position='fixed' right='2px' top='50px'  >
   
     
     
     
    
    </GridItem>


   </Grid>
   
  )
}

export default Home 
