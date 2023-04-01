import { Box, Button, Heading, Text, Grid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MenProductsCard from "./MenProductsCard";
import { RxCross2 } from "react-icons/rx";

export default function Wishlist() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        axios.get(`https://jittery-blue-nightgown.cyclic.app/wishlist`)
        .then((res) => setData(res.data))
        .catch((error) => console.log(error))
    };

    const handleDelete = (id) => {
        axios.delete(`https://jittery-blue-nightgown.cyclic.app/wishlist/${id}`)
        .then((res) => console.log(res))
        .catch((error) => console.log(error))

        alert("Product is remove from the Wishlist")
        getData();
    };

    return (
        <div>
            <Navbar />

            <Heading fontSize="xl" p="10px" my="20px">Wishlist</Heading>

            {data.length===0 ? 
                <Box mt="50px" mb="400px">
                    <Heading>YOUR WISHLIST IS EMPTY</Heading>
                    <Link to="/">
                        <Button colorScheme="red" mt="20px">Start Shopping</Button>
                    </Link>
                </Box> 
                :
                <Grid templateColumns="repeat(4,22%)" gap="40px 30px" justifyContent="center" mb="40px" >
                    {data.map((e) => 
                    <div key={e.id} >
                        <MenProductsCard id={e.id} src={e.src} tag={e.tag} price={e.price} original={e.original} discount={e.discount} color={e.color} title={e.title} />
                        <Link to="/addtocartpage"><Button mt="15px">ADD TO CART</Button></Link>
                        <Button colorScheme="red" mt="15px" onClick={() => handleDelete(e.id)}>
                        <Box display="flex" justifyContent="center" alignItems="center" gap="10px" p="15px" >
                            <RxCross2 size="30px" />
                            <Text fontSize="20px">Remove</Text>
                        </Box>
                        </Button>
                    </div>
                    )}
                </Grid>
            }

            <Footer />
        </div>
    )
}