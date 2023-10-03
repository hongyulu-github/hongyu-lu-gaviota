import { Box, Image, Text,HStack, Heading } from '@chakra-ui/react'

import './Project.css'

interface Props{
    title: string,
    subtitle: string,
    imageSrc: string,
    link: string
}

const Project = ({title,imageSrc,subtitle,link}:Props) => {
  return (
    <a href={link} target='_blank'>
            <Box className='hover project' display={'flex'} marginY='70px'  >
                <Image objectFit='scale-down' className='hoverSm' maxWidth='1100px' minWidth='500px' width='60%' height='auto' src={imageSrc} marginRight={17} borderRadius='8px'/>
                    <HStack className='hoverBg' flexDirection='column' alignItems='flex-end' justifyContent='flex-end' textAlign='right' width='17%'>
                     
                      <Heading className='projectTitle'>{title}</Heading>
                      <Text className='subtitle' display='none' fontSize='sm'>{subtitle}</Text>
                   
                        
                    </HStack>           
            </Box>
    </a>
  )
}

export default Project