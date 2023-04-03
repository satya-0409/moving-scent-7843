import { Box, Button, Flex, HStack, Image, Input, Text } from "@chakra-ui/react";

import { BiUser } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";

export default function Navbar({handleSearch}) {
    const [search, setSearch] = useState(false);
    const {isauth, name, handleLogout} = useContext(AuthContext);

    return (
        <div>
            <Flex bg="red" color={"white"} p="10px 20px" alignItems="center" justifyContent="space-between" pos="fixed" zIndex="1" w="100%">
                <HStack gap="20px" fontWeight="bold" ml="20px">
                    <Link to="/menproducts">
                        <Box>MEN</Box>
                    </Link>
                    <Link to="/womenproducts">
                    <Box>WOMEN</Box>
                    </Link>
                    <Box>KIDS</Box>
                    <Box>SPORTS</Box>
                    <Box border="2px solid red" p="5px 15px" color="red" >SALE</Box>
                </HStack>
                <HStack>
                    <Link to="/">
                        <Image src="https://i.ibb.co/xqVj6ZM/2.png"  alt="PetrolJaens" w="10%" borderRadius={"10px"} />
                    </Link>
                </HStack>
                <HStack gap="20px" mr="20px">
                    {!isauth ? 
                    <Link to="/register">
                        <BiUser  size="30px"/>
                    </Link> : null}
                    {isauth ? <Text fontSize="lg" fontWeight="bold" textDecorationLine="underline">Welcome {name}</Text> : null}
                    <FiSearch size="30px" onClick={() => setSearch(true)}/>           
                    <Link to="/whishlist" >
                        <BsHeart  size="30px"/>
                    </Link>   
                    <Link to="/addtocartpage">
                    <HiOutlineShoppingBag size="30px" /> 
                    </Link> 
                    {isauth ? <Button colorScheme="teal" onClick={handleLogout}>Logout</Button> : null}    
                </HStack>
            </Flex>
            <Box h="80px"/>
            {search ? 
            <Flex alignItems="center" p="10px 20px" gap="20px" pos="fixed" zIndex="2" w="full" bg="white">
                <FiSearch size="20px" />
                <Input placeholder="What are you looking for?" onInput={(e) => handleSearch(e.target.value)} border="none" />
                <RxCross2 size="20px" onClick={() => setSearch(false)}/>
            </Flex> : null }
        </div>
    )
}