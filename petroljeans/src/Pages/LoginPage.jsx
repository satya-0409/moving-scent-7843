import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue} from '@chakra-ui/react';
import { Link, useNavigate} from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Authentication/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  const [detail, setDetail] = useState({
      "email" : "",
      "password": "",
  });

  const userLogin = () => {
      axios.get(`https://jittery-blue-nightgown.cyclic.app/users?q=${detail.email}&${detail.password}`)
      .then((res) => {
          setUser(res.data)
          res.data.length===0 ?  alert("Invalid credential! Not a register user, Sign Up.") : handleLogin(res.data[0].first_name)
          navigate("/");
      })
      .catch((error) => console.log(error))
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> 
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setDetail({...detail, "email" : e.target.value})} placeholder="Email Here"/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setDetail({...detail, "password" : e.target.value})} placeholder="Password Here" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                
              </Stack>
              <Button
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={userLogin} >
                Sign in
              </Button>
              <Stack pt={2}>
                  <Text align={'center'}>
                  Don't have an account? <Link to="/register" style={{"color":"teal" ,"fontSize":"20px" , "fontWeight":"bold"}}>Sign up</Link>
                  </Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack align="end">
              <Link to="/">
                  <ImHome />
              </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}