import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box, Button, Flex, Image, Stack, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export default function Home() {
    const gridColumns = useBreakpointValue({ base: "repeat(2,60%)", md: "repeat(3, 40%)", lg: "repeat(4, 28%)" , xl: "repeat(6,15%)" });
    const Categorytemplete = useBreakpointValue({ base: "repeat(1,100%)" , lg: "repeat(2,45%)" });
    const servicestemplete = useBreakpointValue({base:"repeat(2, 50%)" , md: "repeat(4, 22%)"})
    const imageUrl = [
        { "url": "https://diesel.gumlet.io/banner/167825364411.webp?compress=true&q=70" },
        { "url": "https://diesel.gumlet.io/banner/1678449643Website%20Banner%20&%20Ads_1-01.webp?compress=true&q=70"},
        
    ]

    const OfferCard = [
        {
            "src": "https://diesel.gumlet.io/banner/1676539197SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_REHAB%20DENIM_1_1_SS23DROP2-22_2.webp?compress=true&q=70",
            "item": "MENS ACCESSORIES",
            "id": 1,
          },
          {
            "src": "https://diesel.gumlet.io/banner/1676538926SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_EXTRA%20ASSET_%20UW%20&%20BW_1_1_20220505_DIESEL_BEACHWEAR_DAY1_LOOK_14_2282_3.webp?compress=true&q=70",
            "item": "MENS INNERWEAR",
            "id": 2,
          },
          {
            "src": "https://diesel.gumlet.io/banner/1676891223SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_FTW_%20DRESSY_1_1_SS23DROP2-23_2.webp?compress=true&q=70",
            "item": "WOMENS APPAREL",
            "id": 3
          },
          {
            "src": "https://diesel.gumlet.io/banner/1673432566FW22%20DROP1-2-3%20+%20HIGH%20SUMMER%20OPC_DROP%203_NEW%20LIBRARY%20DENIM%20JACKETS_1_1_JPEG_300dpi_square_1080x1080.webp",
            "item": "MENS APPAREL",
            "id": 4
          },
          {
            "src": "https://diesel.gumlet.io/banner/1676539252SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_DENIM_%20DNA%20WASHES%20_1_1_SS23DROP2-9_2.webp?compress=true&q=70",
            "item": "WOMENS APPAREL",
            "id": 5
          },
          {
            "src": "https://diesel.gumlet.io/banner/1676538824SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_DENIM_%20DNA%20WASHES%20_1_1_HOLIDAYS-5_2.webp?compress=true&q=70",
            "item": "MENS DENIM",
            "id": 6
          },
    ];

    return (
        <div>
            <Navbar />

            {/* Offer Banner                              Offer Banner*/}

            <Carousel showArrows={false} infiniteLoop autoPlay interval="2000" showThumbs={false}>
                {imageUrl.map((e) => 
                    <Box key={Date.now()} pos="relative" display="flex" justifyContent="center" mb="30px"> 
                        <Image src={e.url} alt="Advertise" w="full" />
                        <Flex gap="20px" pos="absolute" bottom="20%">
                            <Link to="/products"><Button bg="#ff0000" color="white" _hover={{border: "1px solid #ff0000", bg: "transparent", color: "#ff0000"}} px="30px">DISCOVER MAN</Button></Link>
                            <Link to="/products"><Button bg="#ff0000" color="white" _hover={{border: "1px solid #ff0000", bg: "transparent", color: "#ff0000"}} px="30px">DISCOVER WOMAN</Button></Link>
                        </Flex>
                    </Box>
                )}
            </Carousel>

            {/* Offer Section                     Offer Section */}

            <Grid templateColumns={gridColumns} my="40px" justifyContent="space-around">
                {OfferCard.map((e) => 
                <Flex key={e.id} direction="column" >
                    <Box display="flex" justifyContent="center">
                        <Image src={e.src} alt="image" w="200px" h="200px" />
                    </Box>
                    <Box p="10px" fontWeight={"bold"}>
                        <Text fontSize="lg">{e.item}</Text>
                    </Box>
                </Flex>
                )}
            </Grid>

            {/* Category Section                      Category Section*/}

            <Grid templateColumns={Categorytemplete} templateRows="2" justifyContent="center" gap="20px 30px" mb="20px">
                <Box pos="relative" display="flex" justifyContent="center" alignItems="center">
                    <Image w="full" h="full" src="https://diesel.gumlet.io/cms_images/1676638237SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_BIG%20D_16_9_300dpi_16-9_300DPI.webp?compress=true&q=70" alt="LOGOMANIA" />
                    <Text fontSize="xl" fontWeight="bold" color="white" pos="absolute">LOGOMANIA</Text>
                </Box>
                <Box pos="relative" display="flex" justifyContent="center" alignItems="center">
                    <Image w="full" src="https://diesel.gumlet.io/cms_images/1676638471SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_LUNAR%20NEW%20YEAR%20OF%20THE%20RABBIT%20_16_9_300dpi_DIESEL_OPC%20SS23-2_LNY%20RABBIT_FULL%20UX%2002_005_4.webp?compress=true&q=70" />
                    <Text fontSize="xl" fontWeight="bold" color="white" pos="absolute">ALL THINGS GRAPHIC</Text>
                </Box>
                <Box pos="relative" display="flex" justifyContent="center" alignItems="center">
                    <Image w="full" src="https://diesel.gumlet.io/cms_images/1676639325SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_LUNAR%20NEW%20YEAR%20OF%20THE%20RABBIT%20_16_9_300dpi_DIESEL_OPC%20SS23-2_LNY%20RABBIT_FULL%20UX%2002_028_4.webp?compress=true&q=70" alt="WINTER EDIT" />
                    <Text fontSize="xl" fontWeight="bold" color="white" pos="absolute">WINTER EDIT</Text>
                </Box>
              
                <Box pos="relative" display="flex" justifyContent="center" alignItems="center">
                    <Image w="full" src="https://diesel.gumlet.io/cms_images/1676638608GEN6%20GRIFFED%20SMARTWATCH%20FW22_STILLS_DZT2042_JPEG_GEN6_Still_[HO22]_[DZT2042]%2016-9.webp?compress=true&q=70" alt="WATCHES" />
                    <Text fontSize="xl" fontWeight="bold" color="white" pos="absolute">WATCHES</Text>
                </Box>
            </Grid>

            {/* Services */}

            <Stack  mb="40px" gap="10px">
                <Grid  templateColumns={servicestemplete} justifyContent="space-around">
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614479icons-01.webp" alt="PERSONALISED STYLING" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">PERSONALISED STYLING</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614498icons-02.webp" alt="30 DAY FREE RETURN" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">30 DAY FREE RETURN</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614517icons-03.webp" alt="AUTHENTIC PRODUCTS" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">AUTHENTIC PRODUCTS</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614563icons-04.webp" alt="FLEXIBLE & SECURE PAYMENTS" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">FLEXIBLE & SECURE PAYMENTS</Text>
                    </Flex>
                </Grid>
                <Grid templateColumns={servicestemplete} justifyContent="space-around">
                <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614575icons-05.webp" alt="LIFETIME SUPPORT" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">LIFETIME SUPPORT</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614585icons-06.webp" alt="PRE - ORDER" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">PRE - ORDER</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614595icons-07.webp" alt="EXCLUSIVE OFFERS" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">EXCLUSIVE OFFERS</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614606icons-08.webp" alt="FREE SHIPPING" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">FREE SHIPPING</Text>
                    </Flex>
                </Grid>
            </Stack>
            
            {/* Shoping Card section                     Shoping Card section*/}

            <Box pos="relative" display="flex" justifyContent="center" alignItems="center" mb="30px"> 
                <Image src="https://diesel.gumlet.io/cms_images/1671005754Artboard%203@3x.webp" alt="Advertise" w="full" />
                <Flex gap="20px" pos="absolute">
                    <Link to="/products"><Button bg="#ffffff" color="black" _hover={{border: "1px solid #ffffff", bg: "transparent", color: "#ffffff"}} px="40px">SHOP MAN</Button></Link>
                    <Link to="/products"><Button bg="#ffffff" color="black" _hover={{border: "1px solid #ffffff", bg: "transparent", color: "#ffffff"}} px="40px">SHOP WOMAN</Button></Link> 
                </Flex>
            </Box>

            <Footer />
        </div>
    )
}
