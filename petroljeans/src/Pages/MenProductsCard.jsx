import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { GrFavorite } from "react-icons/gr";

export default function MenProductsCard({ id, tag, src, price, original, discount, color, title }) {
    const handleWishlist = () => {
        const data = {
            id,
            tag,
            src,
            price,
            original,
            discount,
            color,
            title,
        } 

        axios.post(`https://jittery-blue-nightgown.cyclic.app/wishlist`, data)
        .then((res) => console.log(res))
        .catch((error) => console.log(error))

        alert("Products is added to the Wishlist.")
    };

    return (
        <div>
            <Flex direction="column" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                <Box pos="relative">
                    <Image w="100%" src={src} alt="image" h={{ base: "250px", md: "350px", lg: "503px" }} />
                    {tag!==undefined ? <Image src={tag} alt="tag" w={{ base: "20%", md: "30%" }} pos="absolute" top="0px"/> : null}
                    <Box pos="absolute" right="20px" bottom="20px" ><GrFavorite onClick={handleWishlist} size="20px"/></Box>
                </Box>   
                <Box textAlign="left" p={{ base: "5px", md: "10px" }}>
                    <Flex gap={{ base: "10px", md: "15px" }} mb={{ base: "5px", md: "10px" }} fontWeight="bold">
                        <Text fontSize={{ base: "sm", md: "lg" }}>Rs. {price}</Text>
                        {original!==undefined ? <Text fontSize={{ base: "sm", md: "lg" }} color="#686868" textDecorationLine="line-through">Rs. {original}</Text> : null}
                        {discount!==undefined ? <Text fontSize={{ base: "sm", md: "lg" }} color="#808080">{discount}</Text> : null}
                    </Flex>
                    <Text fontSize={{ base: "sm", md: "lg" }}>{color}</Text>
                    <Text noOfLines={{ base: "2", md: "1" }} fontSize={{ base: "sm", md: "lg" }}>{title}</Text>
                </Box>   
            </Flex>
        </div>
    )
}
