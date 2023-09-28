import { Heading } from '@chakra-ui/react'
import {Link} from 'react-router-dom'


interface Props{
    nextPageLink:string,
    message: string,

}

const NextPage = ({nextPageLink,message}:Props) => {
  return (
    <Link to={nextPageLink}>
        <Heading marginY={5} height='50px'>{message}</Heading>
         </Link>
  )
}

export default NextPage