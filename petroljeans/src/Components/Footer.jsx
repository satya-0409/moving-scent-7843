import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Input,
    Link,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

    return (
        <Box pt="40px">
            {/* Upper section */}

            <Flex direction={isSmallerThan600 ? "column" : "row"}>
                <Box
                    bg="#000000"
                    w={isSmallerThan600 ? "100%" : "50%"}
                    color="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    px={{ base: "20px", md: "0" }}
                >
                    <Container mt="10px" w="65%">
                        <Heading size="lg">Sign up to never miss an update.</Heading>
                        <Input
                            placeholder="Enter your Email address*"
                            color="black"
                            w="90%"
                            size="md"
                            bg="white"
                            my="20px"
                        />
                        <Text fontSize="xs" my="20px">
                            By clicking Sign up you have read and agreed to our privacy policy
                        </Text>
                        <Button color="black" w="90%" fontSize="lg">
                            Sign Up
                        </Button>
                    </Container>
                </Box>
                <Box
                    bg="#eeeeee"
                    w={isSmallerThan600 ? "100%" : "50%"}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Container my="7rem" px={{ base: "20px", md: "0" }}>
                        <Text fontSize="2xl" fontWeight="semibold" mb="15px">
                            Connect with us on social media
                        </Text>
                        <Box display="flex" w="40%" justifyContent="space-around" m="auto">
                            <BsInstagram size="30px" />
                            <FaFacebookF size="30px" />
                            <IoLogoYoutube size="30px" />
                        </Box>
                    </Container>
                </Box>
            </Flex>

            {/* Lower section */}

            <Flex
                mt="10px"
                fontSize="lg"
                p="10px"
                justifyContent="space-around"
                direction={isSmallerThan600 ? "column" : "row"}
            >
                <Box mb={isSmallerThan600 ? "20px" : "0"}>
                    <Accordion defaultIndex={[1]} allowMultiple>
                        <AccordionItem>
                            <AccordionButton>
                                <Box as="span" textAlign="left" fontWeight="bold">
                                    HELP
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel textAlign="left" lineHeight="50px">
                                <Text>Order Status</Text>
                                <Text>Delivery</Text>
                                <Text>Returns</Text>
                                <Text>Contact Us</Text>
                                <Text>View All</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

                <Box>
                    <Accordion defaultIndex={[1]} allowMultiple w={{ base: "200px", md: "250px" }}>
                        <AccordionItem>
                            <AccordionButton>
                                <Box as="span" textAlign="left" fontWeight="bold">
                                    COOKIE POLICY & TERMS
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel textAlign="left" lineHeight="50px">
                                <Text>Privacy Policy</Text>
                                <Text>Shipping & Delivery Policy</Text>
                                <Text>Terms & Conditions</Text>
                                <Text>Returns & Refund Policy</Text>
                                <Text>Fees & Payment Policy</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

                <Box>
                    <Accordion defaultIndex={[1]} allowMultiple w={{ base: "250px", md: "300px" }}>
                        <AccordionItem>
                            <AccordionButton>
                                <Box fontWeight="bold" as="span" textAlign="left">
                                    WORLD OF PETROL
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel textAlign="left" lineHeight="50px">
                                <Text>About Petrol</Text>
                                <Text>For Responsible Living</Text>
                                <Text>Only the Brave Foundation</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

                <Link>
                    <Box fontWeight="bold" as="span" textAlign="left">
                        STORE LOCATOR
                    </Box>
                </Link>

            </Flex>

        </Box>
    )
}