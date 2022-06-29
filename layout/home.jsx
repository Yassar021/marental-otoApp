import {Box, Container} from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home = ({children, pageTitle}) => {
    return ( 
        <>
        <Head>
            <title>MarentalOto | {pageTitle}</title>
        </Head>
        <Navbar />
        <Container maxW='8xl'>
            <Box pt='40px' px={{base:'10px',md:'40px'}}>
                {children}
            </Box>
        </Container>
        </>
    )
}

export default Home
