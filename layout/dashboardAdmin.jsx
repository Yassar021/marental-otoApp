import { Box, Container, Flex, HStack, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Head from "next/head"

const DashboardAdmin = ({pageTitle, children}) => {
    return ( 
        <>
        <Head>
            <title>Dashboard | {pageTitle}</title>
        </Head>

        <Flex direction={'row'}>
            <Box w='265px' h={{md:'130vh',lg:'116vh',xl:'100vh'}} bgColor={'#011627'} pt='45px' px='20px'>
                <Stack direction={'column'} spacing='40px'>
                    <Box>
                        <Image mx='auto' borderRadius={'50%'} src='/pp.png' w={{base:'auto',md:'120px'}} h={{base:'auto',md:'120px'}} alt='profile-picture' />
                    </Box>
                    <Link href='/dashboardAdmin' _hover={{textDecor:'none'}}>
                        <Text fontSize={'18'} fontWeight={'600'}>Daftar Kendaraan</Text>
                    </Link>
                    <Link href='/daftarPemilik' _hover={{textDecor:'none'}}>
                        <Text fontSize={'18'} fontWeight={'400'}>Daftar Pemilik</Text>
                    </Link>
                    <Link href='/transaksi' _hover={{textDecor:'none'}}>
                        <Text fontSize={'18'} fontWeight={'400'}>Transaksi</Text>
                    </Link>
                    <Link href='/konfigurasiAdmin' _hover={{textDecor:'none'}}>
                        <Text fontSize={'18'} fontWeight={'400'}>Konfigurasi</Text>
                    </Link>
                    <Link href='/testimoniAdmin' _hover={{textDecor:'none'}}>
                        <Text fontSize={'18'} fontWeight={'400'}>Testimoni</Text>
                    </Link>
                </Stack>
            </Box>
            <Container maxW='8xl'>
                <Box w='100%' h='100vh' pt='40px' pl={{md:'4px',lg:'20px'}}>
                    {children}
                </Box>
            </Container>
        </Flex>
        </>
    )
}

export default DashboardAdmin