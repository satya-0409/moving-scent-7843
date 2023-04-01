import { Box, Flex, Grid, Heading, Select, Text, Button, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import axios from "axios";
import WomenProductsCard from "./MenProductsCard";

export default function WomenProducts() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState(""); 

    useEffect(() => {
        getData(page, search, order);
    },[page, search, order]);

    const getData = (page, search, order) => {
        axios.get(`https://jittery-blue-nightgown.cyclic.app/womenproducts?_sort=price&_order=${order}&q=${search}&_page=${page}&_limit=12`)
        .then((res) => {
            setData(res.data);
            setLoading(false);
        })
        .catch((error) => console.log(error))
    };

    const handleSearch = (value) => {
        setSearch(value);
    };

    if (loading) {
        return <Spinner
        thickness='10px'
        marginTop={"20%"}
        speed='0.65s'
        emptyColor='gray.200'
        color='red.500'
        size='xl'
      />
        
    }
    
    return (
        <div>
            <Navbar handleSearch={handleSearch}/>

            {/* Heading & Sort */}

            <Box bg="#f9f9f9" p="20px" mb="20px">
                <Heading size="2xl" mb="40px">MEN PRODUCTS</Heading>
                <Flex justifyContent="end" pr="20px">
                    <Select placeholder="SORT BY" w="20%" bg="white" onChange={(e) => setOrder(e.target.value)}>
                        <option value="asc">Price Low to High</option>
                        <option value="desc">Price High to Low</option>
                    </Select>
                </Flex>
            </Box>

            {/* Product display */}

            <Grid templateColumns="repeat(4,22%)" gap="40px 30px" justifyContent="center" mb="40px" >
                {data.map((e) => <WomenProductsCard key={e.id} id={e.id} src={e.src} tag={e.tag} price={e.price} original={e.original} discount={e.discount} color={e.color} title={e.title} />)}
            </Grid>

            {/* Pagination */}

            <Flex justifyContent="center" alignItems="center" gap="20px" mb="30px">
                <Button colorScheme="red" isDisabled={page===1} onClick={() => setPage(page-1)}>Previous</Button>
                <Text fontWeight="bold" fontSize="lg">{page}</Text>
                <Button colorScheme="red" isDisabled={data.length<12} onClick={() => setPage(page+1)}>Next</Button>
            </Flex>

            <Footer />
        </div>
    )
}
