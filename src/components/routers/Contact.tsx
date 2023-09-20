import { HStack, Icon } from "@chakra-ui/react"
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import './Contact.css'

const Contact = () => {

  const contactList =[
    {id:1, title: 'Linkedin', link:'https://www.linkedin.com/in/hongyu-lu-b86b44115/', icon:BsLinkedin},
    {id:2, title: 'Github', link:'https://github.com/hongyulu-github', icon:BsGithub},
    {id:3, title: 'Twitter', link:'https://twitter.com/HongyuLulu', icon:BsTwitter},
    {id:4, title: 'Email', link:'mailto:hongyu.lu_cn@outlook.com', icon:BsFillEnvelopeAtFill},

  ]
    
  return (
    
    <HStack height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
  

       <ul style={{listStyle:"none",}}>
      {contactList.map(contact => 
      <li key={contact.id} >
        <a href={contact.link} target="_blank">
          <Icon className="icon" boxSize='60px' as={contact.icon}/>
        </a>
      </li>)}
    </ul>
    </HStack>
  

    
  )
}

export default Contact