import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { GrFormViewHide, GrView } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import axios from 'axios';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
      "first_name" : "",
      "last_name" : "",
      "email" : "",
      "password" : "",
  });
  const navigate = useNavigate();

  const handleSignUp = (e) => {
      axios.post(`https://jittery-blue-nightgown.cyclic.app/users`, data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      navigate("/login");
  };
  

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('black.50', 'black.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'5xl'} textAlign={'center'}>
            Register Here
          </Heading>
          <Text fontSize={'lg'} color={'black.600'}>
            Enjoy all of our features 
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" onChange={(e) => setData({...data, "first_name" : e.target.value})} placeholder="First Name" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={(e) => setData({...data, "last_name" : e.target.value})} placeholder="Last Name"/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setData({...data, "email" : e.target.value})} placeholder="Email Here"/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setData({...data, "password" : e.target.value})} placeholder="Password here"/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <GrFormViewHide /> : <GrView />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.600',
                }}
                onClick={handleSignUp} >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to="/login" style={{"color":"teal" ,"fontSize":"20px" , "fontWeight":"bold"}}>Login</Link>
              </Text>
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