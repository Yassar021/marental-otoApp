import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"

const Authentication = ({pageTitle,children}) => {
    return (
        <>
        <Head>
            <title>Authentication | {pageTitle}</title>
        </Head>
        <Container maxW='8xl'>
            <Box  pb='200px'>
                {children}
            </Box>
        </Container>
        </>
    )
}

export default Authentication