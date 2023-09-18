import {Heading, Grid,GridItem,Show} from '@chakra-ui/react'

function App() {

  return (
    
   <Grid templateAreas={{
    base: `'main nav'`,
    sm: `'intro main nav'`,

   }}>
     <Show above='sm'>
     <GridItem area='intro' bgColor={'pink'}>Intro</GridItem>
     </Show>
    
    <GridItem area='main' bgColor={'gold'}>main</GridItem>
    <GridItem area='nav' bgColor={'blue'}>nav</GridItem>


   </Grid>
   
  )
}

export default App 
