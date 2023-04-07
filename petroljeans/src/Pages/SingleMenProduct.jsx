import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Flex, Heading, Img, Spinner } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { GrFavorite } from 'react-icons/gr';
import axios from 'axios';

const getData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const SingleMenProduct = ({ id,  tag, src, price, original, discount, color, title }) => {


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
  const { pro_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    setLoading(true);
    getData(`https://jittery-blue-nightgown.cyclic.app/menproducts/${pro_id}`)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        setErr(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [pro_id]);

  return loading ? (
    <Spinner
      thickness='10px'
      marginTop={"20%"}
      speed='0.65s'
      emptyColor='gray.200'
      color='red.500'
      size='xl'
    />
  ) : err ? (
    <div>Something went wrong</div>
  ) : (
    <>
    <Navbar/>


    <Flex boxShadow="md">
        <Img src={product.src} alt={product.title} w={"400px"} height={"400px"} marginLeft={"10%"}  />
        <Box display="flex" flexDirection="column" marginLeft={"1rem"}>
          <Heading   fontSize={"30px"}>{product.title}</Heading>
          <Box style={{paddingLeft:"130px", paddingTop:"30px" , paddingBottom:"40px"}}>
            <p style={{textAlign:"left"}}><span style={{fontWeight:"bold"}}>Colour:</span> {product.color}</p>
            <p style={{textAlign:"left"}}><span style={{fontWeight:"bold"}}>MRP :</span>₹{product.price}</p>
          </Box>
          <Box flexDirection="column" paddingLeft="130px">
            <p style={{width:"50%", paddingLeft:"0px" , paddingTop:"30px", textAlign:"left"}}>{product.description}</p>
          </Box>
          <Flex style={{paddingLeft:"130px"}}>
            <Button style={{marginTop:"100px" ,color:"white",backgroundColor:"black", padding:"20px" , width:"100px"}}><Link to="/addtocart"> Add to Cart</Link> </Button> 
            {/* <Box style={{marginTop:"75px" , padding:"30px" }} ><GrFavorite size={"30px"} /></Box> */}
            {tag!==undefined ? <Image src={tag} alt="tag" w={{ base: "20%", md: "30%" }} pos="absolute" top="0px"/> : null}
            <Box style={{marginTop:"75px" , padding:"30px" }} ><GrFavorite onClick={handleWishlist} size="20px"/></Box>
          </Flex>
        </Box>
      </Flex>
    <Footer/>
    </>
  );
};

export default SingleMenProduct;
