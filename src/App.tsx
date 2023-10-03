import { Grid,GridItem,Show,Image} from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Greeting from './components/Greeting'
import NavRight from './components/NavRight/NavRight'


import Home from './components/routers/Home'
import About from './components/routers/About'
import Contact from './components/routers/Contact'





function App( ) {




  return (
     <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


       </Routes>
  
<Grid templateAreas={{
base: `'nav nav' 'main navRight'`,
sm: `'nav nav nav' 'intro main navRight'`
}}
templateColumns='1fr 10fr 1fr'

>


 <Show above='sm'>
 <GridItem area='intro' position='fixed' left='20px' top="10px" >
 
    
    <Image src='/hongyu-lu.jpg' boxSize='77px' borderRadius='50%' marginBottom='20px' marginLeft='10px' marginTop='30px' />
    <Greeting/>
    

 </GridItem>
 </Show>

<GridItem area='main'  >
  
</GridItem>

<GridItem area='nav' >


</GridItem>

<GridItem area='navRight'  >
  

  <NavRight />
 

</GridItem>


</Grid>

     </>
  
   
  )
}

export default App 

