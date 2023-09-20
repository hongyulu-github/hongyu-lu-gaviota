import { Heading } from '@chakra-ui/react'


interface Props{
    nextPageLink:string,
    message: string,

}

const NextPage = ({nextPageLink,message}:Props) => {
  return (
    <a href={'/'+nextPageLink}>
        <Heading marginY={5} height='50px'>{message}</Heading>
         </a>
  )
}

export default NextPage