import { Switch, useColorMode} from '@chakra-ui/react'
import './ColorModeSwitch.css'


const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode()
 

  return (
    <>
    
    <label className="switch" >
    <input type="checkbox" checked={colorMode === 'dark'} onChange={toggleColorMode} />
     <span className="slider"></span>
     </label>
    </>
   
 
    
   
  
  )
}

export default ColorModeSwitch